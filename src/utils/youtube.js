// Utilidad compartida para trabajar con URLs de YouTube.
//
// Fase 2: se extrajo acá la lógica de getYouTubeId/getYouTubeEmbedUrl que
// hasta entonces estaba duplicada en VideoGrid.jsx, VideoModal.jsx y (como
// código sin uso) Discursos.jsx, para no volver a duplicarla una cuarta vez
// en DiscursoDetalle.jsx.
//
// Fase 3: VideoGrid.jsx y VideoModal.jsx ya no existen (el índice /discursos
// ahora usa DiscursoCard.jsx, que también consume este archivo). Se agrega
// getYouTubeThumbnail para el thumbnail de la card, en vez de duplicar la
// lógica de VideoThumbnail que tenía VideoGrid.jsx.

// Extrae el ID de video de distintos formatos de URL de YouTube
// (youtube.com/watch?v=, youtu.be/, youtube.com/embed/), o lo devuelve tal
// cual si ya es un ID (sin URL).
export const getYouTubeId = (url) => {
  if (!url) return null;

  if (!url.includes("youtube.com") && !url.includes("youtu.be") && !url.includes("http")) {
    return url;
  }

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/.*[?&]v=([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};

// Construye la URL de embed a partir de una URL de YouTube. Mismos
// parámetros que usaba el VideoModal.jsx original (rel=0, modestbranding=1,
// controls=1, disablekb=1), para que el reproductor del detalle se
// comporte igual que el que había antes.
export const getYouTubeEmbedUrl = (videoUrl) => {
  const videoId = getYouTubeId(videoUrl);
  if (!videoId) return null;
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&disablekb=1`;
};

// Thumbnail estático de YouTube para usar en cards (DiscursoCard). Se usa
// "hqdefault" (no "maxresdefault"): existe siempre para cualquier video
// público, así que no hace falta la lógica de precarga + fallback que tenía
// VideoThumbnail dentro de VideoGrid.jsx.
export const getYouTubeThumbnail = (videoUrl) => {
  const videoId = getYouTubeId(videoUrl);
  if (!videoId) return null;
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

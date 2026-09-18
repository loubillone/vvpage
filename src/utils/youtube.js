// Utilidad compartida para trabajar con URLs de YouTube.
//
// Esta misma lógica ya existe, casi idéntica, duplicada en tres lugares:
// VideoGrid.jsx, VideoModal.jsx y (como código sin uso) Discursos.jsx. Para
// no volver a duplicarla una cuarta vez en DiscursoDetalle.jsx, se extrae
// acá como utilidad reutilizable.
//
// No se tocan VideoGrid.jsx ni VideoModal.jsx en esta fase para no arriesgar
// el comportamiento ya validado del índice /discursos (que sigue usando su
// propia copia interna, sin cambios). Esta utilidad, por ahora, la consume
// únicamente DiscursoDetalle.jsx. Unificar los tres orígenes en uno solo
// queda para una fase posterior de limpieza, una vez que el nuevo flujo de
// detalle esté validado.

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
// parámetros que ya usa VideoModal.jsx (rel=0, modestbranding=1,
// controls=1, disablekb=1), para que el reproductor se vea/comporte igual
// en el detalle que en el modal existente.
export const getYouTubeEmbedUrl = (videoUrl) => {
  const videoId = getYouTubeId(videoUrl);
  if (!videoId) return null;
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&disablekb=1`;
};

import React from "react";
import { Modal } from "react-bootstrap";
import "../css/discursos.css";

// Función helper para extraer el ID de YouTube
const getYouTubeId = (url) => {
  if (!url) return null;
  
  // Si ya es un ID (sin URL), devolverlo directamente
  if (!url.includes('youtube.com') && !url.includes('youtu.be') && !url.includes('http')) {
    return url;
  }
  
  // Diferentes formatos de URL de YouTube
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

// Función para obtener URL de embed de YouTube
const getYouTubeEmbedUrl = (videoUrl) => {
  const videoId = getYouTubeId(videoUrl);
  if (!videoId) return null;
  // Parámetros: rel=0 (no mostrar videos relacionados), modestbranding=1 (menos branding), 
  // controls=1 (mostrar controles), disablekb=1 (deshabilitar teclado para prevenir descargas)
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&disablekb=1`;
};

const VideoModal = ({ video, onClose }) => {
  const embedUrl = getYouTubeEmbedUrl(video.videoUrl);

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      show={true}
      onHide={handleClose}
      size="lg"
      centered
      className="video-modal"
    >
      <Modal.Header closeButton className="video-modal-header">
        <Modal.Title>{video.titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="video-modal-body">
        <div className="video-player-container">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              className="video-player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.titulo}
            />
          ) : (
            <div className="video-error">
              <p>No se pudo cargar el video. Por favor, verifica la URL.</p>
            </div>
          )}
        </div>
        {video.descripcion && (
          <p className="video-descripcion">{video.descripcion}</p>
        )}
        <div className="video-metadata">
          <span className="video-fecha-modal">
            {(() => {
              const [year, month] = video.fecha.split("-");
              const date = new Date(year, parseInt(month) - 1);
              return date.toLocaleDateString("es-AR", {
                year: "numeric",
                month: "long",
              });
            })()}
          </span>
          {video.categoria && (
            <span className="video-categoria-modal">{video.categoria}</span>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VideoModal;

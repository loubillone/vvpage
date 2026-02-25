import React, { useRef, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "../css/discursos.css";

const VideoModal = ({ video, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Pausar video cuando se cierra el modal
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
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
          <video
            ref={videoRef}
            controls
            className="video-player"
            preload="metadata"
          >
            <source src={video.videoUrl} type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
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

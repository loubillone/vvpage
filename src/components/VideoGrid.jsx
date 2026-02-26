import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
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

// Función para obtener thumbnail de YouTube
const getYouTubeThumbnail = (videoUrl) => {
  const videoId = getYouTubeId(videoUrl);
  if (!videoId) return null;
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

const VideoThumbnail = ({ videoUrl, titulo }) => {
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!videoUrl) {
      setLoading(false);
      setError(true);
      return;
    }

    // Obtener thumbnail de YouTube
    const youtubeThumbnail = getYouTubeThumbnail(videoUrl);
    
    if (youtubeThumbnail) {
      setLoading(true);
      setError(false);
      
      // Pre-cargar la imagen para verificar que existe
      const img = new Image();
      
      img.onload = () => {
        setThumbnail(youtubeThumbnail);
        setLoading(false);
      };
      
      img.onerror = () => {
        // Si maxresdefault falla, intentar con hqdefault
        const fallbackThumbnail = youtubeThumbnail.replace('maxresdefault', 'hqdefault');
        const fallbackImg = new Image();
        
        fallbackImg.onload = () => {
          setThumbnail(fallbackThumbnail);
          setLoading(false);
        };
        
        fallbackImg.onerror = () => {
          setError(true);
          setLoading(false);
        };
        
        fallbackImg.src = fallbackThumbnail;
      };
      
      img.src = youtubeThumbnail;
    } else {
      setError(true);
      setLoading(false);
    }
  }, [videoUrl]);

  if (thumbnail && !error) {
    return (
      <img
        src={thumbnail}
        alt={titulo}
        className="video-thumbnail"
        onError={() => setError(true)}
      />
    );
  }

  return (
    <div className="video-thumbnail-placeholder">
      {loading ? (
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      ) : (
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 5V19L19 12L8 5Z"
            fill="currentColor"
            opacity="0.6"
          />
        </svg>
      )}
    </div>
  );
};

const VideoGrid = ({ videos, onVideoClick }) => {
  return (
    <Row className="video-grid">
      {videos.map((video) => (
        <Col
          key={video.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="video-col"
        >
          <div
            className="video-card"
            onClick={() => onVideoClick(video)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onVideoClick(video);
              }
            }}
          >
            <div className="video-thumbnail-container">
              <VideoThumbnail 
                key={`thumb-${video.id}-${video.videoUrl}`}
                videoUrl={video.videoUrl} 
                titulo={video.titulo} 
              />
              <div className="video-overlay">
                <div className="play-button">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 5V19L19 12L8 5Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="video-info">
              <h4 className="video-titulo">{video.titulo}</h4>
              <p className="video-fecha">
                {(() => {
                  const [year, month] = video.fecha.split("-");
                  const date = new Date(year, parseInt(month) - 1);
                  return date.toLocaleDateString("es-AR", {
                    year: "numeric",
                    month: "long",
                  });
                })()}
              </p>
              {video.categoria && (
                <span className="video-categoria-badge">{video.categoria}</span>
              )}
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default VideoGrid;

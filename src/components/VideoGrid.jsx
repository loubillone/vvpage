import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "../css/discursos.css";

const VideoThumbnail = ({ videoUrl, titulo }) => {
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Resetear estado cuando cambia el videoUrl
    setThumbnail(null);
    setLoading(true);

    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) {
      setLoading(false);
      return;
    }

    let isMounted = true;
    let timeoutId = null;

    const captureFrame = () => {
      try {
        if (!isMounted || !video) return;

        // Verificar que el video tenga dimensiones válidas
        const hasValidDimensions = 
          video.videoWidth > 0 && 
          video.videoHeight > 0 &&
          !isNaN(video.videoWidth) &&
          !isNaN(video.videoHeight);

        if (video.readyState >= 2 && hasValidDimensions) {
          const ctx = canvas.getContext("2d");
          
          // Asegurarse de que las dimensiones sean válidas
          const width = Math.max(1, video.videoWidth);
          const height = Math.max(1, video.videoHeight);
          
          canvas.width = width;
          canvas.height = height;
          
          try {
            ctx.drawImage(video, 0, 0, width, height);
            const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
            
            // Verificar que la data URL sea válida
            if (dataUrl && dataUrl.length > 100 && isMounted) {
              setThumbnail(dataUrl);
              setLoading(false);
            } else if (isMounted && attempts < maxAttempts) {
              // Reintentar si la data URL no es válida
              tryCaptureFrame();
            } else if (isMounted) {
              setLoading(false);
            }
          } catch (e) {
            console.error("Error generando data URL:", e);
            if (isMounted && attempts < maxAttempts) {
              tryCaptureFrame();
            } else if (isMounted) {
              setLoading(false);
            }
          }
        } else if (isMounted && attempts < maxAttempts) {
          // Si aún no tiene dimensiones válidas, reintentar
          tryCaptureFrame();
        }
      } catch (error) {
        console.error("Error capturando thumbnail:", error);
        if (isMounted && attempts < maxAttempts) {
          tryCaptureFrame();
        } else if (isMounted) {
          setLoading(false);
        }
      }
    };

    let attempts = 0;
    const maxAttempts = 3;

    const tryCaptureFrame = () => {
      attempts++;
      if (isMounted && attempts <= maxAttempts) {
        setTimeout(() => {
          if (isMounted && video && video.readyState >= 2) {
            captureFrame();
          }
        }, 100 * attempts);
      }
    };

    const handleLoadedMetadata = () => {
      if (!isMounted || !video) return;
      try {
        if (video.duration > 0 && video.duration !== Infinity) {
          video.currentTime = Math.min(1, video.duration / 10);
        } else {
          video.currentTime = 1;
        }
      } catch (e) {
        console.error("Error setting currentTime:", e);
        // Intentar capturar de todas formas
        tryCaptureFrame();
      }
    };

    const handleSeeked = () => {
      if (isMounted) {
        captureFrame();
      }
    };

    const handleLoadedData = () => {
      if (isMounted) {
        tryCaptureFrame();
      }
    };

    const handleCanPlay = () => {
      if (isMounted) {
        tryCaptureFrame();
      }
    };

    const handleTimeUpdate = () => {
      // Si el video está en un frame válido, intentar capturar
      if (isMounted && video && video.readyState >= 2 && !thumbnail) {
        captureFrame();
      }
    };

    const handleError = (e) => {
      console.error("Error cargando video para thumbnail:", videoUrl, e);
      if (isMounted) {
        setLoading(false);
      }
    };

    // Limpiar video anterior
    video.pause();
    video.src = "";
    video.load();

    // Configurar el nuevo video
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";
    
    // Solo usar crossOrigin si es una URL externa
    if (typeof videoUrl === "string" && (videoUrl.startsWith("http://") || videoUrl.startsWith("https://"))) {
      video.crossOrigin = "anonymous";
    }

    // Agregar event listeners
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("error", handleError);

    // Timeout de seguridad
    timeoutId = setTimeout(() => {
      if (isMounted && loading) {
        console.warn("Timeout cargando thumbnail para:", videoUrl);
        setLoading(false);
      }
    }, 8000);

    // Cargar el video
    try {
      video.src = videoUrl;
      video.load();
    } catch (error) {
      console.error("Error al cargar video:", error);
      if (isMounted) {
        setLoading(false);
      }
    }

    return () => {
      isMounted = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (video) {
        video.pause();
        video.src = "";
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("seeked", handleSeeked);
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("error", handleError);
      }
    };
  }, [videoUrl]);

  return (
    <>
      <video
        ref={videoRef}
        preload="metadata"
        style={{ display: "none" }}
        muted
        playsInline
      />
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={titulo}
          className="video-thumbnail"
          onError={() => setThumbnail(null)}
        />
      ) : (
        <div className="video-thumbnail-placeholder">
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
        </div>
      )}
    </>
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
              {video.thumbnail ? (
                <img
                  src={video.thumbnail}
                  alt={video.titulo}
                  className="video-thumbnail"
                />
              ) : (
                <VideoThumbnail 
                  key={`thumb-${video.id}-${video.videoUrl}`}
                  videoUrl={video.videoUrl} 
                  titulo={video.titulo} 
                />
              )}
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

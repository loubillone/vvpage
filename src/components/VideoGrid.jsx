import React from "react";
import { Row, Col } from "react-bootstrap";
import "../css/discursos.css";

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

import { useEffect, useState } from "react";
import {
  ANALYTICS_CONSENT_OPEN_EVENT,
  CONSENT_ACCEPTED,
  CONSENT_REJECTED,
  getAnalyticsConsent,
  setAnalyticsConsent,
} from "../utils/consent";
import "../css/cookieBanner.css";

const CookieBanner = () => {
  const [visible, setVisible] = useState(() => getAnalyticsConsent() === null);

  useEffect(() => {
    const handleOpen = () => setVisible(true);
    window.addEventListener(ANALYTICS_CONSENT_OPEN_EVENT, handleOpen);
    return () => {
      window.removeEventListener(ANALYTICS_CONSENT_OPEN_EVENT, handleOpen);
    };
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    setAnalyticsConsent(CONSENT_ACCEPTED);
    setVisible(false);
  };

  const handleReject = () => {
    setAnalyticsConsent(CONSENT_REJECTED);
    setVisible(false);
  };

  return (
    <div className="cookie-banner" role="region" aria-label="Aviso de cookies">
      <div className="cookie-banner-inner">
        <p className="cookie-banner-text">
          Usamos cookies de analítica para conocer cómo se utiliza el sitio y
          mejorar su funcionamiento. Podés aceptar o rechazar esta medición.
        </p>
        <div className="cookie-banner-actions">
          <button
            type="button"
            className="cookie-banner-button cookie-banner-button-accept"
            onClick={handleAccept}
          >
            Aceptar
          </button>
          <button
            type="button"
            className="cookie-banner-button cookie-banner-button-reject"
            onClick={handleReject}
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

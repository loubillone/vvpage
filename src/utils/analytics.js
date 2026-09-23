const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const SCRIPT_ELEMENT_ID = "ga4-gtag";
const MEASUREMENT_ID_PATTERN = /^G-[A-Z0-9]+$/;

let didConfigure = false;

const getMeasurementId = () => {
  if (typeof MEASUREMENT_ID !== "string") return "";
  return MEASUREMENT_ID.trim();
};

const isAnalyticsEnabled = () => {
  const measurementId = getMeasurementId();
  return import.meta.env.PROD === true && MEASUREMENT_ID_PATTERN.test(measurementId);
};

const ensureGtagQueue = () => {
  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }
};

const insertGtagScript = (measurementId) => {
  if (document.getElementById(SCRIPT_ELEMENT_ID)) return;

  const script = document.createElement("script");
  script.id = SCRIPT_ELEMENT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
};

export const initAnalytics = () => {
  if (!isAnalyticsEnabled() || typeof window === "undefined") return;

  ensureGtagQueue();

  if (!didConfigure) {
    const measurementId = getMeasurementId();
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      send_page_view: false,
    });
    didConfigure = true;
  }

  insertGtagScript(getMeasurementId());
};

export const pageView = (pagePath) => {
  if (!isAnalyticsEnabled()) return;

  initAnalytics();

  if (typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    page_path: pagePath,
    page_location: window.location.href,
  });
};

export const trackEvent = (eventName, params = {}) => {
  if (!isAnalyticsEnabled()) return;

  initAnalytics();

  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, params);
};

import { hasAnalyticsConsent } from "./consent";

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const SCRIPT_ELEMENT_ID = "ga4-gtag";
const MEASUREMENT_ID_PATTERN = /^G-[A-Z0-9]+$/;

let didConfigure = false;

const getMeasurementId = () => {
  if (typeof MEASUREMENT_ID !== "string") return "";
  return MEASUREMENT_ID.trim();
};

const isValidMeasurementId = (measurementId) =>
  MEASUREMENT_ID_PATTERN.test(measurementId);

const getGaDisableKey = (measurementId) => `ga-disable-${measurementId}`;

const isAnalyticsEnabled = () => {
  const measurementId = getMeasurementId();
  return (
    import.meta.env.PROD === true &&
    isValidMeasurementId(measurementId) &&
    hasAnalyticsConsent()
  );
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

const removeGtagScript = () => {
  const script = document.getElementById(SCRIPT_ELEMENT_ID);
  if (script) script.remove();
};

const isGaCookieName = (name) => name === "_ga" || name.startsWith("_ga_");

const listCookieNames = () => {
  if (!document.cookie) return [];

  return document.cookie
    .split(";")
    .map((part) => {
      const name = part.trim().split("=")[0];
      try {
        return decodeURIComponent(name);
      } catch {
        return name;
      }
    })
    .filter(Boolean);
};

const getCookieDomainCandidates = () => {
  const hostname = window.location.hostname;
  const candidates = [undefined, hostname, `.${hostname}`];

  if (hostname.startsWith("www.")) {
    const withoutWww = hostname.slice(4);
    if (withoutWww.includes(".")) {
      candidates.push(withoutWww);
      candidates.push(`.${withoutWww}`);
    }
  }

  return candidates;
};

const expireCookie = (name, domain) => {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  const domainPart = domain ? `; domain=${domain}` : "";
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; max-age=0; path=/${domainPart}${secure}`;
};

const removeGaCookies = () => {
  const names = listCookieNames().filter(isGaCookieName);
  const domains = getCookieDomainCandidates();

  names.forEach((name) => {
    domains.forEach((domain) => expireCookie(name, domain));
  });
};

export const disableAnalytics = () => {
  if (typeof window === "undefined") return;

  const measurementId = getMeasurementId();
  if (isValidMeasurementId(measurementId)) {
    window[getGaDisableKey(measurementId)] = true;
  }

  removeGaCookies();
  removeGtagScript();
  didConfigure = false;
};

export const initAnalytics = () => {
  if (!isAnalyticsEnabled() || typeof window === "undefined") return;

  const measurementId = getMeasurementId();
  window[getGaDisableKey(measurementId)] = false;

  ensureGtagQueue();

  if (!didConfigure) {
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      send_page_view: false,
    });
    didConfigure = true;
  }

  insertGtagScript(measurementId);
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

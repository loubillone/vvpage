export const ANALYTICS_CONSENT_KEY = "tpa_analytics_consent";
export const ANALYTICS_CONSENT_CHANGE_EVENT = "tpa-analytics-consent-change";
export const ANALYTICS_CONSENT_OPEN_EVENT = "tpa-analytics-consent-open";

export const CONSENT_ACCEPTED = "accepted";
export const CONSENT_REJECTED = "rejected";

const isValidConsent = (value) =>
  value === CONSENT_ACCEPTED || value === CONSENT_REJECTED;

export const getAnalyticsConsent = () => {
  if (typeof window === "undefined") return null;

  try {
    const value = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    return isValidConsent(value) ? value : null;
  } catch {
    return null;
  }
};

export const hasAnalyticsConsent = () =>
  getAnalyticsConsent() === CONSENT_ACCEPTED;

export const setAnalyticsConsent = (value) => {
  if (!isValidConsent(value) || typeof window === "undefined") return;

  const previous = getAnalyticsConsent();

  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
  } catch {
    // Si localStorage no está disponible, igual avisamos a la sesión actual.
  }

  if (previous === value) return;

  window.dispatchEvent(
    new CustomEvent(ANALYTICS_CONSENT_CHANGE_EVENT, {
      detail: { value },
    })
  );
};

export const openCookiePreferences = () => {
  if (typeof window === "undefined") return;

  window.dispatchEvent(new CustomEvent(ANALYTICS_CONSENT_OPEN_EVENT));
};

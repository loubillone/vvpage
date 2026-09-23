import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { disableAnalytics, initAnalytics, pageView } from "../utils/analytics";
import {
  ANALYTICS_CONSENT_CHANGE_EVENT,
  CONSENT_ACCEPTED,
  CONSENT_REJECTED,
  hasAnalyticsConsent,
} from "../utils/consent";

const isRedirectOnlyPath = (pathname) =>
  pathname === "/senado" || pathname.startsWith("/provincia/");

const AnalyticsTracker = () => {
  const { pathname, search } = useLocation();
  const lastPagePathRef = useRef(null);
  const locationRef = useRef({ pathname, search });

  locationRef.current = { pathname, search };

  useEffect(() => {
    if (!hasAnalyticsConsent()) return;
    if (isRedirectOnlyPath(pathname)) return;

    const pagePath = `${pathname}${search}`;
    if (lastPagePathRef.current === pagePath) return;

    initAnalytics();
    pageView(pagePath);
    lastPagePathRef.current = pagePath;
  }, [pathname, search]);

  useEffect(() => {
    const handleConsentChange = (event) => {
      const value = event.detail?.value;

      if (value === CONSENT_ACCEPTED) {
        lastPagePathRef.current = null;
        const current = locationRef.current;
        if (isRedirectOnlyPath(current.pathname)) return;

        const pagePath = `${current.pathname}${current.search}`;
        initAnalytics();
        pageView(pagePath);
        lastPagePathRef.current = pagePath;
        return;
      }

      if (value === CONSENT_REJECTED) {
        disableAnalytics();
        lastPagePathRef.current = null;
      }
    };

    window.addEventListener(ANALYTICS_CONSENT_CHANGE_EVENT, handleConsentChange);
    return () => {
      window.removeEventListener(
        ANALYTICS_CONSENT_CHANGE_EVENT,
        handleConsentChange
      );
    };
  }, []);

  return null;
};

export default AnalyticsTracker;

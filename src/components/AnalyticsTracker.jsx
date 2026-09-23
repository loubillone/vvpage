import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, pageView } from "../utils/analytics";

const isRedirectOnlyPath = (pathname) =>
  pathname === "/senado" || pathname.startsWith("/provincia/");

const AnalyticsTracker = () => {
  const { pathname, search } = useLocation();
  const lastPagePathRef = useRef(null);

  useEffect(() => {
    if (isRedirectOnlyPath(pathname)) return;

    const pagePath = `${pathname}${search}`;
    if (lastPagePathRef.current === pagePath) return;

    initAnalytics();
    pageView(pagePath);
    lastPagePathRef.current = pagePath;
  }, [pathname, search]);

  return null;
};

export default AnalyticsTracker;

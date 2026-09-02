import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// El Home puede seguir cambiando de altura mientras carga imágenes u otro
// contenido, así que se reintenta el scroll varias veces en vez de una sola.
// El último intento usa "smooth" para que la animación visible sea una sola.
const SCROLL_RETRY_DELAYS_MS = [0, 150, 500];

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    const id = hash.replace("#", "");

    const scrollToHash = (behavior) => {
      const element = document.getElementById(id);
      if (!element) return;
      element.scrollIntoView({ behavior, block: "start" });
    };

    const timeoutIds = SCROLL_RETRY_DELAYS_MS.map((delay, index) => {
      const isLastAttempt = index === SCROLL_RETRY_DELAYS_MS.length - 1;
      const behavior = isLastAttempt ? "smooth" : "auto";

      return setTimeout(() => scrollToHash(behavior), delay);
    });

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { trackEvent } from "../utils/analytics";
import "../css/shareButtons.css";

const COPY_FEEDBACK_MS = 2000;

const copyWithExecCommand = (text) => {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.setAttribute("aria-hidden", "true");
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "0";
  textarea.style.width = "1px";
  textarea.style.height = "1px";
  textarea.style.padding = "0";
  textarea.style.border = "none";
  textarea.style.opacity = "0";

  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } finally {
    document.body.removeChild(textarea);
  }

  return copied;
};

const ShareButtons = ({ title, url, contentType, itemId }) => {
  const [copyFeedback, setCopyFeedback] = useState(null);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const copyTimeoutRef = useRef(null);

  useEffect(() => {
    setCanNativeShare(
      typeof navigator !== "undefined" && typeof navigator.share === "function"
    );

    return () => {
      if (copyTimeoutRef.current !== null) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  if (!title || !url) return null;

  const trackShare = (method) => {
    trackEvent("share", {
      method,
      content_type: contentType,
      item_id: itemId,
    });
  };

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(
    `${title}\n${url}`
  )}`;
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(url)}`;
  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;

  const showCopyFeedback = (value) => {
    if (copyTimeoutRef.current !== null) {
      window.clearTimeout(copyTimeoutRef.current);
    }

    setCopyFeedback(value);
    copyTimeoutRef.current = window.setTimeout(() => {
      setCopyFeedback(null);
      copyTimeoutRef.current = null;
    }, COPY_FEEDBACK_MS);
  };

  const handleCopy = async () => {
    const hasClipboard =
      typeof navigator !== "undefined" &&
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === "function";

    if (hasClipboard) {
      try {
        await navigator.clipboard.writeText(url);
        showCopyFeedback("copied");
        trackShare("copy");
        return;
      } catch {
        // Si Clipboard API falla, se intenta el fallback.
      }
    }

    try {
      if (copyWithExecCommand(url)) {
        showCopyFeedback("copied");
        trackShare("copy");
        return;
      }
    } catch {
      // El fallback también falló.
    }

    showCopyFeedback("error");
  };

  const handleNativeShare = async () => {
    if (
      typeof navigator === "undefined" ||
      typeof navigator.share !== "function"
    ) {
      return;
    }

    try {
      await navigator.share({
        title,
        text: title,
        url,
      });
      trackShare("native");
    } catch (error) {
      if (error && error.name === "AbortError") return;
    }
  };

  const copyLabel =
    copyFeedback === "copied"
      ? "Enlace copiado"
      : copyFeedback === "error"
        ? "No se pudo copiar"
        : "Copiar enlace";

  return (
    <div className="share-buttons" role="group" aria-label="Compartir">
      <a
        className="share-buttons-action"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartir por WhatsApp"
        onClick={() => trackShare("whatsapp")}
      >
        <i className="fa fa-whatsapp" aria-hidden="true" />
        <span>WhatsApp</span>
      </a>

      <a
        className="share-buttons-action"
        href={xHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartir en X"
        onClick={() => trackShare("x")}
      >
        <span>X</span>
      </a>

      <a
        className="share-buttons-action"
        href={facebookHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartir en Facebook"
        onClick={() => trackShare("facebook")}
      >
        <i className="fa fa-facebook" aria-hidden="true" />
        <span>Facebook</span>
      </a>

      <button
        type="button"
        className="share-buttons-action"
        aria-label={copyLabel}
        onClick={handleCopy}
      >
        <i className="fa fa-link" aria-hidden="true" />
        <span aria-live="polite">{copyLabel}</span>
      </button>

      {canNativeShare && (
        <button
          type="button"
          className="share-buttons-action"
          aria-label="Compartir"
          onClick={handleNativeShare}
        >
          <i className="fa fa-share-alt" aria-hidden="true" />
          <span>Compartir</span>
        </button>
      )}
    </div>
  );
};

ShareButtons.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default ShareButtons;

import { useCallback, useContext } from "react";
import { useLocation } from "react-router-dom";
import ShareConfigContext from "../context/ShareConfigContext";

export default function ShareButtons() {
  const { customerId, endpointUrl } = useContext(ShareConfigContext);
  const location = useLocation();

  const handleShare = useCallback(
    (platform) => {
      if (!customerId || !endpointUrl) {
        console.warn("CustomerID or Endpoint URL not set. Skipping share.");
        return;
      }

      const fullUrl = `https://brand.com${window.location.pathname}`;

      let shareUrl = "";
      if (platform === "Facebook") {
        shareUrl =
          "https://www.facebook.com/sharer/sharer.php?u=" +
          encodeURIComponent(fullUrl);
      } else if (platform === "X") {
        const text = "It's a great product, it is worth to try";
        shareUrl =
          "https://twitter.com/intent/tweet?url=" +
          encodeURIComponent(fullUrl) +
          "&text=" +
          encodeURIComponent(text);
      }
      window.open(
        shareUrl,
        "_blank",
        "noopener,noreferrer,width=600,height=500"
      );

      fetch(endpointUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          customer_id: customerId,
          platform,
          url: fullUrl,
        }),
      }).catch((err) => {
        console.error("Share API error:", err);
      });
    },
    [customerId, endpointUrl]
  );

  // Stílus gombokhoz: fekete alap, fehér szöveg
  const buttonBaseStyle = {
    padding: "8px 16px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  };

  const containerStyle = {
    display: "flex",
    gap: "12px",
    justifyContent:
      location.pathname === "/summer-sale" ? "center" : "flex-start",
  };

  const onMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = "gray";
  };
  const onMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = "black";
  };

  return (
    <div style={containerStyle}>
      <button
        style={buttonBaseStyle}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={() => handleShare("Facebook")}
      >
        Share on Facebook
      </button>
      <button
        style={buttonBaseStyle}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={() => handleShare("X")}
      >
        Share on X
      </button>
    </div>
  );
}

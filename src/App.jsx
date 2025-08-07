import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ShareConfigContext from "./context/ShareConfigContext";
import ToothbrushHolder from "./pages/products/bathroom/ToothbrushHolder";
import CircleCutCeramicVase from "./pages/products/ceramic/CircleCutCeramicVase";
import SummerSale from "./pages/SummerSale";
import FloatingToolbar from "./shared/FloatingToolbar";
import TopNavbar from "./shared/TopNavbar";

export default function App() {
  // Context értékek, amiket a ShareButtons használ
  const [customerId, setCustomerId] = useState("");
  const [endpointUrl, setEndpointUrl] = useState("");

  // Form mezők
  const [formCustomerId, setFormCustomerId] = useState("");
  const [formEndpointUrl, setFormEndpointUrl] = useState("");

  const location = useLocation();

  // Save gomb eseménye
  const handleSave = (e) => {
    e.preventDefault();
    setCustomerId(formCustomerId.trim());
    setEndpointUrl(formEndpointUrl.trim());
  };

  return (
    <ShareConfigContext.Provider
      value={{ customerId, endpointUrl, setCustomerId, setEndpointUrl }}
    >
      <TopNavbar />

      <div
        style={{
          paddingTop: "60px",
          paddingBottom: "80px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {location.pathname === "/" && (
          <form
            onSubmit={handleSave}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <label>
              CustomerID:
              <input
                type="text"
                value={formCustomerId}
                onChange={(e) => setFormCustomerId(e.target.value)}
                placeholder="e.g. testuser"
                style={{ width: "100%", padding: "8px", marginTop: "4px" }}
              />
            </label>

            <label>
              Endpoint URL (with API key):
              <input
                type="text"
                value={formEndpointUrl}
                onChange={(e) => setFormEndpointUrl(e.target.value)}
                placeholder="<url + api_key>"
                style={{ width: "100%", padding: "8px", marginTop: "4px" }}
              />
            </label>

            <button
              type="submit"
              style={{ width: "120px", padding: "8px", marginTop: "8px" }}
            >
              Save
            </button>
          </form>
        )}

        <Routes>
          <Route
            path="/products/bathroom/toothbrush-holder"
            element={<ToothbrushHolder />}
          />
          <Route
            path="/products/ceramic/circle-cut-ceramic-vase"
            element={<CircleCutCeramicVase />}
          />
          <Route path="/summer-sale" element={<SummerSale />} />
          <Route path="*" element={<h2>Welcome! Please select a page.</h2>} />
        </Routes>
      </div>

      <FloatingToolbar />
    </ShareConfigContext.Provider>
  );
}

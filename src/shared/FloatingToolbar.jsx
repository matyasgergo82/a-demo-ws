import { Link, useLocation } from "react-router-dom";

const toolbarStyle = {
  position: "fixed",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "black",
  padding: "12px 16px",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  zIndex: 1000,
};

const linksRowStyle = {
  display: "flex",
  gap: "20px",
};

const buttonStyle = {
  padding: "8px 16px",
  backgroundColor: "black",
  color: "white",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
  border: "1px dashed white",
  cursor: "pointer",
};

const urlStyle = {
  marginTop: "4px",
  backgroundColor: "black",
  color: "white",
  padding: "4px 8px",
  borderRadius: "4px",
  fontSize: "0.9rem",
  userSelect: "text",
  fontWeight: "bold",
};

export default function FloatingToolbar() {
  const location = useLocation();
  const shareUrl = `https://brand.com${location.pathname}`;

  return (
    <div style={toolbarStyle}>
      <div style={linksRowStyle}>
        <Link to="/products/bathroom/toothbrush-holder" style={buttonStyle}>
          Product1
        </Link>
        <Link
          to="/products/ceramic/circle-cut-ceramic-vase"
          style={buttonStyle}
        >
          Product2
        </Link>
        <Link to="/summer-sale" style={buttonStyle}>
          SummerSale
        </Link>
      </div>
      <div style={urlStyle}>{shareUrl}</div>
    </div>
  );
}

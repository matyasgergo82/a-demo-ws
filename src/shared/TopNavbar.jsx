import { Link } from "react-router-dom";

const navbarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 20px",
  backgroundColor: "#000",
  color: "white",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const brandStyle = {
  fontWeight: "bold",
  fontSize: "1.5rem",
  letterSpacing: "2px",
  userSelect: "none",
  color: "white",
  textDecoration: "none",
};

const menuStyle = {
  display: "flex",
  gap: "20px",
};

const menuItemStyle = {
  cursor: "pointer",
  userSelect: "none",
  transition: "color 0.3s",
  color: "white",
};

export default function TopNavbar() {
  const menuItems = ["products", "sale", "blog", "cart"];

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={brandStyle}>
        BRAND
      </Link>
      <div style={menuStyle}>
        {menuItems.map((item) => (
          <div
            key={item}
            style={menuItemStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffeb3b")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
}

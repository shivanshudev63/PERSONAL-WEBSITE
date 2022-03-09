import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer" style={{ padding: "10px 20px", zIndex: "100" }}>
      <span
        className="copyright"
        style={{
          lineHeight: "30px",
          color: "#c6c9d8",
          fontSize: "14px",
          opacity: "0.75",
        }}
      >
        Copyright © 2022 SD. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;

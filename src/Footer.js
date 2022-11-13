import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer" style={{ padding: "10px 20px", zIndex: "100" }}>
      <p
        className="copyright"
        style={{
          lineHeight: "30px",
          color: "#c6c9d8",
          fontSize: "14px",
          opacity: "0.75",
        }}
      >
        All Rights Reserved. Developed by: Shivanshu Dev
       
      </p>
     
    </div>
  );
}

export default Footer;

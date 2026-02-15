import React from "react";
import { motion } from "framer-motion";

const DesktopIcon = ({ label, iconSrc, onClick }) => {
  return (
    <div className="desktop-icon" onClick={onClick}>
      {/* If iconSrc is a string (URL), render img, else render the component */}
      {typeof iconSrc === 'string' ? (
         <img src={iconSrc} alt={label} className="icon-img" />
      ) : (
         <div className="icon-img flex items-center justify-center text-3xl">
             {iconSrc}
         </div>
      )}
      
      <span className="icon-label">{label}</span>
    </div>
  );
};

export default DesktopIcon;
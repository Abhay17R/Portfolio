"use client";
import React, { useState, useEffect } from "react";
import { useOS } from "@/context/OSContext";
import Taskbar from "./Taskbar";
import DesktopIcon from "./DesktopIcon";
import StartMenu from "./StartMenu"; // <-- Import
import "@/styles/Desktop.css"; 

const Desktop = () => {
  const { osMode } = useOS();
  const [bgStyle, setBgStyle] = useState({});
  const [startMenuOpen, setStartMenuOpen] = useState(false); // <-- State for Menu

  // Toggle function
  const toggleStartMenu = (e) => {
    if(e) e.stopPropagation();
    setStartMenuOpen(!startMenuOpen);
  };

  // Close menu when clicking on Wallpaper
  const handleDesktopClick = () => {
    if (startMenuOpen) setStartMenuOpen(false);
  };

  // Chaos Mode Effect
  useEffect(() => {
    if (osMode !== "chaos") {
      setBgStyle({});
      return;
    }
    const interval = setInterval(() => {
        setBgStyle({
            filter: `hue-rotate(${Math.random() * 360}deg)`,
            transform: `scale(1.02)`,
            transition: "all 2s ease"
        });
    }, 3000);
    return () => clearInterval(interval);
  }, [osMode]);

  return (
    // Add onClick handler to the main container
    <div className="desktop-container" onClick={handleDesktopClick}>
      
      {/* 1. WALLPAPER */}
      <div 
        className="wallpaper-layer"
        style={{
          backgroundImage: "url('/wallpaper.jpg'), linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          ...bgStyle
        }}
      ></div>

      {/* 2. BACKGROUND TEXT */}
      <div className="hero-text-container">
        <h1 className="hero-name">Abhay kumar Jha</h1> 
      </div>

      {/* 3. DESKTOP ICONS */}
      <div className="icons-grid">
        <DesktopIcon 
            label="About Me" 
            iconSrc="https://i.postimg.cc/cLbyKrVB/image.png" 
            onClick={() => console.log("Open About")} 
        />
        <DesktopIcon 
            label="My Projects" 
            iconSrc="https://img.icons8.com/color/48/project-setup.png" 
            onClick={() => console.log("Open Projects")} 
        />
        <DesktopIcon 
            label="Achievements" 
            iconSrc="https://img.icons8.com/color/48/trophy.png" 
            onClick={() => console.log("Open Achievements")} 
        />
        <DesktopIcon 
            label="My Resume" 
            iconSrc="https://img.icons8.com/color/48/pdf-2--v1.png" 
            onClick={() => console.log("Open Resume")} 
        />
        <DesktopIcon 
            label="Contact Me" 
            iconSrc="https://img.icons8.com/color/48/gmail-new.png" 
            onClick={() => console.log("Open Contact")} 
        />
         <DesktopIcon 
            label="Terminal" 
            iconSrc="https://img.icons8.com/color/48/console.png" 
            onClick={() => console.log("Open Terminal")} 
        />
      </div>

      {/* 4. START MENU (Overlay) */}
      <StartMenu isOpen={startMenuOpen} />

      {/* 5. TASKBAR (Pass the Toggle Function) */}
      <Taskbar onStartClick={toggleStartMenu} />

    </div>
  );
};

export default Desktop;
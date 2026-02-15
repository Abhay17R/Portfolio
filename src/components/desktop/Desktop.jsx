"use client";
import React, { useState, useEffect } from "react";
import { useOS } from "@/context/OSContext";
import Taskbar from "./Taskbar";
import DesktopIcon from "./DesktopIcon";
import StartMenu from "./StartMenu";
import WindowFrame from "../ui/windows/WindowFrame"; // <--- Updated Import

// Apps Imports
import FileExplorer from "../apps/FileExplorer"; 
import Chrome from "../apps/Chrome";

import "@/styles/Desktop.css"; 

const Desktop = () => {
  const { osMode, windows, openApp } = useOS(); // <--- Context se windows le rahe hain
  const [bgStyle, setBgStyle] = useState({});
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  // --- APP OPEN HANDLERS ---
  const handleOpenExplorer = () => {
    openApp("explorer", "File Explorer", "https://img.icons8.com/fluency/48/folder-invoices--v1.png", <FileExplorer />);
  };

  const handleOpenChrome = () => {
    openApp("chrome", "Google Chrome", "https://img.icons8.com/color/48/chrome--v1.png", <Chrome />);
  };
  
  const handleOpenTerminal = () => {
     // Abhi Terminal ka component nahi hai, baad me replace kar dena
     console.log("Terminal logic coming soon");
  };

  // Toggle Start Menu
  const toggleStartMenu = (e) => {
    if(e) e.stopPropagation();
    setStartMenuOpen(!startMenuOpen);
  };

  // Close menus on Desktop Click
  const handleDesktopClick = () => {
    if (startMenuOpen) setStartMenuOpen(false);
  };

  // Chaos Mode Effect (Tera purana logic)
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
    <div className="desktop-container" onClick={handleDesktopClick}>
      
      {/* 1. WALLPAPER */}
      <div 
        className="wallpaper-layer"
        style={{
          backgroundImage: "url('/wallpaper.jpg')",
          ...bgStyle
        }}
      ></div>

      {/* 2. BACKGROUND TEXT */}
      <div className="hero-text-container">
        <h1 className="hero-name">Abhay kumar Jha</h1> 
      </div>

      {/* 3. DESKTOP ICONS - Ab Context use kar rahe hain */}
      <div className="icons-grid">
        <DesktopIcon 
            label="About Me" 
            iconSrc="https://i.postimg.cc/cLbyKrVB/image.png" 
            onClick={() => console.log("Open About")} 
        />
        
        <DesktopIcon 
            label="My Projects" 
            iconSrc="https://img.icons8.com/color/48/project-setup.png" 
            onClick={handleOpenExplorer} 
        />
        
        <DesktopIcon 
            label="My Resume" 
            iconSrc="https://img.icons8.com/color/48/pdf-2--v1.png" 
            onClick={() => console.log("Open Resume")} 
        />
        
        <DesktopIcon 
            label="Browser" 
            iconSrc="https://img.icons8.com/color/48/chrome--v1.png" 
            onClick={handleOpenChrome} 
        />
        
         <DesktopIcon 
            label="Terminal" 
            iconSrc="https://img.icons8.com/color/48/console.png" 
            onClick={handleOpenTerminal} 
        />
      </div>

      {/* 4. WINDOWS RENDERING LAYER (Ye naya magic hai) */}
      {/* Jo bhi window 'windows' array me hogi, wo yahan render hogi */}
      {windows.map((win) => (
        <WindowFrame key={win.id} windowData={win} />
      ))}

      {/* 5. START MENU */}
      <StartMenu isOpen={startMenuOpen} />

      {/* 6. TASKBAR */}
      <Taskbar 
        onStartClick={toggleStartMenu} 
        onExplorerClick={handleOpenExplorer}
        onChromeClick={handleOpenChrome}
      />

    </div>
  );
};

export default Desktop;
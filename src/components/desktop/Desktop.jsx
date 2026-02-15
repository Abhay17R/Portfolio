"use client";
import React, { useState, useEffect } from "react";
import { useOS } from "@/context/OSContext";
import Taskbar from "./Taskbar";
import DesktopIcon from "./DesktopIcon";
import StartMenu from "./StartMenu";
import WindowFrame from "../ui/windows/WindowFrame";
import Calculator from "../apps/Calculator";

// --- Apps Imports ---
import FileExplorer from "../apps/FileExplorer"; 
import Chrome from "../apps/Chrome";
import MyProjects from "../apps/MyProjects"; // <--- 1. NEW IMPORT ADDED

import "@/styles/Desktop.css"; 

const Desktop = () => {
  const { osMode, windows, openApp } = useOS();
  const [bgStyle, setBgStyle] = useState({});
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  // --- APP OPEN HANDLERS ---
  
  const handleOpenExplorer = () => {
    openApp("explorer", "File Explorer", "https://img.icons8.com/fluency/48/folder-invoices--v1.png", <FileExplorer />);
  };

  

  const handleOpenChrome = () => {
    openApp("chrome", "Google Chrome", "https://img.icons8.com/color/48/chrome--v1.png", <Chrome />);
  };

  // <--- 2. NEW HANDLER FOR PROJECTS ---
  const handleOpenProjects = () => {
    openApp(
      "projects", // ID
      "My Projects", // Window Title
      "https://img.icons8.com/color/48/project-setup.png", // Icon
      <MyProjects /> // Component jo render hoga
    );
  };
  
  const handleOpenCalculator = () => {
  openApp(
    "calculator",
    "Calculator",
    "https://img.icons8.com/fluency/48/calculator.png",
    <Calculator />, 
    { width: 350, height: 520 } // Default size
  );
};
  const handleOpenTerminal = () => {
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
    <div className="desktop-container" onClick={handleDesktopClick}>
      
      {/* 1. WALLPAPER */}
      <div 
        className="wallpaper-layer"
        style={{
          backgroundImage: "url('/wallpaper.jpg')", // Make sure ye image public folder me ho
          ...bgStyle
        }}
      ></div>

      {/* 2. BACKGROUND TEXT */}
      <div className="hero-text-container">
        <h1 className="hero-name">Abhay Kumar Jha</h1> 
      </div>

      {/* 3. DESKTOP ICONS */}
      <div className="icons-grid">
        <DesktopIcon 
            label="About Me" 
            iconSrc="https://i.postimg.cc/cLbyKrVB/image.png" 
            onClick={() => console.log("Open About")} 
        />
        
        {/* <--- 3. UPDATED CLICK HANDLER HERE --- */}
     
        <DesktopIcon 
            label="My Projects" 
            iconSrc="https://img.icons8.com/color/48/project-setup.png" 
            onClick={handleOpenProjects} 
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

          <DesktopIcon 
  label="Calculator" 
  iconSrc="https://img.icons8.com/fluency/48/calculator.png" 
  onClick={handleOpenCalculator} 
/>
      </div>
      

      {/* 4. WINDOWS RENDERING LAYER */}
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
        // Agar Taskbar me bhi Projects ka icon chahiye to yahan prop pass kar dena
      />

    </div>
  );
};

export default Desktop;
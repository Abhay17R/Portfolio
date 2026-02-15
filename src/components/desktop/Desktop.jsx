"use client";
import React, { useState, useEffect } from "react";
import { useOS } from "@/context/OSContext";
import Taskbar from "./Taskbar";
import DesktopIcon from "./DesktopIcon";
import StartMenu from "./StartMenu";
import WindowFrame from "../ui/windows/WindowFrame";

// --- Apps Imports ---
import FileExplorer from "../apps/FileExplorer";
import Chrome from "../apps/Chrome";
import MyProjects from "../apps/MyProjects";
import Calculator from "../apps/Calculator";
import PdfViewer from "../apps/PdfViewer";
import Notepad from "../apps/Notepad";
import Terminal from "../apps/Terminal";
import WindowsMediaPlayer from "../apps/WindowsMediaPlayer";
import Paint from "../apps/Paint";

// --- Deep Dive Components ---
import ProjectDive from "../apps/ProjectDive";
import { projectData } from "@/data/projectList"; // Data for dive

import "@/styles/Desktop.css";

const Desktop = () => {
  const { osMode, windows, openApp } = useOS();
  const [bgStyle, setBgStyle] = useState({});
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  // --- STATE FOR DEEP DIVE OVERLAY ---
  const [activeProjectDive, setActiveProjectDive] = useState(null);

  // --- HANDLERS FOR DEEP DIVE ---
  // Ye function MyProjects ko pass hoga
  const handleDiveIn = (projectId) => {
    const project = projectData.find((p) => p.id === projectId);
    setActiveProjectDive(project);
  };
  const handleOpenPaint = () => {
    openApp(
      "paint", // ID
      "CyberPaint Studio", // Title
      "https://img.icons8.com/fluency/48/paint-palette.png", // Icon
      <Paint />, // Component
      { width: 900, height: 700 } // <--- Size thoda bada rakha hai
    );
  };

  const handleCloseDive = () => {
    setActiveProjectDive(null);
  };

  // --- APP OPEN HANDLERS ---
  const handleOpenNotepad = () => {
    openApp(
      "notepad",
      "CyberPad",
      "https://img.icons8.com/fluency/48/code-file.png",
      <Notepad />,
      { width: 600, height: 450 }
    );
  };
  const handleOpenMediaPlayer = () => {
  openApp(
    "media-player",
    "Windows Media Player",
    "https://img.icons8.com/fluency/48/windows-media-player.png", // Classic Icon
    <WindowsMediaPlayer />,
    { width: 700, height: 500 } // Thoda wide size
  );
};

  const handleOpenExplorer = () => {
    openApp(
      "explorer",
      "File Explorer",
      "https://img.icons8.com/fluency/48/folder-invoices--v1.png",
      <FileExplorer />
    );
  };

  const handleOpenChrome = () => {
    openApp(
      "chrome",
      "Google Chrome",
      "https://img.icons8.com/color/48/chrome--v1.png",
      <Chrome />
    );
  };

  // UPDATED: Pass handleDiveIn to MyProjects
  const handleOpenProjects = () => {
    openApp(
      "projects",
      "My Projects",
      "https://img.icons8.com/color/48/project-setup.png",
      <MyProjects onProjectClick={handleDiveIn} />
    );
  };

  const handleOpenTerminal = () => {
    openApp(
      "terminal",
      "Terminal",
      "https://img.icons8.com/color/48/console.png",
      <Terminal />,
      { width: 600, height: 400 }
    );
  };

  const handleOpenCalculator = () => {
    openApp(
      "calculator",
      "Calculator",
      "https://img.icons8.com/fluency/48/calculator.png",
      <Calculator />,
      { width: 350, height: 520 }
    );
  };

  const handleOpenResume = () => {
    openApp(
      "resume",
      "My Resume.pdf",
      "https://img.icons8.com/color/48/pdf-2--v1.png",
      <PdfViewer fileUrl="/resume.pdf" fileName="My Resume.pdf" />,
      { width: 800, height: 650 }
    );
  };

  // Toggle Start Menu
  const toggleStartMenu = (e) => {
    if (e) e.stopPropagation();
    setStartMenuOpen(!startMenuOpen);
  };

  // Close menus on Desktop Click
  const handleDesktopClick = () => {
    if (startMenuOpen) setStartMenuOpen(false);
  };
  const allApps = [
    { id: "explorer", name: "File Explorer", icon: "https://img.icons8.com/fluency/48/folder-invoices--v1.png", action: handleOpenExplorer },
    { id: "chrome", name: "Google Chrome", icon: "https://img.icons8.com/color/48/chrome--v1.png", action: handleOpenChrome },
    { id: "notepad", name: "CyberPad", icon: "https://img.icons8.com/fluency/48/code-file.png", action: handleOpenNotepad },
    { id: "paint", name: "CyberPaint Studio", icon: "https://img.icons8.com/fluency/48/paint-palette.png", action: handleOpenPaint },
    { id: "media", name: "Media Player", icon: "https://img.icons8.com/fluency/48/video-playlist.png", action: handleOpenMediaPlayer },
    { id: "terminal", name: "Terminal", icon: "https://img.icons8.com/color/48/console.png", action: handleOpenTerminal },
    { id: "calculator", name: "Calculator", icon: "https://img.icons8.com/fluency/48/calculator.png", action: handleOpenCalculator },
    { id: "projects", name: "My Projects", icon: "https://img.icons8.com/color/48/project-setup.png", action: handleOpenProjects },
    { id: "resume", name: "My Resume", icon: "https://img.icons8.com/color/48/pdf-2--v1.png", action: handleOpenResume },
    { id: "settings", name: "Settings", icon: "https://img.icons8.com/fluency/48/settings.png", action: () => console.log("Settings Coming Soon") },
  ];

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
        transition: "all 2s ease",
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [osMode]);

  return (
    <div className="desktop-container" onClick={handleDesktopClick}>
      
      {/* 1. PROJECT DEEP DIVE OVERLAY (Topmost Layer) */}
      <ProjectDive project={activeProjectDive} onClose={handleCloseDive} />

      {/* 2. WALLPAPER */}
      <div
        className="wallpaper-layer"
        style={{
          backgroundImage: "url('/wallpaper.jpg')",
          ...bgStyle,
        }}
      ></div>

      {/* 3. BACKGROUND TEXT */}
      <div className="hero-text-container">
        <h1 className="hero-name">Abhay Kumar Jha</h1>
      </div>

      {/* 4. DESKTOP ICONS */}
      <div className="icons-grid">
        <DesktopIcon
          label="About Me"
          iconSrc="https://i.postimg.cc/cLbyKrVB/image.png"
          onClick={() => console.log("Open About")}
        />

        <DesktopIcon
          label="My Projects"
          iconSrc="https://img.icons8.com/color/48/project-setup.png"
          onClick={handleOpenProjects}
        />

        <DesktopIcon
          label="My Resume"
          iconSrc="https://img.icons8.com/color/48/pdf-2--v1.png"
          onClick={handleOpenResume}
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
        <DesktopIcon 
              label="Media Player" 
              iconSrc="https://img.icons8.com/fluency/48/windows-media-player.png" 
              onClick={handleOpenMediaPlayer} 
            />
      </div>

      {/* 5. WINDOWS RENDERING LAYER */}
      {windows.map((win) => (
        <WindowFrame key={win.id} windowData={win} />
      ))}

      {/* 6. START MENU */}
      <StartMenu 
        isOpen={startMenuOpen} 
        apps={allApps}  // <-- Ye nayi list pass ki
        onClose={() => toggleStartMenu(false)} // App click hone pe menu band ho
      />

      {/* 7. TASKBAR */}
      <Taskbar
        onStartClick={toggleStartMenu}
        onExplorerClick={handleOpenExplorer}
        onChromeClick={handleOpenChrome}
        onNotepadClick={handleOpenNotepad}
        onPaintClick={handleOpenPaint}

      />
    </div>
  );
};

export default Desktop;
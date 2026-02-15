"use client";
import React, { useState, useEffect } from "react";
import { useOS } from "@/context/OSContext";
import "@/styles/Taskbar.css";

const Taskbar = ({ onStartClick, onExplorerClick, onChromeClick, onNotepadClick ,onPaintClick}) => {
  const { osMode, windows, activeWindowId, focusWindow, toggleMinimize } = useOS();
  const [time, setTime] = useState(new Date());
  const [chaosStyle, setChaosStyle] = useState({});

  // Clock Logic
  useEffect(() => {
    // Hydration mismatch fix: set time only after mount
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Chaos Mode Logic
  useEffect(() => {
    if (osMode !== "chaos") {
      setChaosStyle({});
      return;
    }
    const interval = setInterval(() => {
       setChaosStyle({
         transform: `rotate(${Math.random() * 2 - 1}deg) translateY(${Math.random() * 5}px)`,
         transition: "all 0.5s ease"
       });
    }, 2000);
    return () => clearInterval(interval);
  }, [osMode]);

  // --- HELPER FUNCTIONS ---
  
  // Check if a static app (launcher) is currently open in windows list
  const isAppOpen = (id) => windows.some((w) => w.id === id);

  // Check if a specific window is the active (focused) one
  const isWindowActive = (windowId) => {
    return activeWindowId === windowId && !windows.find((w) => w.id === windowId)?.isMinimized;
  };

  // Handle click for static launchers (opens new if not present, toggles if present)
  // Note: simplified logic here since specific app opening is handled by parent or context mostly
  // but for the taskbar interaction we stick to standard behavior.
  const handleLauncherClick = (id, openCallback) => {
    // Find if an instance of this app is already open. 
    // This logic assumes 1 instance per app id for simplicity in this specific taskbar section,
    // though your OSContext might support multiple.
    const openWindow = windows.find((w) => w.id === id);
    
    if (openWindow) {
      handleWindowClick(openWindow.id);
    } else {
      openCallback && openCallback();
    }
  };

  // Handle click for running app icons
  const handleWindowClick = (windowId) => {
    const win = windows.find((w) => w.id === windowId);
    if (!win) return;

    if (activeWindowId === windowId && !win.isMinimized) {
      // If active and open, minimize it
      toggleMinimize(windowId);
    } else {
      // If minimized or background, bring to front
      if (win.isMinimized) toggleMinimize(windowId);
      focusWindow(windowId);
    }
  };

  // Filter out windows that correspond to static launchers so we don't double render them 
  // if you want them merged. 
  // HOWEVER, standard Windows behavior: Pinned apps stay, running apps appear next to them.
  // For this "Stack", let's keep Launchers fixed and render OTHER running apps after them.
  // Or simply render ALL running apps dynamically if you prefer a pure dock style.
  // Let's stick to your structure: Static Launchers -> Dynamic Apps.
  
  const staticAppIds = ["explorer", "chrome", "notepad"];
  const dynamicWindows = windows.filter(w => !staticAppIds.includes(w.id));

  return (
    <div className="taskbar" style={chaosStyle} onClick={(e) => e.stopPropagation()}>
      
      

      <div className="taskbar-center">
        {/* Start Button */}
      <div className="tb-icon" title="Start" onClick={onStartClick} style={{marginRight: '10px'}}>
        <img src="https://img.icons8.com/fluency/48/windows-11.png" alt="Start" />
      </div>
        
        {/* --- STATIC LAUNCHERS (Pinned Apps) --- */}
        
        {/* FILE EXPLORER */}
        <div 
          className={`tb-icon ${isAppOpen("explorer") ? "open" : ""} ${isWindowActive("explorer") ? "active" : ""}`} 
          title="File Explorer" 
          onClick={() => handleLauncherClick("explorer", onExplorerClick)}
        >
          <img src="https://img.icons8.com/fluency/48/folder-invoices--v1.png" alt="Explorer" />
        </div>
        
        {/* CHROME */}
        <div 
          className={`tb-icon ${isAppOpen("chrome") ? "open" : ""} ${isWindowActive("chrome") ? "active" : ""}`} 
          title="Google Chrome" 
          onClick={() => handleLauncherClick("chrome", onChromeClick)}
        >
          <img src="https://img.icons8.com/color/48/chrome--v1.png" alt="Chrome" />
        </div>
        
        {/* NOTEPAD */}
        <div 
          className={`tb-icon ${isAppOpen("notepad") ? "open" : ""} ${isWindowActive("notepad") ? "active" : ""}`}
          title="CyberPad" 
          onClick={() => handleLauncherClick("notepad", onNotepadClick)}
        >
          <img src="https://img.icons8.com/fluency/48/code-file.png" alt="Notepad" />
        </div>
        {/* PAINT */}
        <div 
          className={`tb-icon ${isAppOpen("paint") ? "open" : ""} ${isWindowActive("paint") ? "active" : ""}`}
          title="Paint" 
          onClick={() => handleLauncherClick("paint", onPaintClick)}
        >
          <img src="https://img.icons8.com/fluency/48/paint-palette.png" alt="Paint" />
        </div>

        {/* --- DYNAMIC RUNNING APPS (The Fix) --- */}
        {/* Renders icons for apps not pinned above (like Media Player) */}
        {dynamicWindows.map((win) => (
          <div 
            key={win.id}
            className={`tb-icon open ${isWindowActive(win.id) ? "active" : ""}`}
            title={win.title}
            onClick={() => handleWindowClick(win.id)}
          >
            {/* Default icon if none provided */}
            <img src={win.icon || "https://img.icons8.com/fluency/48/application-window.png"} alt={win.title} />
          </div>
        ))}

      </div>

      <div className="system-tray">
        <span className="tray-icon">^</span>
        <span className="tray-icon">📶</span>
        <span className="tray-icon">🔊</span>
        
        <div className="clock">
          <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <span>{time.toLocaleDateString()}</span>
        </div>
        
        <span className="tray-icon" style={{ marginLeft: 10 }}>🔔</span>
      </div>
    </div>
  );
};

export default Taskbar;
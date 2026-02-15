"use client";
import React, { useState, useEffect } from "react";
import { useOS } from "@/context/OSContext";
import "@/styles/Taskbar.css";

const Taskbar = ({ onStartClick, onExplorerClick, onChromeClick }) => {
  const { osMode, windows, activeWindowId, focusWindow, toggleMinimize } = useOS();
  const [time, setTime] = useState(new Date());
  const [chaosStyle, setChaosStyle] = useState({});

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Chaos Mode (Tera purana code)
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

  // --- LOGIC ADDED HERE ---
  const isAppOpen = (id) => windows.some((w) => w.id === id);
  
  const isAppActive = (id) => {
    const win = windows.find((w) => w.id === id);
    return activeWindowId === id && win && !win.isMinimized;
  };

  const handleAppClick = (id, openCallback) => {
    if (isAppActive(id)) {
      toggleMinimize(id); // Agar saamne hai to minimize
    } else if (isAppOpen(id)) {
      focusWindow(id); // Agar peeche hai to upar lao
    } else {
      openCallback && openCallback(); // Agar band hai to kholo
    }
  };

  return (
    <div className="taskbar" style={chaosStyle} onClick={(e) => e.stopPropagation()}>
      
      {/* Spacer jaisa tune rakha tha */}
      <div style={{ width: '100px' }}></div>

      <div className="taskbar-center">
        {/* START BUTTON (Wapis Center me) */}
        <div className="tb-icon" title="Start" onClick={onStartClick}>
          <img src="https://img.icons8.com/fluency/48/windows-11.png" alt="Start" />
        </div>
        
        {/* FILE EXPLORER (Logic Added) */}
        <div 
          className={`tb-icon ${isAppOpen("explorer") ? "open" : ""} ${isAppActive("explorer") ? "active" : ""}`} 
          title="File Explorer" 
          onClick={() => handleAppClick("explorer", onExplorerClick)}
        >
          <img src="https://img.icons8.com/fluency/48/folder-invoices--v1.png" alt="Explorer" />
        </div>
        
        {/* CHROME (Logic Added) */}
        <div 
          className={`tb-icon ${isAppOpen("chrome") ? "open" : ""} ${isAppActive("chrome") ? "active" : ""}`} 
          title="Google Chrome" 
          onClick={() => handleAppClick("chrome", onChromeClick)}
        >
          <img src="https://img.icons8.com/color/48/chrome--v1.png" alt="Chrome" />
        </div>
        
        {/* Static Icons (Same as before) */}
        <div className="tb-icon" title="Notepad">
          <img src="https://img.icons8.com/fluency/48/notepad.png" alt="Notepad" />
        </div>

        <div className="tb-icon" title="Terminal">
          <img src="https://img.icons8.com/color/48/console.png" alt="Terminal" />
        </div>

        <div className="tb-icon" title="Mail">
          <img src="https://img.icons8.com/fluency/48/mail.png" alt="Mail" />
        </div>
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
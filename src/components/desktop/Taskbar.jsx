"use client";
import React, { useState, useEffect } from "react";
import { useOS } from "@/context/OSContext";
import "@/styles/Taskbar.css";

// Receive onStartClick prop here
const Taskbar = ({ onStartClick }) => {
  const { osMode } = useOS();
  const [time, setTime] = useState(new Date());
  const [chaosStyle, setChaosStyle] = useState({});

  // Clock Logic
  useEffect(() => {
    // Fix hydration mismatch by setting time only on client
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

  return (
    <div className="taskbar" style={chaosStyle} onClick={(e) => e.stopPropagation()}>
      
      {/* 1. Empty Left Spacer */}
      <div style={{ width: '100px' }}></div>

      {/* 2. CENTER ICONS */}
      <div className="taskbar-center">
        {/* Start Button - Calls onStartClick */}
        <div className="tb-icon" title="Start" onClick={onStartClick}>
          <img src="https://img.icons8.com/fluency/48/windows-11.png" alt="Start" />
        </div>
        
        <div className="tb-icon" title="File Explorer">
          <img src="https://img.icons8.com/fluency/48/folder-invoices--v1.png" alt="Explorer" />
        </div>
        
        <div className="tb-icon active" title="Google Chrome">
          <img src="https://img.icons8.com/color/48/chrome--v1.png" alt="Chrome" />
        </div>
        
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

      {/* 3. RIGHT SYSTEM TRAY */}
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
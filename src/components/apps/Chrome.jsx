"use client";
import React, { useState, useRef, useEffect } from "react";
import "@/styles/Chrome.css"; // CSS file niche hai

const Chrome = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // --- STATE FOR BROWSER ---
  const [url, setUrl] = useState("https://www.wikipedia.org"); // Default working site
  const [inputUrl, setInputUrl] = useState("https://www.wikipedia.org");
  const [history, setHistory] = useState([]);

  // --- STATE FOR WINDOW (Drag & Resize) ---
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  // --- DRAG LOGIC ---
  const handleMouseDown = (e) => {
    // Sirf header pe click hone par drag karein, buttons pe nahi
    if (e.target.closest('.window-controls') || e.target.closest('.chrome-tab')) return;
    
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging && !isMaximized) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Global mouse events for dragging
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // --- BROWSER LOGIC ---
  const handleNavigate = (e) => {
    if (e.key === 'Enter') {
      let finalUrl = inputUrl;
      if (!finalUrl.startsWith('http')) {
        finalUrl = 'https://' + finalUrl;
      }
      setHistory([...history, url]);
      setUrl(finalUrl);
    }
  };

  const refreshPage = () => {
    const current = url;
    setUrl('');
    setTimeout(() => setUrl(current), 100);
  };

  return (
    <div 
      ref={windowRef}
      className={`chrome-window ${isMaximized ? 'maximized' : ''}`}
      style={{ 
        left: isMaximized ? 0 : position.x, 
        top: isMaximized ? 0 : position.y,
        // Resize property CSS se handle hogi
      }}
      onClick={(e) => e.stopPropagation()} // Click desktop pe pass na ho
    >
      
      {/* 1. HEADER (Draggable Area) */}
      <div className="chrome-header" onMouseDown={handleMouseDown}>
        
        {/* Fake Tabs */}
        <div className="chrome-tabs-container">
            <div className="chrome-tab active">
                <img src="https://img.icons8.com/color/48/google-logo.png" alt="icon" />
                <span>New Tab</span>
                <span className="close-tab">×</span>
            </div>
            <div className="chrome-new-tab">+</div>
        </div>

        {/* Window Controls */}
        <div className="window-controls">
            <span className="control minimize">─</span>
            <span className="control maximize" onClick={() => setIsMaximized(!isMaximized)}>
                {isMaximized ? '❐' : '□'}
            </span>
            <span className="control close-btn" onClick={onClose}>✕</span>
        </div>
      </div>

      {/* 2. ADDRESS BAR AREA */}
      <div className="chrome-nav-bar">
        <div className="nav-actions">
             <span className="nav-btn">←</span>
             <span className="nav-btn">→</span>
             <span className="nav-btn" onClick={refreshPage}>⟳</span>
        </div>
        
        {/* Omnibox */}
        <div className="omnibox">
            <span className="lock-icon">🔒</span>
            <input 
                type="text" 
                value={inputUrl} 
                onChange={(e) => setInputUrl(e.target.value)}
                onKeyDown={handleNavigate}
                onFocus={(e) => e.target.select()}
            />
            <span className="star-icon">☆</span>
        </div>

        <div className="chrome-profile">
            <img src="https://i.postimg.cc/cLbyKrVB/image.png" alt="Profile" />
        </div>
        <div className="menu-dots">⋮</div>
      </div>

      {/* 3. IFRAME CONTENT */}
      <div className="chrome-body">
        {url ? (
            <iframe 
                src={url} 
                title="Browser"
                className="browser-frame"
                // Note: Google/FB iframe allow nahi karte due to X-Frame-Options.
                // Isliye Wikipedia ya Bing best hain testing ke liye.
            />
        ) : (
            <div className="loading-screen">Loading...</div>
        )}
        
        {/* Resize Handle (Bottom Right) */}
        {!isMaximized && <div className="resize-handle"></div>}
      </div>
    </div>
  );
};

export default Chrome;
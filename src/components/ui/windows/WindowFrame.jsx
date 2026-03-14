"use client";
import React, { useState, useEffect, useRef } from "react";
import { X, Minus, Square, Copy } from "lucide-react"; // Icons
import { useOS } from "@/context/OSContext";
import "@/styles/WindowFrame.css"; 

// Helper function to get coordinates for both Mouse and Touch events
const getClientPos = (e) => {
  if (e.touches && e.touches.length > 0) {
    return { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }
  return { x: e.clientX, y: e.clientY };
};

const WindowFrame = ({ windowData }) => {
  const { closeWindow, toggleMinimize, toggleMaximize, focusWindow } = useOS();
  const { id, title, icon, component, isMinimized, isMaximized, zIndex } = windowData;
  
  // Window State
  const [position, setPosition] = useState(
    windowData.initialPosition || { x: 100, y: 50 }
  );
  const [size, setSize] = useState({ width: 800, height: 500 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Refs
  const windowRef = useRef(null);

  // --- DRAGGING LOGIC ---
  const handleDragStart = (e) => {
    if (isMaximized) return;
    focusWindow(id);
    setIsDragging(true);
    
    // Get correct coordinates whether it's touch or mouse
    const { x, y } = getClientPos(e);
    
    setDragOffset({
      x: x - position.x,
      y: y - position.y
    });
  };

  useEffect(() => {
    const handleMove = (e) => {
      if (isDragging) {
        // Touch devices pe screen scroll hone se rokne ke liye
        if(e.type === 'touchmove') e.preventDefault(); 

        const { x, y } = getClientPos(e);
        let newX = x - dragOffset.x;
        let newY = y - dragOffset.y;

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        
        // Safety Buffer
        const headerSafety = 70; 

        // 1. Horizontal (Left/Right)
        if (newX + size.width < headerSafety) newX = -size.width + headerSafety; // Left limit
        if (newX > screenWidth - headerSafety) newX = screenWidth - headerSafety; // Right limit

        // 2. Vertical (Top/Bottom)
        if (newY < 0) newY = 0;
        if (newY > screenHeight - headerSafety) {
          newY = screenHeight - headerSafety;
        }

        setPosition({ x: newX, y: newY });
      }
    };

    const handleEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleEnd);
      // Touch events add kiye yahan (passive: false is zaroori for preventDefault)
      window.addEventListener("touchmove", handleMove, { passive: false });
      window.addEventListener("touchend", handleEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, dragOffset, size]);


  // --- RESIZING LOGIC ---
  // --- RESIZING LOGIC (THE ULTIMATE FIX) ---
  const handleResizeStart = (e, direction) => {
    e.stopPropagation();
    if (e.type === 'mousedown') e.preventDefault();

    const { x: startX, y: startY } = getClientPos(e);
    
    // Yahan hum current values ko capture kar rahe hain
    const initialWidth = size.width;
    const initialHeight = size.height;
    const initialX = position.x;
    const initialY = position.y;

    const onMove = (moveEvent) => {
      if (moveEvent.type === 'touchmove') moveEvent.preventDefault();

      const { x: moveX, y: moveY } = getClientPos(moveEvent);
      
      let finalWidth = initialWidth;
      let finalHeight = initialHeight;
      let finalX = initialX;
      let finalY = initialY;

      const deltaX = moveX - startX;
      const deltaY = moveY - startY;

      // 1. Right / Bottom (Simple)
      if (direction.includes("right")) finalWidth = initialWidth + deltaX;
      if (direction.includes("bottom")) finalHeight = initialHeight + deltaY;

      // 2. Left Resize
      if (direction.includes("left")) {
        finalWidth = initialWidth - deltaX;
        finalX = initialX + deltaX;
      }

      // 3. TOP RESIZE (CRITICAL BOUNDARY LOCK)
      if (direction.includes("top")) {
        finalHeight = initialHeight - deltaY;
        finalY = initialY + deltaY;

        // 🔥 LOCK: Agar window top (0) ke upar jaane ki koshish kare
        if (finalY < 0) {
          // Jitni jagah screen ke top tak bachi thi, utni hi height do
          finalHeight = initialHeight + initialY; 
          finalY = 0; // Position 0 pe lock
        }
      }

      // --- APPLY CONSTRAINTS ---
      // Width Min 300
      if (finalWidth < 300) {
        if (direction.includes("left")) finalX = initialX + (initialWidth - 300);
        finalWidth = 300;
      }

      // Height Min 200
      if (finalHeight < 200) {
        if (direction.includes("top")) finalY = initialY + (initialHeight - 200);
        finalHeight = 200;
      }

      // Ek saath update karo taaki jitter na aaye
      setSize({ width: finalWidth, height: finalHeight });
      setPosition({ x: finalX, y: finalY });
    };

    const onEnd = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onEnd);
      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("touchend", onEnd);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onEnd);
    document.addEventListener("touchmove", onMove, { passive: false });
    document.addEventListener("touchend", onEnd);
  };

  const currentStyle = {
    display: isMinimized ? "none" : "flex",
    zIndex: zIndex,
    position: "absolute",
    width: isMaximized ? "100vw" : `${size.width}px`,
    height: isMaximized ? "calc(100vh - 40px)" : `${size.height}px`,
    top: isMaximized ? 0 : `${position.y}px`,
    left: isMaximized ? 0 : `${position.x}px`,
    transition: isDragging ? "none" : "width 0.2s, height 0.2s, top 0.2s, left 0.2s",
  };

  return (
    <div 
      ref={windowRef}
      className="os-window-frame"
      style={currentStyle}
      onMouseDown={() => focusWindow(id)}
      onTouchStart={() => focusWindow(id)} // Touch support for focusing window
    >
      {/* HEADER (Draggable) */}
      <div 
        className="window-header" 
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart} // Touch support for dragging
        onDoubleClick={() => toggleMaximize(id)}
      >
        <div className="title-section">
            <img src={icon} alt="icon" width={18} />
            <span>{title}</span>
        </div>
        <div className="controls-section">
            <button onTouchStart={(e) => e.stopPropagation()} onClick={(e) => {e.stopPropagation(); toggleMinimize(id)}}>
              <Minus size={14}/>
            </button>

            <button onTouchStart={(e) => e.stopPropagation()} onClick={(e) => {e.stopPropagation(); toggleMaximize(id)}}>
              {isMaximized ? <Copy size={12}/> : <Square size={12}/>}
            </button>

            <button className="close-btn" onTouchStart={(e) => e.stopPropagation()} onClick={(e) => {e.stopPropagation(); closeWindow(id)}}>
              <X size={16}/>
            </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="window-content">
        {component}
      </div>

      {/* --- RESIZERS --- */}
      {!isMaximized && (
        <>
            <div className="resizer r-right" onMouseDown={(e) => handleResizeStart(e, "right")} onTouchStart={(e) => handleResizeStart(e, "right")}></div>
            <div className="resizer r-bottom" onMouseDown={(e) => handleResizeStart(e, "bottom")} onTouchStart={(e) => handleResizeStart(e, "bottom")}></div>
            <div className="resizer r-br" onMouseDown={(e) => handleResizeStart(e, "bottom-right")} onTouchStart={(e) => handleResizeStart(e, "bottom-right")}></div>
            <div className="resizer r-left" onMouseDown={(e) => handleResizeStart(e, "left")} onTouchStart={(e) => handleResizeStart(e, "left")}></div>
            <div className="resizer r-top" onMouseDown={(e) => handleResizeStart(e, "top")} onTouchStart={(e) => handleResizeStart(e, "top")}></div>
            <div className="resizer r-bl" onMouseDown={(e) => handleResizeStart(e, "bottom-left")} onTouchStart={(e) => handleResizeStart(e, "bottom-left")}></div>
            <div className="resizer r-tr" onMouseDown={(e) => handleResizeStart(e, "top-right")} onTouchStart={(e) => handleResizeStart(e, "top-right")}></div>
            <div className="resizer r-tl" onMouseDown={(e) => handleResizeStart(e, "top-left")} onTouchStart={(e) => handleResizeStart(e, "top-left")}></div>
        </>
      )}
    </div>
  );
};

export default WindowFrame;
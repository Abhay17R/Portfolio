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
  const handleResizeStart = (e, direction) => {
    e.stopPropagation();
    
    // Touch event me direct preventDefault avoid karna better hota hai initially
    if(e.type === 'mousedown') e.preventDefault(); 
    
    const { x: startX, y: startY } = getClientPos(e);
    const startWidth = size.width;
    const startHeight = size.height;
    const startPos = { ...position };

    const onMove = (moveEvent) => {
      if(moveEvent.type === 'touchmove') moveEvent.preventDefault();

      const { x: moveX, y: moveY } = getClientPos(moveEvent);
      let newWidth = startWidth;
      let newHeight = startHeight;
      let newX = startPos.x;
      let newY = startPos.y;

      if (direction.includes("right")) newWidth = startWidth + (moveX - startX);
      if (direction.includes("bottom")) newHeight = startHeight + (moveY - startY);
      if (direction.includes("left")) {
        const delta = moveX - startX;
        newWidth = startWidth - delta;
        newX = startPos.x + delta;
      }
      if (direction.includes("top")) {
        const delta = moveY - startY;
        newHeight = startHeight - delta;
        newY = startPos.y + delta;
      }

      // Minimum constraints
      if (newWidth > 300) {
          setSize(prev => ({ ...prev, width: newWidth }));
          if (direction.includes("left")) setPosition(prev => ({ ...prev, x: newX }));
      }
      if (newHeight > 200) {
          setSize(prev => ({ ...prev, height: newHeight }));
          if (direction.includes("top")) setPosition(prev => ({ ...prev, y: newY }));
      }
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
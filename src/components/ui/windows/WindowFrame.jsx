"use client";
import React, { useState, useEffect, useRef } from "react";
import { X, Minus, Square, Copy } from "lucide-react"; // Icons
import { useOS } from "@/context/OSContext";
import "@/styles/WindowFrame.css"; 


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
  const handleMouseDown = (e) => {
    if (isMaximized) return;
    focusWindow(id);
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
    };
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);


  // --- RESIZING LOGIC (Native implementation) ---
  const handleResizeMouseDown = (e, direction) => {
    e.stopPropagation();
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = size.width;
    const startHeight = size.height;
    const startPos = { ...position };

    const onMouseMove = (moveEvent) => {
      let newWidth = startWidth;
      let newHeight = startHeight;
      let newX = startPos.x;
      let newY = startPos.y;

      if (direction.includes("right")) newWidth = startWidth + (moveEvent.clientX - startX);
      if (direction.includes("bottom")) newHeight = startHeight + (moveEvent.clientY - startY);
      if (direction.includes("left")) {
        const delta = moveEvent.clientX - startX;
        newWidth = startWidth - delta;
        newX = startPos.x + delta;
      }
      if (direction.includes("top")) {
        const delta = moveEvent.clientY - startY;
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

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  // Styles dynamically calculate
  const currentStyle = {
    display: isMinimized ? "none" : "flex",
    zIndex: zIndex,
    position: "absolute",
    width: isMaximized ? "100vw" : `${size.width}px`,
    height: isMaximized ? "calc(100vh - 40px)" : `${size.height}px`, // Minus taskbar height
    top: isMaximized ? 0 : `${position.y}px`,
    left: isMaximized ? 0 : `${position.x}px`,
    transition: isDragging ? "none" : "width 0.2s, height 0.2s, top 0.2s, left 0.2s", // Smooth anim except drag
  };

  return (
    <div 
      ref={windowRef}
      className="os-window-frame"
      style={currentStyle}
      onMouseDown={() => focusWindow(id)}
    >
      {/* HEADER (Draggable) */}
      <div 
        className="window-header" 
        onMouseDown={handleMouseDown}
        onDoubleClick={() => toggleMaximize(id)}
      >
        <div className="title-section">
            <img src={icon} alt="icon" width={18} />
            <span>{title}</span>
        </div>
        <div className="controls-section">
  <button onClick={(e) => {e.stopPropagation(); toggleMinimize(id)}}>
    <Minus size={14}/>
  </button>

  <button onClick={(e) => {e.stopPropagation(); toggleMaximize(id)}}>
    {isMaximized ? <Copy size={12}/> : <Square size={12}/>}
  </button>

  <button className="close-btn" onClick={(e) => {e.stopPropagation(); closeWindow(id)}}>
    <X size={16}/>
  </button>
</div>
      </div>

      {/* CONTENT */}
      <div className="window-content">
        {component}
      </div>

      {/* --- RESIZERS (Only show if not maximized) --- */}
      {!isMaximized && (
        <>
            <div className="resizer r-right" onMouseDown={(e) => handleResizeMouseDown(e, "right")}></div>
            <div className="resizer r-bottom" onMouseDown={(e) => handleResizeMouseDown(e, "bottom")}></div>
            <div className="resizer r-br" onMouseDown={(e) => handleResizeMouseDown(e, "bottom-right")}></div>
            <div className="resizer r-left" onMouseDown={(e) => handleResizeMouseDown(e, "left")}></div>
            <div className="resizer r-top" onMouseDown={(e) => handleResizeMouseDown(e, "top")}></div>
            {/* Corner resizers for that diagonal arrow feel */}
            <div className="resizer r-bl" onMouseDown={(e) => handleResizeMouseDown(e, "bottom-left")}></div>
            <div className="resizer r-tr" onMouseDown={(e) => handleResizeMouseDown(e, "top-right")}></div>
            <div className="resizer r-tl" onMouseDown={(e) => handleResizeMouseDown(e, "top-left")}></div>
        </>
      )}
    </div>
  );
};

export default WindowFrame;
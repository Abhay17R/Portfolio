import React from "react";
import Draggable from "react-draggable";
import { X, Minus, Square } from "lucide-react";
import { useOS } from "@/context/OSContext";
import "@/styles/WindowFrame.css"; // Ensure this path is correct

const WindowFrame = ({ app, children }) => {
  const { closeApp, toggleMinimize, focusWindow, activeWindowId, osMode } = useOS();

  // Check if this specific window is currently active (on top)
  const isActive = activeWindowId === app.id;

  // Chaos Mode Effect
  const chaosClass = osMode === "chaos" ? "animate-pulse border-red-500" : "";

  return (
    <Draggable
      handle=".window-header" // Only drag when holding the header
      bounds="parent"         // Cannot drag outside the screen
      onMouseDown={() => focusWindow(app.id)} // Click anywhere on window to bring to front
    >
      <div 
        // We use the CSS class 'os-window-frame' for structure, and dynamic classes for state
        className={`os-window-frame ${isActive ? "active" : ""} ${chaosClass}`}
        style={{ 
          // LOGIC: If active, zIndex is 500. If not, 10. Icons are usually 1.
          zIndex: isActive ? 500 : 10, 
          display: app.isMinimized ? "none" : "flex",
          width: app.size?.width || 600,
          height: app.size?.height || 400,
          position: "absolute" // Required for Draggable
        }}
        onClick={() => focusWindow(app.id)}
      >
        {/* --- Header Section --- */}
        <div className="window-header">
          <div className="title-section">
            {/* Render Icon (Image or Component) */}
            {typeof app.icon === 'string' ? (
                <img src={app.icon} alt="icon" style={{width: 16, height: 16}} />
            ) : (
                <span className="text-blue-400">{app.icon}</span>
            )}
            <span>{app.title}</span>
          </div>

          <div className="controls-section">
            <button onClick={(e) => { e.stopPropagation(); toggleMinimize(app.id); }}>
              <Minus size={14} />
            </button>
            <button onClick={(e) => e.stopPropagation()}>
              <Square size={12} />
            </button>
            <button 
              className="close-btn" 
              onClick={(e) => { e.stopPropagation(); closeApp(app.id); }}
            >
              <X size={14} />
            </button>
          </div>
        </div>

        {/* --- Content Section --- */}
        <div className="window-content">
          {children}
        </div>
        
        {/* Resizers (Optional - keeps layout safe) */}
        <div className="resizer r-bottom"></div>
        <div className="resizer r-right"></div>
        <div className="resizer r-br"></div>
      </div>
    </Draggable>
  );
};

export default WindowFrame;
"use client";
import { createContext, useContext, useState, useEffect, useRef } from "react";

const OSContext = createContext();

export const OSProvider = ({ children }) => {

  // --- EXISTING LOGIC (UNCHANGED) ---
  const [phase, setPhase] = useState("boot"); 
  const [isMobile, setIsMobile] = useState(false);
  const [osMode, setOsMode] = useState("normal"); 

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const handleLogin = () => {
    if (window.innerWidth <= 768) {
      setPhase("mobile");
    } else {
      setPhase("desktop");
    }
  };

  // ===============================
  // WINDOW MANAGEMENT
  // ===============================

  const [windows, setWindows] = useState([]);
  const [activeWindowId, setActiveWindowId] = useState(null);

  // 🔥 NEW: Cascade Offset Logic
  const offsetCounterRef = useRef(0);
  const OFFSET_STEP = 30;
  const MAX_OFFSET_WINDOWS = 6;

  // 1️⃣ Open App
  const openApp = (id, title, icon, component) => {

    const existingWindow = windows.find((w) => w.id === id);

    if (existingWindow) {
      if (existingWindow.isMinimized) {
        toggleMinimize(id);
      } else {
        focusWindow(id);
      }
      return;
    }

    const offsetIndex = offsetCounterRef.current;

    const newWindow = {
      id,
      title,
      icon,
      component,
      isMinimized: false,
      isMaximized: false,
      zIndex: getNextZIndex(),

      // 👇 CASCADE POSITION
      initialPosition: {
        x: 100 + offsetIndex * OFFSET_STEP,
        y: 50 + offsetIndex * OFFSET_STEP
      }
    };

    offsetCounterRef.current++;

    if (offsetCounterRef.current > MAX_OFFSET_WINDOWS) {
      offsetCounterRef.current = 0;
    }

    setWindows((prev) => [...prev, newWindow]);
    setActiveWindowId(id);
  };

  // 2️⃣ Close
  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    if (activeWindowId === id) setActiveWindowId(null);
  };

  // 3️⃣ Focus
  const focusWindow = (id) => {
    setActiveWindowId(id);
    setWindows((prev) => 
      prev.map((w) =>
        w.id === id
          ? { ...w, zIndex: getNextZIndex() }
          : w
      )
    );
  };

  // 4️⃣ Minimize
  const toggleMinimize = (id) => {
    setWindows((prev) => 
      prev.map((w) => {
        if (w.id === id) {
          const newMinState = !w.isMinimized;

          if (!newMinState) setActiveWindowId(id);
          else if (activeWindowId === id) setActiveWindowId(null);

          return {
            ...w,
            isMinimized: newMinState,
            zIndex: newMinState ? 0 : getNextZIndex()
          };
        }
        return w;
      })
    );
  };

  // 5️⃣ Maximize
  const toggleMaximize = (id) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? { ...w, isMaximized: !w.isMaximized }
          : w
      )
    );
    focusWindow(id);
  };

  // Helper Z-Index
  const getNextZIndex = () => {
    if (windows.length === 0) return 100;
    const highest = Math.max(...windows.map(w => w.zIndex || 0));
    return highest + 1;
  };

  return (
    <OSContext.Provider value={{ 
      phase, setPhase, isMobile, handleLogin, osMode, setOsMode,
      windows, activeWindowId,
      openApp, closeWindow, focusWindow,
      toggleMinimize, toggleMaximize
    }}>
      {children}
    </OSContext.Provider>
  );
};

export const useOS = () => useContext(OSContext);

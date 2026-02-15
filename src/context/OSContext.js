// src/context/OSContext.js (FULL UPDATED CODE)

"use client";
import { createContext, useContext, useState, useEffect, useRef } from "react";
// App registry ko yahan bhi import karo
import { appRegistry } from "@/components/apps/appRegistry";
import MyProjects from "@/components/apps/MyProjects"; // MyProjects ko alag se import karo

const OSContext = createContext();

export const OSProvider = ({ children }) => {
  // --- HYDRATION GUARD ---
  // Ye state ensure karega ki client-side logic run hone ke baad hi content render ho.
  const [isLoaded, setIsLoaded] = useState(false);

  const [phase, setPhase] = useState("boot");
  const [isMobile, setIsMobile] = useState(false);
  const [osMode, setOsMode] = useState("normal");

  const [windows, setWindows] = useState([]);
  const [activeWindowId, setActiveWindowId] = useState(null);

  // --- PERSISTENCE LOGIC START ---

  // 1. Load state from sessionStorage on initial mount
  useEffect(() => {
    try {
      const savedPhase = sessionStorage.getItem("os_phase");
      const savedWindows = sessionStorage.getItem("os_windows");

      if (savedPhase) {
        setPhase(savedPhase);
      }

      if (savedWindows) {
        const parsedWindows = JSON.parse(savedWindows);
        
        // REHYDRATE: Ab hum saved data se wapas component banayenge
        const rehydratedWindows = parsedWindows.map(win => {
          let componentToRender = appRegistry[win.id];
          
          // 'MyProjects' ke liye special handling, kyunki use prop chahiye
          if (win.id === 'projects') {
             // Abhi ke liye dummy function, isko Desktop se handle karna padega
             const dummyDiveIn = () => console.log("Dive-in needs to be connected");
             componentToRender = <MyProjects onProjectClick={dummyDiveIn} />;
          }

          return {
            ...win,
            component: componentToRender,
          };
        });

        setWindows(rehydratedWindows);
      }
    } catch (error) {
      console.error("Failed to load state from sessionStorage:", error);
    }
    
    // Sab kuch load hone ke baad, content ko render karne ki permission do
    setIsLoaded(true);

  }, []); // Sirf ek baar page load par chalega

  // 2. Save state to sessionStorage whenever it changes
  useEffect(() => {
    // isLoaded check zaroori hai taaki initial render par default state save na ho jaye
    if (isLoaded) {
      sessionStorage.setItem("os_phase", phase);
      
      // SERIALIZE: Component ko save karne se pehle hata do
      const serializableWindows = windows.map(({ component, ...rest }) => rest);
      sessionStorage.setItem("os_windows", JSON.stringify(serializableWindows));
    }
  }, [phase, windows, isLoaded]);

  // --- PERSISTENCE LOGIC END ---

  // --- EXISTING LOGIC (Unchanged) ---
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
      // Agar pehle se windows khuli hain, to unhe clear kar do ek fresh start ke liye
      // Agar tum chahte ho ki login ke baad bhi windows open rahe, to is line ko comment kar do
      setWindows([]);
    }
  };

  const offsetCounterRef = useRef(0);
  const OFFSET_STEP = 30;
  const MAX_OFFSET_WINDOWS = 6;

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
      component, // Yahan component store hoga runtime ke liye
      isMinimized: false,
      isMaximized: false,
      zIndex: getNextZIndex(),
      initialPosition: {
        x: 100 + offsetIndex * OFFSET_STEP,
        y: 50 + offsetIndex * OFFSET_STEP,
      },
    };

    offsetCounterRef.current++;
    if (offsetCounterRef.current > MAX_OFFSET_WINDOWS) {
      offsetCounterRef.current = 0;
    }

    setWindows((prev) => [...prev, newWindow]);
    setActiveWindowId(id);
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    if (activeWindowId === id) setActiveWindowId(null);
  };

  const focusWindow = (id) => {
    setActiveWindowId(id);
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, zIndex: getNextZIndex() } : w
      )
    );
  };

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
            zIndex: newMinState ? 0 : getNextZIndex(),
          };
        }
        return w;
      })
    );
  };

  const toggleMaximize = (id) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMaximized: !w.isMaximized } : w))
    );
    focusWindow(id);
  };

  const getNextZIndex = () => {
    if (windows.length === 0) return 100;
    const highest = Math.max(...windows.map((w) => w.zIndex || 0));
    return highest + 1;
  };

  // Provider ki value
  const value = {
    phase, setPhase, isMobile, handleLogin, osMode, setOsMode,
    windows, activeWindowId,
    openApp, closeWindow, focusWindow,
    toggleMinimize, toggleMaximize,
  };

  return (
    <OSContext.Provider value={value}>
      {/* Hydration Guard in action. Jab tak client-side load nahi hota, kuch render mat karo */}
      {isLoaded ? children : null}
    </OSContext.Provider>
  );
};

export const useOS = () => useContext(OSContext);
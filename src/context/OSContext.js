"use client";
import { createContext, useContext, useState, useEffect } from "react";

const OSContext = createContext();

export const OSProvider = ({ children }) => {
  // loading aur lock phase zaroor rakhna
  const [phase, setPhase] = useState("boot"); 
  const [isMobile, setIsMobile] = useState(false);
  
  // CHANGE: Default 'normal', option 'chaos' (pehle bakchodi tha)
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

  return (
    <OSContext.Provider value={{ phase, setPhase, isMobile, handleLogin, osMode, setOsMode }}>
      {children}
    </OSContext.Provider>
  );
};

export const useOS = () => useContext(OSContext);
"use client";
import { useState, useEffect } from "react";
import { OSProvider, useOS } from "@/context/OSContext";
import BootScreen from "@/components/core/BootScreen";
import WindowsLoadScreen from "@/components/core/WindowsLoadScreen";
import LockScreen from "@/components/core/LockScreen";
import LoginScreen from "@/components/core/LoginScreen";
import Desktop from "@/components/desktop/Desktop";
// NEW IMPORT
import AndroidOS from "@/components/android/AndroidOS";

const OSManager = () => {
  const { phase } = useOS();

  return (
    <main>
      {phase === "boot" && <BootScreen />}
      {phase === "loading" && <WindowsLoadScreen />}
      {phase === "lock" && <LockScreen />}
      {phase === "login" && <LoginScreen />}
      {phase === "desktop" && <Desktop />}
      
      {/* MOBILE OS INJECTED HERE */}
      {phase === "mobile" && <AndroidOS />}
    </main>
  );
};

// src/app/page.js ke bottom me

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Component browser me mount ho chuka hai
  }, []);

  // Jab tak mount nahi hota, ekdum black screen dikhao (No Hydration Error)
  if (!mounted) {
    return <div style={{ background: "#000", width: "100vw", height: "100vh" }}></div>;
  }

  return (
    <OSProvider>
      <OSManager />
    </OSProvider>
  );

}
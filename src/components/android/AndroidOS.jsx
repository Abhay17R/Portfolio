"use client";
import React, { useState } from "react";
import LockScreen from "./LockScreen";
import AppLauncher from "./AppLauncher";
import { appRegistry } from "@/components/apps/appRegistry";

export default function AndroidOS() {
  // Mobile states: "lock" | "launcher" | "app"
  const [screen, setScreen] = useState("lock"); 
  const [activeApp, setActiveApp] = useState(null);

  const handleUnlock = () => setScreen("launcher");
  
  const handleOpenApp = (id) => {
    setActiveApp(id);
    setScreen("app");
  };

  const handleCloseApp = () => {
    setActiveApp(null);
    setScreen("launcher");
  };

  // Safe renderer for apps (handles both <Component /> and Component functions)
  const renderApp = () => {
    const App = appRegistry[activeApp];
    if (!App) return <div style={{color: 'white', padding: 20}}>App not found</div>;
    return typeof App === 'function' ? React.createElement(App) : App;
  };

  return (
    <div className="android-os-container">
      {screen === "lock" && <LockScreen onUnlock={handleUnlock} />}
      {screen === "launcher" && <AppLauncher onOpenApp={handleOpenApp} />}
      
      {screen === "app" && activeApp && (
        <div className="android-app-fullscreen">
          <div className="android-nav-bar">
            <button className="android-back-btn" onClick={handleCloseApp}>
              ◄ Back
            </button>
            <span className="android-app-title">{activeApp.toUpperCase()}</span>
          </div>
          <div className="android-app-content">
            {renderApp()}
          </div>
        </div>
      )}
    </div>
  );
}
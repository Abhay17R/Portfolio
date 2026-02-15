"use client";
import { OSProvider, useOS } from "@/context/OSContext";
import BootScreen from "@/components/core/BootScreen";
import WindowsLoadScreen from "@/components/core/WindowsLoadScreen";
import LockScreen from "@/components/core/LockScreen";
import LoginScreen from "@/components/core/LoginScreen";
// New Import
import Desktop from "@/components/desktop/Desktop";

const OSManager = () => {
  const { phase } = useOS();

  return (
    <main>
      {phase === "boot" && <BootScreen />}
      {phase === "loading" && <WindowsLoadScreen />}
      {phase === "lock" && <LockScreen />}
      {phase === "login" && <LoginScreen />}
      
      {/* Load Desktop Component here */}
      {phase === "desktop" && <Desktop />}
      
      {phase === "mobile" && (
        <div style={{ color: 'white', padding: 50 }}>
          <h1>📱 Android Mode Loaded (Coming Soon)</h1>
        </div>
      )}
    </main>
  );
};

export default function Home() {
  return (
    <OSProvider>
      <OSManager />
    </OSProvider>
  );
}
"use client";
import { useState, useEffect } from "react";

// TERE ASLI DESKTOP ICONS YAHAN HAIN AB!
const mobileApps = [
  { id: "explorer", title: "Files", icon: "https://img.icons8.com/fluency/48/folder-invoices--v1.png" },
  { id: "chrome", title: "Browser", icon: "https://img.icons8.com/color/48/chrome--v1.png" },
  { id: "terminal", title: "Terminal", icon: "https://img.icons8.com/color/48/console.png" },
  { id: "projects", title: "Projects", icon: "https://img.icons8.com/color/48/project-setup.png" },
  { id: "resume", title: "Resume", icon: "https://img.icons8.com/color/48/pdf-2--v1.png" },
  { id: "notepad", title: "Notes", icon: "https://img.icons8.com/fluency/48/code-file.png" },
  { id: "calculator", title: "Calc", icon: "https://img.icons8.com/fluency/48/calculator.png" },
  { id: "media-player", title: "Media", icon: "https://img.icons8.com/fluency/48/windows-media-player.png" },
  { id: "paint", title: "Paint", icon: "https://img.icons8.com/fluency/48/paint-palette.png" },
  { id: "settings", title: "Settings", icon: "https://img.icons8.com/fluency/48/settings.png" },
];

export default function AppLauncher({ onOpenApp }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="android-launcher">
      {/* Top Status Bar */}
      <div className="android-status-bar">
        <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        <span style={{ letterSpacing: '5px' }}>📶 🔋</span>
      </div>

      {/* App Grid */}
      <div className="app-grid">
        {mobileApps.map((app) => (
          <div key={app.id} className="app-icon" onClick={() => onOpenApp(app.id)}>
            <div className="app-icon-img">
              {/* IMG TAG ADD KIYA ASLI ICONS KE LIYE */}
              <img src={app.icon} alt={app.title} style={{ width: '32px', height: '32px' }} />
            </div>
            <span>{app.title}</span>
          </div>
        ))}
      </div>

      {/* Bottom Nav Pill */}
      <div className="android-bottom-nav">
        <div className="nav-pill"></div>
      </div>
    </div>
  );
}
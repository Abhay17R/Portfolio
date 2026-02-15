"use client";
import React, { useState, useMemo } from "react";
import "@/styles/StartMenu.css";

const StartMenu = ({ isOpen, apps = [], onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Search Logic: Apps ko filter karne ke liye
  const filteredApps = useMemo(() => {
    if (!searchTerm) return apps;
    return apps.filter((app) =>
      app.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [apps, searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="start-menu-container" onClick={(e) => e.stopPropagation()}>
      
      {/* Search Bar: Input change par searchTerm update hoga */}
      <div className="start-search-box">
        <input 
          type="text" 
          placeholder="Search for apps, settings, and documents" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus
        />
      </div>

      {/* Pinned Section: Yahan dynamic apps render ho rahi hain */}
      <div className="start-pinned-area">
        <div className="section-title">
          <span>{searchTerm ? "Search Results" : "Pinned"}</span>
          <button>All apps &gt;</button>
        </div>
        
        <div className="apps-grid">
          {filteredApps.length > 0 ? (
            filteredApps.map((app, index) => (
              <div 
                key={app.id || index} 
                className="app-item" 
                onClick={() => {
                  app.action(); // App open handler
                  onClose();    // Start menu band karne ke liye
                }}
              >
                <img src={app.icon} alt={app.name} />
                <span>{app.name}</span>
              </div>
            ))
          ) : (
            <div style={{ color: "#888", padding: "20px", fontSize: "12px" }}>
              No apps found.
            </div>
          )}
        </div>
      </div>

      {/* Recommended Section: Placeholder files */}
      <div className="start-recommended-area">
        <div className="section-title">
          <span>Recommended</span>
        </div>
        <div className="rec-item">
          <span style={{ fontSize: "12px", color: "#ccc" }}>
            No recent files
          </span>
        </div>
      </div>

      {/* Footer: Profile aur Power button */}
      <div className="start-footer">
        <div className="user-profile">
          <img src="https://i.postimg.cc/cLbyKrVB/image.png" alt="Profile" />
          <span>Abhay Kumar Jha</span>
        </div>
        <div className="power-btn" onClick={() => window.location.reload()}>
          <img src="https://img.icons8.com/ios-glyphs/30/ffffff/shutdown.png" alt="Power" />
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
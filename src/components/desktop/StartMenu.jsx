import React from "react";
import "@/styles/StartMenu.css"; // Iska CSS niche step 4 me hai

const StartMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  const pinnedApps = [
    { name: "Terminal", icon: "https://img.icons8.com/color/48/console.png", action: () => console.log("Open Terminal") },
    { name: "Projects", icon: "https://img.icons8.com/color/48/project-setup.png", action: () => console.log("Open Projects") },
    { name: "Resume", icon: "https://img.icons8.com/color/48/pdf-2--v1.png", action: () => console.log("Open Resume") },
    { name: "Chrome", icon: "https://img.icons8.com/color/48/chrome--v1.png", action: () => console.log("Open Browser") },
    { name: "VS Code", icon: "https://img.icons8.com/color/48/visual-studio-code-2019.png", action: () => console.log("Open Code") },
    { name: "Settings", icon: "https://img.icons8.com/color/48/settings--v1.png", action: () => console.log("Open Settings") },
  ];

  return (
    <div className="start-menu-container" onClick={(e) => e.stopPropagation()}>
      
      {/* Search Bar */}
      <div className="start-search-box">
        <input type="text" placeholder="Search for apps, settings, and documents" />
      </div>

      {/* Pinned Section */}
      <div className="start-pinned-area">
        <div className="section-title">
            <span>Pinned</span>
            <button>All apps &gt;</button>
        </div>
        <div className="apps-grid">
            {pinnedApps.map((app, index) => (
                <div key={index} className="app-item" onClick={app.action}>
                    <img src={app.icon} alt={app.name} />
                    <span>{app.name}</span>
                </div>
            ))}
        </div>
      </div>

      {/* Recommended Section (Optional Placeholder) */}
      <div className="start-recommended-area">
        <div className="section-title">
            <span>Recommended</span>
        </div>
        <div className="rec-item">
            <span style={{fontSize: '12px', color: '#ccc'}}>No recent files</span>
        </div>
      </div>

      {/* Bottom User Profile Bar */}
      <div className="start-footer">
        <div className="user-profile">
            <img src="https://i.postimg.cc/cLbyKrVB/image.png" alt="Profile" />
            <span>Abhay Kumar Jha</span>
        </div>
        <div className="power-btn">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/shutdown.png" alt="Power" />
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
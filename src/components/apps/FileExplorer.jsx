"use client";
import React, { useState } from "react";
import "@/styles/FileExplorer.css"; // CSS niche hai

const FileExplorer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [currentPath, setCurrentPath] = useState("Quick Access");

  // Mock Data: Folders ke andar kya dikhega
  const fileSystem = {
    "Quick Access": [
      { name: "Desktop", type: "folder", icon: "https://img.icons8.com/fluency/48/desktop-mac.png" },
      { name: "Downloads", type: "folder", icon: "https://img.icons8.com/fluency/48/downloads-folder.png" },
      { name: "Documents", type: "folder", icon: "https://img.icons8.com/fluency/48/documents.png" },
      { name: "Pictures", type: "folder", icon: "https://img.icons8.com/fluency/48/image-file.png" },
    ],
    "Desktop": [
      { name: "Project Alpha", type: "folder", icon: "https://img.icons8.com/fluency/48/folder-invoices--v1.png" },
      { name: "Resume.pdf", type: "file", icon: "https://img.icons8.com/color/48/pdf-2--v1.png" },
      { name: "Website.lnk", type: "file", icon: "https://img.icons8.com/color/48/chrome--v1.png" },
    ],
    "Downloads": [
      { name: "installer_v2.exe", type: "file", icon: "https://img.icons8.com/color/48/exe.png" },
      { name: "meme.jpg", type: "file", icon: "https://img.icons8.com/fluency/48/image.png" },
    ],
    "Documents": [
      { name: "Notes.txt", type: "file", icon: "https://img.icons8.com/color/48/txt.png" },
      { name: "Budget.xlsx", type: "file", icon: "https://img.icons8.com/color/48/microsoft-excel-2019.png" },
    ],
    "Pictures": [
      { name: "Holiday.png", type: "file", icon: "https://img.icons8.com/fluency/48/image.png" },
    ],
    "This PC": [
        { name: "Local Disk (C:)", type: "drive", icon: "https://img.icons8.com/color/48/c-drive.png" },
        { name: "Local Disk (D:)", type: "drive", icon: "https://img.icons8.com/color/48/hdd.png" }
    ]
  };

  // Sidebar Links
  const sidebarItems = [
    { name: "Quick Access", icon: "https://img.icons8.com/fluency/48/star.png" },
    { name: "Desktop", icon: "https://img.icons8.com/fluency/48/desktop-mac.png" },
    { name: "Downloads", icon: "https://img.icons8.com/fluency/48/downloads-folder.png" },
    { name: "Documents", icon: "https://img.icons8.com/fluency/48/documents.png" },
    { name: "Pictures", icon: "https://img.icons8.com/fluency/48/image-file.png" },
    { name: "This PC", icon: "https://img.icons8.com/fluency/48/monitor--v1.png" },
  ];

  // Handle Folder Click
  const handleItemClick = (item) => {
    if (item.type === "folder" || item.type === "drive") {
        // Agar folder hai aur data exist karta hai toh switch karo
        if (fileSystem[item.name]) {
            setCurrentPath(item.name);
        } else {
            // Empty folder simulation
            setCurrentPath(item.name); 
        }
    } else {
        console.log(`Opening file: ${item.name}`);
    }
  };

  // Safe check: Agar path exist nahi karta (empty folder) to empty array dikhao
  const currentFiles = fileSystem[currentPath] || [];

  return (
    <div className="explorer-window" onClick={(e) => e.stopPropagation()}>
      
      {/* 1. Window Header (Drag area + Controls) */}
      <div className="explorer-header">
        <div className="window-title">
            <img src="https://img.icons8.com/fluency/48/folder-invoices--v1.png" alt="icon" />
            <span>File Explorer</span>
        </div>
        <div className="window-controls">
            <span className="control minimize">─</span>
            <span className="control maximize">□</span>
            <span className="control close" onClick={onClose}>✕</span>
        </div>
      </div>

      {/* 2. Top Navigation Bar (Address Bar) */}
      <div className="explorer-nav-bar">
        <div className="nav-buttons">
             <span>←</span>
             <span>→</span>
             <span>↑</span>
        </div>
        <div className="address-bar">
            <img src="https://img.icons8.com/fluency/48/monitor--v1.png" alt="pc" />
            <span>{currentPath}</span>
        </div>
        <div className="search-bar">
            <input type="text" placeholder={`Search ${currentPath}`} />
        </div>
      </div>

      {/* 3. Main Body (Sidebar + Content) */}
      <div className="explorer-body">
        
        {/* Sidebar */}
        <div className="explorer-sidebar">
            {sidebarItems.map((item) => (
                <div 
                    key={item.name} 
                    className={`sidebar-item ${currentPath === item.name ? "active" : ""}`}
                    onClick={() => setCurrentPath(item.name)}
                >
                    <img src={item.icon} alt={item.name} />
                    <span>{item.name}</span>
                </div>
            ))}
        </div>

        {/* Content Grid */}
        <div className="explorer-content">
            {currentFiles.length === 0 ? (
                <div className="empty-folder">This folder is empty.</div>
            ) : (
                currentFiles.map((file, index) => (
                    <div key={index} className="file-grid-item" onDoubleClick={() => handleItemClick(file)}>
                        <img src={file.icon} alt={file.name} />
                        <span className="file-name">{file.name}</span>
                        <span className="file-type">{file.type}</span>
                    </div>
                ))
            )}
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;
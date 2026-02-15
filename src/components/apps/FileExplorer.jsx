"use client";
import React, { useState, useEffect } from "react";
import { 
  ArrowLeft, ArrowRight, ArrowUp, RotateCw, Search, 
  Home, Star, Monitor, Download, Image, FileText, 
  ChevronRight, Plus, Copy, Scissors, Trash2, CheckSquare 
} from "lucide-react";
import "@/styles/FileExplorer.css"; 

const FileExplorer = () => {
  // --- STATE ---
  const [currentPath, setCurrentPath] = useState("Quick Access");
  const [history, setHistory] = useState(["Quick Access"]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // --- DATA: Windows 11 Style Icons ---
  const icons = {
    folder: "https://img.icons8.com/fluency/96/folder-invoices--v1.png",
    folder_empty: "https://img.icons8.com/fluency/96/folder-invoices--v1.png",
    disk: "https://img.icons8.com/fluency/96/ssd.png",
    txt: "https://img.icons8.com/fluency/96/txt.png",
    pdf: "https://img.icons8.com/fluency/96/pdf.png",
    img: "https://img.icons8.com/fluency/96/image.png",
    code: "https://img.icons8.com/fluency/96/code-file.png",
    exe: "https://img.icons8.com/fluency/96/console.png"
  };

  const fileSystem = {
    "Quick Access": [
      { id: 1, name: "Desktop", type: "folder", icon: "https://img.icons8.com/fluency/96/desktop-mac.png" },
      { id: 2, name: "Downloads", type: "folder", icon: "https://img.icons8.com/fluency/96/downloads-folder.png" },
      { id: 3, name: "Documents", type: "folder", icon: "https://img.icons8.com/fluency/96/documents.png" },
      { id: 4, name: "Pictures", type: "folder", icon: "https://img.icons8.com/fluency/96/image-folder.png" },
      { id: 5, name: "This PC", type: "folder", icon: "https://img.icons8.com/fluency/96/monitor--v1.png" },
    ],
    "Desktop": [
      { id: 11, name: "Project Alpha", type: "folder", icon: icons.folder },
      { id: 12, name: "Portfolio Website", type: "folder", icon: icons.code },
      { id: 13, name: "Resume.pdf", type: "file", icon: icons.pdf, size: "1.2 MB" },
      { id: 14, name: "Chrome.lnk", type: "file", icon: "https://img.icons8.com/fluency/96/chrome.png", size: "2 KB" },
    ],
    "Downloads": [
      { id: 21, name: "vsc_setup.exe", type: "file", icon: icons.exe, size: "85 MB" },
      { id: 22, name: "funny_cat.png", type: "file", icon: icons.img, size: "2.4 MB" },
      { id: 23, name: "notes.txt", type: "file", icon: icons.txt, size: "12 KB" },
    ],
    "Documents": [
      { id: 31, name: "Work Stuff", type: "folder", icon: icons.folder },
      { id: 32, name: "Salary_Slip.pdf", type: "file", icon: icons.pdf, size: "400 KB" },
    ],
    "This PC": [
        { id: 91, name: "Windows (C:)", type: "disk", icon: icons.disk, size: "120 GB free" },
        { id: 92, name: "Data (D:)", type: "disk", icon: icons.disk, size: "500 GB free" }
    ],
    // Empty folders handling
    "Project Alpha": [],
    "Portfolio Website": [],
    "Work Stuff": []
  };

  const sidebarItems = [
    { name: "Quick Access", icon: <Star size={16} color="#eab308" fill="#eab308" /> },
    { name: "Desktop", icon: <Monitor size={16} color="#3b82f6" /> },
    { name: "Downloads", icon: <Download size={16} color="#22c55e" /> },
    { name: "Documents", icon: <FileText size={16} color="#a855f7" /> },
    { name: "Pictures", icon: <Image size={16} color="#ef4444" /> },
    { name: "This PC", icon: <Monitor size={16} color="#64748b" /> },
  ];

  // --- LOGIC ---
  const handleNavigate = (path) => {
    // Agar path exist nahi karta fileSystem me, toh kuch mat karo (ya error dikhao)
    if (!fileSystem[path] && !["Quick Access", "This PC", "Desktop", "Downloads", "Documents", "Pictures"].includes(path)) {
        // Maybe it's a subfolder logic we haven't implemented fully
        // For now, treat it as empty folder if key exists
        if (!Object.keys(fileSystem).includes(path)) return;
    }

    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(path);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setCurrentPath(path);
    setSelectedItem(null);
  };

  const handleBack = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setCurrentPath(history[historyIndex - 1]);
    }
  };

  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setCurrentPath(history[historyIndex + 1]);
    }
  };

  const handleUp = () => {
    // Simple Up logic for flat structure
    if (currentPath !== "This PC" && currentPath !== "Quick Access") {
        handleNavigate("This PC"); // Default to PC for now
    }
  };

  const handleItemDoubleClick = (item) => {
    if (item.type === "folder" || item.type === "disk") {
        handleNavigate(item.name);
    } else {
        alert(`Opening file: ${item.name}`);
    }
  };

  const currentFiles = fileSystem[currentPath] || [];

  return (
    <div className="explorer-container">
      
      {/* 1. TOP TOOLBAR (Navigation + Address + Search) */}
      <div className="explorer-toolbar-top">
        <div className="nav-buttons">
            <button disabled={historyIndex === 0} onClick={handleBack}><ArrowLeft size={16} /></button>
            <button disabled={historyIndex === history.length - 1} onClick={handleForward}><ArrowRight size={16} /></button>
            <button onClick={handleUp}><ArrowUp size={16} /></button>
            <button onClick={() => {}}><RotateCw size={14} /></button>
        </div>
        
        <div className="address-bar">
            <Monitor size={14} className="addr-icon" />
            <div className="breadcrumbs">
                <span>{currentPath}</span>
                <ChevronRight size={14} className="crumb-arrow" />
            </div>
        </div>

        <div className="search-box">
            <Search size={14} className="search-icon" />
            <input 
                type="text" 
                placeholder={`Search ${currentPath}`} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
      </div>

      {/* 2. COMMAND BAR (New, Cut, Copy, etc.) */}
      <div className="explorer-command-bar">
        <div className="cmd-btn"><Plus size={18} /><span>New</span></div>
        <div className="divider"></div>
        <div className="cmd-btn" title="Cut"><Scissors size={18} /></div>
        <div className="cmd-btn" title="Copy"><Copy size={18} /></div>
        <div className="cmd-btn" title="Paste"><CheckSquare size={18} /></div>
        <div className="cmd-btn" title="Rename"><FileText size={18} /></div>
        <div className="divider"></div>
        <div className="cmd-btn" title="Delete"><Trash2 size={18} /></div>
      </div>

      {/* 3. MAIN BODY */}
      <div className="explorer-body">
        
        {/* Sidebar */}
        <div className="explorer-sidebar">
            <div className="sidebar-group">
                <div className="group-title">Pinned</div>
                {sidebarItems.map((item) => (
                    <div 
                        key={item.name} 
                        className={`sidebar-item ${currentPath === item.name ? 'active' : ''}`}
                        onClick={() => handleNavigate(item.name)}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Content Area */}
        <div className="explorer-content">
            {currentFiles.length === 0 ? (
                <div className="empty-msg">This folder is empty.</div>
            ) : (
                <div className="file-grid">
                    {currentFiles
                    .filter(file => file.name.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((file) => (
                        <div 
                            key={file.id} 
                            className={`grid-item ${selectedItem === file.id ? 'selected' : ''}`}
                            onClick={() => setSelectedItem(file.id)}
                            onDoubleClick={() => handleItemDoubleClick(file)}
                        >
                            <img src={file.icon} alt={file.name} className="item-icon" />
                            <div className="item-info">
                                <span className="item-name">{file.name}</span>
                                <span className="item-type">{file.type === 'folder' ? 'File folder' : file.size}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
      </div>

      {/* 4. FOOTER STATUS BAR */}
      <div className="explorer-footer">
         <span>{currentFiles.length} items</span>
         <div className="footer-divider"></div>
         <span>{selectedItem ? '1 item selected' : ''}</span>
      </div>
    </div>
  );
};

export default FileExplorer;
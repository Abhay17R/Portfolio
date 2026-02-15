"use client";
import React, { useState, useEffect } from "react";
import { 
  ArrowLeft, ArrowRight, RotateCw, Lock, Star, MoreVertical, Plus, X 
} from "lucide-react";
import "@/styles/Chrome.css"; 

const Chrome = () => {
  const [url, setUrl] = useState("https://www.google.com/webhp?igu=1");
  const [displayUrl, setDisplayUrl] = useState("");
  
  useEffect(() => {
    setDisplayUrl("");
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      let target = displayUrl;
      if (!target.includes('.') || target.includes(' ')) {
        target = `https://www.bing.com/search?q=${encodeURIComponent(target)}`;
      } else {
        if (!target.startsWith('http')) {
          target = `https://${target}`;
        }
      }
      setUrl(target);
    }
  };

  const handleRefresh = () => {
    const current = url;
    setUrl('');
    setTimeout(() => setUrl(current), 50);
  };

  return (
    <div className="chrome-app-container">
      
      {/* --- 1. TABS BAR (Simplified - No Window Controls) --- */}
      <div className="chrome-tabs-bar">
        <div className="tabs-wrapper">
          <div className="chrome-tab active">
             <div className="tab-shape-left"></div>
             <div className="tab-content">
               <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png" alt="G" className="tab-icon" />
               <span className="tab-text">New Tab</span>
               <X size={13} className="tab-close-icon" />
             </div>
             <div className="tab-shape-right"></div>
          </div>
          <div className="new-tab-btn">
             <Plus size={16} color="#4b5563" />
          </div>
        </div>
        {/* Yahaan se Maine Minimize/Close buttons hata diye kyunki wo tere main window me already hain */}
      </div>

      {/* --- 2. TOOLBAR (Address Bar) --- */}
      <div className="chrome-toolbar">
        <div className="nav-buttons">
          <button className="icon-btn"><ArrowLeft size={16} /></button>
          <button className="icon-btn"><ArrowRight size={16} /></button>
          <button className="icon-btn" onClick={handleRefresh}><RotateCw size={14} /></button>
        </div>

        <div className="omnibox">
          <div className="omnibox-wrapper">
             <Lock size={12} className="lock-icon text-green-700" />
             <input 
               type="text" 
               className="address-input"
               value={displayUrl}
               onChange={(e) => setDisplayUrl(e.target.value)}
               onKeyDown={handleKeyDown}
               placeholder="Search Google or type a URL"
             />
             <Star size={14} className="star-icon" />
          </div>
        </div>

        <div className="profile-menu">
           <div className="profile-pic">A</div>
           <MoreVertical size={16} className="menu-icon" />
        </div>
      </div>

      {/* --- 3. BOOKMARKS BAR --- */}
      <div className="bookmarks-bar">
        <div className="bookmark" onClick={() => setUrl("https://github.com/abhay-os")}>
          <img src="https://github.githubassets.com/favicons/favicon.svg" alt="" />
          <span>GitHub</span>
        </div>
        <div className="bookmark" onClick={() => setUrl("https://vscode.dev")}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="" />
          <span>VS Code</span>
        </div>
        <div className="bookmark" onClick={() => setUrl("https://linkedin.com")}>
          <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="" />
          <span>LinkedIn</span>
        </div>
      </div>

      {/* --- 4. IFRAME CONTENT --- */}
      <div className="chrome-content">
        <iframe 
          src={url}
          className="browser-iframe"
          title="Chrome Browser"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />
      </div>
    </div>
  );
};

export default Chrome;
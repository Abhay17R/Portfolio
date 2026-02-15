import React, { useState, useEffect, useRef } from 'react';
import { Save, Trash2, Zap, FileText } from 'lucide-react'; // Install lucide-react if missing
import '@/styles/Notepad.css';

const Notepad = () => {
  // State for text content
  const [content, setContent] = useState("");
  // State for the unique "Hacker Glow" mode
  const [hackerMode, setHackerMode] = useState(false);
  
  const textareaRef = useRef(null);
  const gutterRef = useRef(null);

  // 1. Load saved content on startup (Auto-Load)
  useEffect(() => {
    const savedData = localStorage.getItem('cyberpad-content');
    if (savedData) {
      setContent(savedData);
    }
  }, []);

  // 2. Auto-Save logic on every change
  const handleChange = (e) => {
    const newText = e.target.value;
    setContent(newText);
    localStorage.setItem('cyberpad-content', newText);
  };

  // 3. Clear function
  const handleClear = () => {
    if(window.confirm("Are you sure you want to clear everything?")) {
        setContent("");
        localStorage.removeItem('cyberpad-content');
    }
  };

  // 4. Sync scrolling between text and gutter
  const handleScroll = () => {
    if (gutterRef.current && textareaRef.current) {
      gutterRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  // 5. Generate Line Numbers based on content
  const lineNumbers = content.split('\n').map((_, i) => i + 1);
  const wordCount = content.trim() === '' ? 0 : content.trim().split(/\s+/).length;
  const charCount = content.length;

  return (
    <div className={`notepad-container ${hackerMode ? 'hacker-mode' : ''}`}>
      
      {/* TOP TOOLBAR */}
      <div className="np-toolbar">
        <div style={{display:'flex', gap:'10px'}}>
            <button className="np-btn" onClick={() => alert("Auto-Saved to Local Storage!")}>
                <Save size={14} /> Save
            </button>
            <button className="np-btn" onClick={handleClear}>
                <Trash2 size={14} /> Clear
            </button>
        </div>
        
        {/* The Unique Feature Button */}
        <button 
            className={`np-btn ${hackerMode ? 'active-glow' : ''}`} 
            onClick={() => setHackerMode(!hackerMode)}
        >
            <Zap size={14} fill={hackerMode ? "currentColor" : "none"} /> 
            {hackerMode ? "Neon Mode: ON" : "Neon Mode: OFF"}
        </button>
      </div>

      {/* EDITOR AREA */}
      <div className="np-editor-area">
        {/* Line Number Gutter */}
        <div className="np-gutter" ref={gutterRef}>
          {lineNumbers.map(num => (
            <div key={num} className="gutter-num">{num}</div>
          ))}
        </div>

        {/* Main Textarea */}
        <textarea
          ref={textareaRef}
          className="np-textarea"
          value={content}
          onChange={handleChange}
          onScroll={handleScroll}
          spellCheck="false"
          placeholder="Start typing your master plan..."
        />
      </div>

      {/* STATUS BAR */}
      <div className="np-statusbar">
        <span><FileText size={12} style={{marginRight:4}}/> UTF-8</span>
        <span>Lines: {lineNumbers.length}</span>
        <span>Words: {wordCount}</span>
        <span>Chars: {charCount}</span>
      </div>

    </div>
  );
};

export default Notepad;
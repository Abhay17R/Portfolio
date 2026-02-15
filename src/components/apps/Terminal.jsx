import React, { useState, useEffect, useRef } from 'react';
import '@/styles/Terminal.css';

const Terminal = () => {
  const [history, setHistory] = useState([]); // Command history
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const [isBooting, setIsBooting] = useState(true);

  // --- BOOT SEQUENCE LOGIC ---
  useEffect(() => {
    const bootLines = [
      "Initializing Abhay_OS Kernel v2.0...",
      "Loading System Dependencies...",
      "Verifying User Identity... [Abhay Jha]",
      "Mounting File System...",
      "Connecting to Server... SUCCESS",
      "Type 'help' to view available commands."
    ];

    let delay = 0;
    bootLines.forEach((line, index) => {
      delay += Math.random() * 500 + 300; // Random delay between lines
      setTimeout(() => {
        setHistory((prev) => [...prev, { type: 'system', content: line }]);
        // Boot finish detect
        if (index === bootLines.length - 1) {
          setIsBooting(false);
          setTimeout(() => inputRef.current?.focus(), 100);
        }
      }, delay);
    });
  }, []);

  // --- AUTO SCROLL BOTTOM ---
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  // --- FOCUS KEEPER (Click anywhere to focus input) ---
  const handleWrapperClick = () => {
    if (!isBooting) inputRef.current?.focus();
  };

  // --- COMMAND PROCESSOR ---
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      
      // Add user command to history
      const newHistory = [...history, { type: 'user', content: `visitor@abhay-os:~$ ${input}` }];
      
      let response = [];

      switch (cmd) {
        case 'help':
          response = [
            { type: 'info', content: 'Available Commands:' },
            { type: 'success', content: '  about    - Who am I?' },
            { type: 'success', content: '  skills   - My technical arsenal' },
            { type: 'success', content: '  projects - View my work' },
            { type: 'success', content: '  contact  - Get in touch' },
            { type: 'success', content: '  hack     - ??? (Try it)' },
            { type: 'success', content: '  clear    - Clear terminal' }
          ];
          break;

        case 'clear':
          setHistory([]);
          setInput("");
          return;

        case 'about':
          response = [
            { type: 'info', content: 'Name: Abhay Kumar Jha' },
            { type: 'info', content: 'Role: Full Stack Developer & Cybersecurity Enthusiast' },
            { type: 'info', content: 'Mission: Building cool web apps and breaking them.' }
          ];
          break;

        case 'skills':
          response = [
            { type: 'success', content: 'Frontend: React, Next.js, Tailwind' },
            { type: 'success', content: 'Backend: Node.js, Express, Python' },
            { type: 'success', content: 'Tools: Git, Docker, Linux' }
          ];
          break;
        
        case 'hack':
          response = [
            { type: 'warn', content: 'Initializing brute-force attack...' },
            { type: 'warn', content: 'Bypassing firewall...' },
            { type: 'error', content: 'ACCESS DENIED. Just kidding, I am a white-hat dev!' }
          ];
          break;

        case 'whoami':
          response = [{ type: 'info', content: 'visitor (You are a guest in my system)' }];
          break;
        
        case '':
          break;

        default:
          response = [{ type: 'error', content: `Command not found: ${cmd}. Type 'help' for assistance.` }];
      }

      setHistory([...newHistory, ...response]);
      setInput("");
    }
  };

  return (
    <div className="terminal-wrapper" onClick={handleWrapperClick}>
      {/* CRT Effects */}
      <div className="scanlines"></div>
      <div className="crt-flicker"></div>

      <div className="terminal-body" ref={bodyRef}>
        {/* Render History */}
        {history.map((line, i) => (
          <div key={i} className={`output-line ${line.type}`}>
            {line.content}
          </div>
        ))}

        {/* Input Line (Hidden while booting) */}
        {!isBooting && (
          <div className="input-line">
            <span className="prompt-label">visitor@abhay-os:~$</span>
            <input 
              ref={inputRef}
              type="text" 
              className="term-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              autoComplete="off"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
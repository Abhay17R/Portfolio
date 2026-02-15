"use client";
import { useState, useRef, useEffect } from "react";
import { useOS } from "@/context/OSContext";

const Terminal = () => {
  const { setOsMode, setPhase } = useOS();
  const [history, setHistory] = useState([
    "AbhayOS [Version 1.0.0]",
    "(c) 2026 Abhay Corp. All rights reserved.",
    "",
    "Type 'help' for available commands.",
    ""
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  const handleCommand = (cmd) => {
    const args = cmd.trim().toLowerCase().split(" ");
    let output = "";

    switch (args[0]) {
      case "help":
        output = `
  Available Commands:
  -------------------
  about       - Who am I?
  projects    - List my projects
  clear       - Clear screen
  mode chaos  - ⚠️ WARNING: Unstable Mode
  mode safe   - Switch to Mobile Safe Mode
  reboot      - Restart System
        `;
        break;
      case "about":
        output = "Developer: Abhay Kumar Jha | Stack: Next.js, React, Node";
        break;
      case "clear":
        setHistory([]);
        return;
      case "mode":
        if (args[1] === "chaos") {
          setOsMode("chaos");
          output = ">>> INITIATING CHAOS PROTOCOL... SYSTEM INTEGRITY COMPROMISED.";
        } else if (args[1] === "safe") {
          setPhase("mobile"); // Force mobile view
          output = ">>> REBOOTING INTO SAFE MODE...";
        } else {
          output = "Usage: mode [chaos | safe]";
        }
        break;
      case "reboot":
        window.location.reload();
        break;
      default:
        output = `'${cmd}' is not recognized as an internal or external command.`;
    }

    setHistory((prev) => [...prev, `C:\\Users\\Abhay> ${cmd}`, output, ""]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  // Auto-scroll to bottom
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="font-mono text-green-500 text-sm p-2 h-full w-full">
      {history.map((line, i) => (
        <div key={i} className="whitespace-pre-wrap">{line}</div>
      ))}
      <div className="flex items-center">
        <span className="mr-2">C:\Users\Abhay&gt;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none text-green-500 flex-1 focus:ring-0"
          autoFocus
        />
      </div>
      <div ref={endRef} />
    </div>
  );
};

export default Terminal;    
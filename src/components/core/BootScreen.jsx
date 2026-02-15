"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useOS } from "@/context/OSContext";

const BootScreen = () => {
  const { setPhase } = useOS();
  const [lines, setLines] = useState([]);
  
  const textLines = [
    "Initializing AbhayOS Kernel...",
    "Loading Portfolio Engine v2.0...",
    "Bypassing Security Protocols...", // Thoda hacker feel
    "Mounting Virtual File System...",
    "ACCESS GRANTED.",
    "Booting System..."
  ];

  useEffect(() => {
    let delay = 0;
    textLines.forEach((line) => {
      delay += Math.random() * 300 + 200; 
      setTimeout(() => {
        setLines((prev) => [...prev, line]);
      }, delay);
    });

    // IMPORTANT: Yahan 'loading' set karna hai, 'login' nahi
    setTimeout(() => {
      setPhase("loading"); 
    }, delay + 800);
  }, []);

  // ... (Baaki return code same rakhna jo pehle tha)
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.logo}>AbhayOS <span style={{fontSize:'12px'}}>BOOTLOADER</span></h1>
        <div style={styles.barContainer}>
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            style={styles.progressBar}
          />
        </div>
        <div style={styles.terminal}>
          {lines.map((line, i) => (
            <p key={i} style={styles.line}>{`> ${line}`}</p>
          ))}
          <span style={styles.cursor}>_</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
    container: { height: "100vh", width: "100vw", background: "#000", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "Courier New, monospace" },
    content: { width: "350px" },
    logo: { color: "#fff", marginBottom: "20px", textAlign: "center", letterSpacing: "2px" },
    barContainer: { width: "100%", height: "4px", background: "#333", marginBottom: "20px" },
    progressBar: { height: "100%", background: "#0f0", boxShadow: "0 0 10px #0f0" },
    terminal: { color: "#0f0", fontSize: "14px", height: "150px", overflow: "hidden" },
    line: { margin: "5px 0" },
    cursor: { animation: "blink 1s infinite" }
};

export default BootScreen;
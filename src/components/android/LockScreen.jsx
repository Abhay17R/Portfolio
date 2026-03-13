"use client";
import { useState, useEffect } from "react";

export default function LockScreen({ onUnlock }) {
  const [time, setTime] = useState(new Date());
  const [startY, setStartY] = useState(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // --- SWIPE LOGIC ---
  const handleStart = (y) => setStartY(y);
  
  const handleMove = (y) => {
    if (!startY) return;
    const diff = y - startY;
    if (diff < 0) setOffsetY(diff); // Only allow swiping UP
  };
  
  const handleEnd = () => {
    if (offsetY < -100) {
      onUnlock(); // Swiped up enough, unlock!
    } else {
      setOffsetY(0); // Snap back
    }
    setStartY(null);
  };

  return (
    <div 
      className="android-lockscreen"
      style={{ transform: `translateY(${offsetY}px)` }}
      // Touch events for actual mobile
      onTouchStart={(e) => handleStart(e.touches[0].clientY)}
      onTouchMove={(e) => handleMove(e.touches[0].clientY)}
      onTouchEnd={handleEnd}
      // Mouse events for testing on desktop browser (DevTools)
      onMouseDown={(e) => handleStart(e.clientY)}
      onMouseMove={(e) => startY && handleMove(e.clientY)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >
      <div className="lock-clock">
        <h1>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h1>
        <p>{time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}</p>
      </div>
      <div className="swipe-hint">
        <span className="chevron">^</span>
        <p>Swipe up to unlock</p>
      </div>
    </div>
  );
}
"use client";
import { useEffect } from "react";
import { useOS } from "@/context/OSContext";

const WindowsLoadScreen = () => {
  const { setPhase } = useOS();

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("lock"); 
    }, 4500); // Thoda time badhaya taaki loader dikhe
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      {/* Windows 11 Logo */}
      <div style={styles.logo}>
        <div style={styles.square}></div>
        <div style={styles.square}></div>
        <div style={styles.square}></div>
        <div style={styles.square}></div>
      </div>

      {/* Real Windows Animation Dots */}
      <div className="win-loader">
        <div className="win-dot"></div>
        <div className="win-dot"></div>
        <div className="win-dot"></div>
        <div className="win-dot"></div>
        <div className="win-dot"></div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    background: "#000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px"
  },
  logo: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4px",
    width: "100px",
    height: "100px",
    marginBottom: "20px",
    transform: "translateX(-20px)"
  },
  square: {
    background: "#00a4ef", // Official Windows Blue
  }
};

export default WindowsLoadScreen;
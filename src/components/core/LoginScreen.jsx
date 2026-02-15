"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useOS } from "@/context/OSContext";

const LoginScreen = () => {
  const { handleLogin, setOsMode, osMode } = useOS();

  // --- TYPEWRITER LOGIC ---
  const roles = [
    "Full Stack Developer",
    "Competitive Programmer",
    "MERN Stack Specialist",
    "Problem Solver",
    "System Architect"
  ];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 40 : 100);

      if (!isDeleting && text === fullText) setTimeout(() => setIsDeleting(true), 2000);
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <div style={styles.mainContainer}>
      <div style={styles.bgImage}></div>

      {/* Main Split Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={styles.contentWrapper}
      >
        {/* LEFT SIDE */}
        <div style={styles.leftPanel}>
          <div style={styles.brandLogo}>
             <span style={{fontSize:'40px'}}>⌘</span>
          </div>
          <h1 style={styles.brandTitle}>AbhayOS <span style={styles.version}>v2.0</span></h1>
          
          <div style={styles.typingContainer}>
            <h2 style={styles.jobTitle}>{text}<span style={styles.cursor}>|</span></h2>
          </div>

          <p style={styles.description}>
            Initializing secure environment.<br/>
            Accessing portfolio database...
          </p>
          <div style={styles.divider}></div>
          <p style={styles.instruction}>Select the user profile to begin.</p>
        </div>

        {/* RIGHT SIDE */}
        <div style={styles.rightPanel}>
          <motion.div whileHover={{ scale: 1.02 }} style={styles.profileCard}>
            <div style={styles.avatarWrapper}>
              <img src="/profile.jpg" alt="Profile" style={styles.avatar} />
              <div style={styles.statusDot}></div>
            </div>
            <h2 style={styles.userName}>Abhay Jha</h2>
            <p style={styles.userStatus}>Administrator</p>
            
            {/* CHAOS MODE TOGGLE */}
            <div style={styles.toggleRow}>
                <span style={{fontSize: '12px', color: '#aaa'}}>Safe</span>
                <div 
                    onClick={() => setOsMode(osMode === 'normal' ? 'chaos' : 'normal')}
                    style={{
                        width: '40px', height: '20px', background: osMode === 'chaos' ? '#ff0055' : '#444',
                        borderRadius: '20px', position: 'relative', cursor: 'pointer', transition: '0.3s'
                    }}
                >
                    <motion.div 
                        animate={{ x: osMode === 'chaos' ? 20 : 2 }}
                        style={{width: '16px', height: '16px', background: '#fff', borderRadius: '50%', top: '2px', position: 'absolute'}}
                    />
                </div>
                <span style={{fontSize: '12px', color: osMode === 'chaos' ? '#ff0055' : '#aaa', fontWeight: 'bold'}}>
                    {osMode === 'chaos' ? 'CHAOS 💀' : 'Chaos'}
                </span>
            </div>

            <button 
                style={{...styles.loginBtn, background: osMode === 'chaos' ? '#ff0055' : 'var(--primary-color)'}} 
                onClick={handleLogin}
            >
              {osMode === 'chaos' ? "ENTER AT YOUR OWN RISK" : "Login to System"}
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* --- BOTTOM BAR (RESTORED) --- */}
      <div style={styles.bottomBar}>
        <div 
            style={styles.powerOption} 
            onClick={() => window.location.reload()}
            onMouseEnter={(e) => e.target.style.color = "#fff"}
            onMouseLeave={(e) => e.target.style.color = "#aaa"}
        >
          <span style={{fontSize: '18px'}}>↺</span> Restart Portfolio
        </div>
        <div style={styles.powerOption}>
           🔋 Power: Online
        </div>
      </div>

    </div>
  );
};

const styles = {
  mainContainer: { height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", overflow: "hidden", color: "#fff" },
  bgImage: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop') center/cover", filter: "blur(30px) brightness(0.4)", zIndex: -1, transform: "scale(1.1)" },
  
  contentWrapper: { display: "flex", width: "80%", maxWidth: "1000px", height: "550px", background: "rgba(20, 20, 30, 0.4)", backdropFilter: "blur(20px)", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.1)", boxShadow: "0 20px 60px rgba(0,0,0,0.6)", overflow: "hidden" },
  
  leftPanel: { flex: 1, padding: "60px", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: "1px solid rgba(255,255,255,0.05)", background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%)" },
  brandTitle: { fontSize: "3rem", fontWeight: "700", marginBottom: "5px" },
  version: { fontSize: "1rem", color: "var(--primary-color)", verticalAlign: "super" },
  typingContainer: { height: "40px", marginBottom: "20px" },
  jobTitle: { color: "var(--primary-color)", fontSize: "1.4rem", fontWeight: "400", fontFamily: "monospace" },
  cursor: { color: "#fff", animation: "blink 1s infinite" },
  description: { fontFamily: "monospace", fontSize: "0.9rem", color: "#888", lineHeight: "1.6" },
  divider: { height: "1px", width: "50px", background: "var(--primary-color)", margin: "30px 0" },
  instruction: { fontSize: "0.9rem", color: "#aaa" },

  rightPanel: { flex: 1, display: "flex", justifyContent: "center", alignItems: "center" },
  profileCard: { textAlign: "center", padding: "30px", width: "100%", display: 'flex', flexDirection:'column', alignItems:'center' },
  avatarWrapper: { position: "relative", width: "120px", height: "120px", margin: "0 auto 20px" },
  avatar: { width: "100%", height: "100%", borderRadius: "50%", border: "3px solid rgba(255,255,255,0.2)", objectFit: "cover" },
  statusDot: { position: "absolute", bottom: "5px", right: "5px", width: "18px", height: "18px", background: "#00ff88", borderRadius: "50%", border: "3px solid #1a1a1a" },
  userName: { fontSize: "1.8rem", marginBottom: "5px" },
  userStatus: { color: "var(--primary-color)", fontSize: "0.9rem", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" },

  toggleRow: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" },
  loginBtn: { border: "none", padding: "12px 40px", borderRadius: "5px", fontWeight: "bold", cursor: "pointer", color: "#000", marginTop: "10px", width: "100%", transition: "0.3s" },

  // Bottom Bar Styles
  bottomBar: {
    position: "absolute",
    bottom: "30px",
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    color: "#aaa",
    fontSize: "0.9rem",
    zIndex: 10
  },
  powerOption: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "color 0.3s"
  }
};

export default LoginScreen;
import React, { useEffect, useState } from 'react';
import { X, Github, ExternalLink, Cpu, Database, Code, Layers, Play, MonitorPlay } from 'lucide-react';
import '@/styles/ProjectDive.css';

const ProjectDive = ({ project, onClose }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false); // Video Mode State

  useEffect(() => {
    if (project) {
        setIsLoaded(true);
        setShowVideo(false); // Reset video state on new project
    }
  }, [project]);

  if (!project) return null;

  const getTechIcon = (tech) => {
    // ... same old icon logic ...
    return <Layers size={14} />;
  };

  return (
    <div className={`project-dive-overlay ${isLoaded ? 'active' : ''}`}>
      
      {/* --- BACKGROUND LAYERS (Pure Chaos) --- */}
      <div className="cyber-grid-bg"></div>
      <div className="scanline-overlay"></div>
      <div className="vignette-layer"></div>
      
      {/* --- HUD CORNERS (Iron Man Style) --- */}
      <div className="hud-corner top-left"></div>
      <div className="hud-corner top-right"></div>
      <div className="hud-corner bottom-left"></div>
      <div className="hud-corner bottom-right"></div>

      {/* --- CLOSE BUTTON --- */}
      <button className="dive-close-btn" onClick={() => { setIsLoaded(false); setTimeout(onClose, 300); }}>
        <X size={20} /> TERMINATE_SESSION
      </button>

      <div className="dive-content-container">
        
        {/* --- LEFT PANEL: VISUALS (Image/Video) --- */}
        <div className="dive-left-panel">
           <h1 className="dive-title glitch-text" data-text={project.title}>
             {project.title}
           </h1>

           {/* HOLOGRAM FRAME */}
           <div className={`dive-media-frame ${showVideo ? 'video-mode' : ''}`}>
             
             {/* Conditional Rendering: Video vs Image */}
             {showVideo && project.video ? (
                <div className="video-wrapper">
                    <iframe 
                        src={project.video} 
                        title="Project Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="project-video-frame"
                    ></iframe>
                    <div className="scanning-line"></div> {/* Laser Scan Effect */}
                </div>
             ) : (
                <>
                    <img src={project.image} alt="Project Preview" className="dive-image" />
                    <div className="image-overlay-scan"></div>
                    <div className="system-status">SYSTEM STATUS: ONLINE</div>
                </>
             )}
             
             {/* HUD Decoration */}
             <div className="frame-corner c-tl"></div>
             <div className="frame-corner c-br"></div>
           </div>
           
           {/* ACTION BUTTONS */}
           <div className="dive-actions">
              {/* Watch Video Button */}
              {project.video && (
                  <button 
                    className={`cyber-btn video-btn ${showVideo ? 'active' : ''}`}
                    onClick={() => setShowVideo(!showVideo)}
                  >
                    {showVideo ? <MonitorPlay size={18} /> : <Play size={18} />}
                    {showVideo ? "STOP_FEED" : "WATCH_DEMO_FEED"}
                  </button>
              )}

              <a href={project.github} target="_blank" className="cyber-btn github">
                <Github size={18} /> SOURCE_CODE
              </a>
              <a href={project.link} target="_blank" className="cyber-btn live">
                <ExternalLink size={18} /> DEPLOYMENT
              </a>
           </div>
        </div>

        {/* --- RIGHT PANEL: DATA STREAM --- */}
        <div className="dive-right-panel">
          
          <div className="dive-section terminal-desc">
            <h3 className="section-header"> DECRYPTING_DESCRIPTION...</h3>
            <p className="typing-effect">
              {project.longDescription}
            </p>
          </div>

          <div className="dive-section holo-features">
             <h3 className="section-header"> MODULES_LOADED:</h3>
             <ul>
                {project.features?.map((feature, i) => (
                  <li key={i} style={{animationDelay: `${i * 0.1}s`}}>
                    <span className="hex-bullet">⬢</span> {feature}
                  </li>
                ))}
             </ul>
          </div>

          <div className="dive-section tech-orbit-container">
             <h3 className="section-header"> TECH_STACK_ANALYSIS:</h3>
             <div className="tech-grid">
                {project.techStack.map((tech, i) => (
                  <div key={i} className="tech-node" style={{animationDelay: `${i * 0.05}s`}}>
                    {getTechIcon(tech)}
                    <span>{tech}</span>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDive;
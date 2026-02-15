import React from 'react';
import { 
  Monitor, Palette, ShieldAlert, Cpu, 
  Zap, Skull, Globe, Volume2 
} from 'lucide-react';
import { useOS } from "@/context/OSContext";
import '@/styles/Settings.css';

const Settings = () => {
  const { osMode, setOsMode, theme, setTheme } = useOS();

  const themes = [
    { id: 'cyan', color: '#00f3ff', name: 'NEON_CYAN' },
    { id: 'pink', color: '#ff00ff', name: 'BITCHIN_PINK' },
    { id: 'yellow', color: '#ffe600', name: 'SAMURAI_GOLD' },
    { id: 'green', color: '#00ff00', name: 'TOXIC_WASTE' }
  ];

  return (
    <div className="settings-container">
      {/* LEFT SIDEBAR */}
      <div className="settings-sidebar">
        <div className="sidebar-item active"><Monitor size={18}/> <span>SYSTEM</span></div>
        <div className="sidebar-item"><Palette size={18}/> <span>PERSONALIZATION</span></div>
        <div className="sidebar-item"><ShieldAlert size={18}/> <span>SECURITY</span></div>
        <div className="sidebar-item"><Cpu size={18}/> <span>HARDWARE</span></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="settings-main">
        <h1 className="glitch-text" data-text="SYSTEM_CONFIG_V.2077">SYSTEM_CONFIG_V.2077</h1>
        
        <section className="settings-section">
          <h3><Palette size={16}/> NEURAL_INTERFACE_THEME</h3>
          <div className="theme-grid">
            {themes.map(t => (
              <div 
                key={t.id} 
                className={`theme-card ${theme === t.id ? 'active' : ''}`}
                onClick={() => setTheme(t.id)}
                style={{ '--theme-color': t.color }}
              >
                <div className="color-strip" style={{ background: t.color }}></div>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="settings-section">
          <h3><Zap size={16}/> SYSTEM_PERFORMANCE</h3>
          <div className="setting-row">
            <div className="setting-info">
              <span>OVERCLOCK_CPU</span>
              <p>Maximize neural processing (High Battery Drain)</p>
            </div>
            <label className="cyber-switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-row">
            <div className="setting-info">
              <span>GLITCH_OVERLAY</span>
              <p>Add aesthetic visual interference</p>
            </div>
            <label className="cyber-switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>
        </section>

        <section className="settings-section danger-zone">
          <h3 style={{color: '#ff0055'}}><Skull size={16}/> CYBER_PSYCHOSIS_ZONE</h3>
          <div className="setting-row">
            <div className="setting-info">
              <span style={{color: '#ff0055'}}>CHAOS_MODE</span>
              <p>Break reality. Warning: System may become unstable.</p>
            </div>
            <button 
              className={`chaos-btn ${osMode === 'chaos' ? 'active' : ''}`}
              onClick={() => setOsMode(osMode === 'chaos' ? 'normal' : 'chaos')}
            >
              {osMode === 'chaos' ? 'TERMINATE_CHAOS' : 'INITIATE_CHAOS'}
            </button>
          </div>
        </section>

        <div className="system-specs">
          <div className="spec-item"><span>OS_STATUS:</span> <span className="val">OPTIMIZED</span></div>
          <div className="spec-item"><span>RAM_USAGE:</span> <span className="val">42% / 128GB</span></div>
          <div className="spec-item"><span>UPTIME:</span> <span className="val">77:21:04</span></div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
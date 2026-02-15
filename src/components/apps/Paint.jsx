import React, { useRef, useState, useEffect } from 'react';
import { 
  Brush, Eraser, Download, Trash2, Zap, Grid, 
  Minus, Plus, Square, Circle, Triangle
} from 'lucide-react';
import '@/styles/Paint.css';

const Paint = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  
  // --- STATE ---
  const [color, setColor] = useState('#00f3ff'); // Default Neon Cyan
  const [brushSize, setBrushSize] = useState(5);
  const [tool, setTool] = useState('brush'); // 'brush' or 'eraser'
  const [neonMode, setNeonMode] = useState(true); // Glow effect active?
  const [showGrid, setShowGrid] = useState(true);
  const [snapshot, setSnapshot] = useState(null); 
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  // --- INIT CANVAS (Run once) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    // Parent container ka size le rahe hain taaki canvas fit ho
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;

    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.fillStyle = '#050505'; // Dark Base
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctxRef.current = ctx;
  }, []);

  // --- UPDATING BRUSH STYLE ---
  useEffect(() => {
    if (!ctxRef.current) return;
    const ctx = ctxRef.current;
    
    ctx.lineWidth = brushSize;
    
    if (tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out'; // Asli Eraser Logic
      ctx.shadowBlur = 0;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = color;
      if (neonMode) {
        ctx.shadowColor = color;
        ctx.shadowBlur = 15; // GLOW INTENSITY 🔥
      } else {
        ctx.shadowBlur = 0;
      }
    }
  }, [color, brushSize, tool, neonMode]);

  // --- DRAWING FUNCTIONS ---
 // 1. START DRAWING UPDATE
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    setIsDrawing(true);
    setStartPos({ x: offsetX, y: offsetY }); // Start position save karo
    
    // Canvas ka photo lelo (Snapshot) taaki shape drag karte waqt purana drawing na mite
    setSnapshot(ctxRef.current.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height));

    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
  };

  // 2. DRAW UPDATE
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    const ctx = ctxRef.current;

    if (tool === 'brush' || tool === 'eraser') {
      // Normal Drawing
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
    } else {
      // SHAPE DRAWING LOGIC
      ctx.putImageData(snapshot, 0, 0); // Purana canvas wapis lao (clears previous drag frame)
      ctx.beginPath();
      
      const width = offsetX - startPos.x;
      const height = offsetY - startPos.y;

      if (tool === 'rect') {
        ctx.rect(startPos.x, startPos.y, width, height);
      } else if (tool === 'circle') {
        const radius = Math.sqrt(width * width + height * height);
        ctx.arc(startPos.x, startPos.y, radius, 0, 2 * Math.PI);
      } else if (tool === 'triangle') {
        ctx.moveTo(startPos.x + width / 2, startPos.y); // Top
        ctx.lineTo(startPos.x, startPos.y + height);   // Bottom Left
        ctx.lineTo(startPos.x + width, startPos.y + height); // Bottom Right
        ctx.closePath();
      }
      
      ctx.stroke(); // Sirf outline draw karega (Neon effect ke saath)
    }
  };
  const stopDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  // --- ACTIONS ---
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    ctx.globalCompositeOperation = 'source-over'; // Reset mode
    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const downloadArt = () => {
    const link = document.createElement('a');
    link.download = `CyberArt_${Date.now()}.png`;
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  return (
    <div className="paint-container">
      
      {/* --- TOOLBAR (LEFT SIDE) --- */}
      <div className="paint-toolbar">
        <div className="tool-header">TOOLS</div>
        
        {/* Brush Tool */}
        <button 
          className={`paint-btn ${tool === 'brush' ? 'active' : ''}`} 
          onClick={() => setTool('brush')}
          title="Neon Brush"
        >
          <Brush size={20} />
        </button>

        {/* Eraser Tool */}
        <button 
          className={`paint-btn ${tool === 'eraser' ? 'active' : ''}`} 
          onClick={() => setTool('eraser')}
          title="Void Eraser"
        >
          <Eraser size={20} />
        </button>
        {/* ...Eraser ke baad... */}
        <div className="divider"></div>

        {/* SHAPES SECTION */}
        <button 
          className={`paint-btn ${tool === 'rect' ? 'active' : ''}`} 
          onClick={() => setTool('rect')} title="Rectangle"
        >
          <Square size={18} />
        </button>
        <button 
          className={`paint-btn ${tool === 'circle' ? 'active' : ''}`} 
          onClick={() => setTool('circle')} title="Circle"
        >
          <Circle size={18} />
        </button>
        <button 
          className={`paint-btn ${tool === 'triangle' ? 'active' : ''}`} 
          onClick={() => setTool('triangle')} title="Triangle"
        >
          <Triangle size={18} />
        </button>

        <div className="divider"></div>

        {/* Size Controls */}
        <div className="size-control">
          <button onClick={() => setBrushSize(s => Math.max(1, s - 2))}><Minus size={14}/></button>
          <span className="size-display">{brushSize}</span>
          <button onClick={() => setBrushSize(s => Math.min(50, s + 2))}><Plus size={14}/></button>
        </div>

        <div className="divider"></div>

        {/* Special Effects */}
        <button 
          className={`paint-btn ${neonMode ? 'active-neon' : ''}`} 
          onClick={() => setNeonMode(!neonMode)} 
          title="Toggle Neon Power"
        >
          <Zap size={20} />
        </button>

        <button 
          className={`paint-btn ${showGrid ? 'active' : ''}`} 
          onClick={() => setShowGrid(!showGrid)} 
          title="Toggle Grid"
        >
          <Grid size={20} />
        </button>

        <div className="divider"></div>

        {/* Utility */}
        <button className="paint-btn danger" onClick={clearCanvas} title="Nuke Canvas">
          <Trash2 size={20} />
        </button>
        
        <button className="paint-btn success" onClick={downloadArt} title="Save Art">
          <Download size={20} />
        </button>
      </div>

      {/* --- CANVAS AREA --- */}
      <div className="canvas-wrapper">
        {showGrid && <div className="cyber-grid-overlay"></div>}
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          className="cyber-canvas"
        />
      </div>

      {/* --- COLOR PALETTE (BOTTOM) --- */}
      <div className="paint-palette">
        <div className="palette-label">PIGMENTS:</div>
        
        {/* Custom Color Input */}
        <div className="color-wrapper">
           <input 
            type="color" 
            value={color} 
            onChange={(e) => setColor(e.target.value)} 
            className="color-picker-input"
          />
        </div>
        
        {/* Preset Cyber Colors */}
        {['#00f3ff', '#ff00ff', '#ffe600', '#00ff00', '#ff0055', '#ffffff'].map((c) => (
          <div 
            key={c}
            className={`color-swatch ${color === c ? 'selected' : ''}`}
            style={{ backgroundColor: c, boxShadow: color === c ? `0 0 15px ${c}` : 'none' }}
            onClick={() => { setColor(c); setTool('brush'); }}
          />
        ))}
      </div>
    </div>
  );
};

export default Paint;
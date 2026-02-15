import React, { useRef, useState, useEffect } from 'react';
import { 
  Brush, Eraser, Download, Trash2, Zap, Grid, 
  Minus, Plus, RotateCcw 
} from 'lucide-react';
import '@/styles/Paint.css';

const Paint = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  
  // --- STATE ---
  const [color, setColor] = useState('#00f3ff'); // Default Neon Cyan
  const [brushSize, setBrushSize] = useState(5);
  const [tool, setTool] = useState('brush'); // brush, eraser
  const [neonMode, setNeonMode] = useState(true); // Glow effect
  const [showGrid, setShowGrid] = useState(true);

  // --- INIT CANVAS ---
  useEffect(() => {
    const canvas = canvasRef.current;
    // Set high resolution
    canvas.width = 800;
    canvas.height = 600;

    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.fillStyle = '#050505'; // Dark Background default
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctxRef.current = ctx;
  }, []);

  // --- UPDATING CONTEXT STYLES ---
  useEffect(() => {
    if (!ctxRef.current) return;
    const ctx = ctxRef.current;
    
    ctx.lineWidth = brushSize;
    
    if (tool === 'eraser') {
      ctx.strokeStyle = '#050505'; // Background color
      ctx.shadowBlur = 0;
    } else {
      ctx.strokeStyle = color;
      if (neonMode) {
        ctx.shadowColor = color;
        ctx.shadowBlur = 15; // GLOW AMOUNT
      } else {
        ctx.shadowBlur = 0;
      }
    }
  }, [color, brushSize, tool, neonMode]);

  // --- DRAWING HANDLERS ---
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();
  };

  const stopDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  // --- ACTIONS ---
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
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
      
      {/* --- TOOLBAR LEFT --- */}
      <div className="paint-toolbar">
        <div className="tool-header">TOOLS</div>
        
        <button 
          className={`paint-btn ${tool === 'brush' ? 'active' : ''}`} 
          onClick={() => setTool('brush')}
          title="Neon Brush"
        >
          <Brush size={20} />
        </button>

        <button 
          className={`paint-btn ${tool === 'eraser' ? 'active' : ''}`} 
          onClick={() => setTool('eraser')}
          title="Void Eraser"
        >
          <Eraser size={20} />
        </button>

        <div className="divider"></div>

        {/* BRUSH SIZE */}
        <div className="size-control">
          <button onClick={() => setBrushSize(s => Math.max(1, s - 2))}><Minus size={14}/></button>
          <span className="size-display">{brushSize}</span>
          <button onClick={() => setBrushSize(s => Math.min(50, s + 2))}><Plus size={14}/></button>
        </div>

        <div className="divider"></div>

        {/* ACTIONS */}
        <button className={`paint-btn ${neonMode ? 'active-neon' : ''}`} onClick={() => setNeonMode(!neonMode)} title="Toggle Neon">
          <Zap size={20} />
        </button>

        <button className={`paint-btn ${showGrid ? 'active' : ''}`} onClick={() => setShowGrid(!showGrid)} title="Toggle Grid">
          <Grid size={20} />
        </button>

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

      {/* --- COLOR PALETTE BOTTOM --- */}
      <div className="paint-palette">
        <div className="palette-label">PIGMENTS:</div>
        <input 
          type="color" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
          className="color-picker-input"
        />
        
        {['#00f3ff', '#ff00ff', '#f0f', '#ffff00', '#00ff00', '#ff0000', '#ffffff'].map((c) => (
          <div 
            key={c}
            className={`color-swatch ${color === c ? 'selected' : ''}`}
            style={{ backgroundColor: c, boxShadow: `0 0 10px ${c}` }}
            onClick={() => setColor(c)}
          />
        ))}
      </div>
    </div>
  );
};

export default Paint;
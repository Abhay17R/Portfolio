import React, { useState, useEffect, useCallback } from 'react';
import { Menu, RotateCcw, Delete } from 'lucide-react'; // Icons
import '@/styles/Calculator.css';

const Calculator = () => {
  const [mode, setMode] = useState('Standard'); 
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [current, setCurrent] = useState("");
  const [history, setHistory] = useState("");
  const [lastComputed, setLastComputed] = useState(false);

  // --- CORE LOGIC (Jo pehle tha, wahi same) ---
  const processInput = useCallback((val) => {
    // 1. Clear All (Escape)
    if (val === 'C') {
      setCurrent("");
      setHistory("");
      return;
    }
    
    // 2. Backspace
    if (val === 'DEL') {
      setCurrent((prev) => prev.slice(0, -1));
      return;
    }

    // 3. Calculate (Enter / =)
    if (val === '=') {
      if (!current) return;
      try {
        let evalStr = current
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/π/g, 'Math.PI')
          .replace(/e/g, 'Math.E')
          .replace(/√/g, 'Math.sqrt')
          .replace(/log/g, 'Math.log10')
          .replace(/ln/g, 'Math.log')
          .replace(/\^/g, '**');

        // Trig fix
        evalStr = evalStr
          .replace(/sin\(/g, 'Math.sin(')
          .replace(/cos\(/g, 'Math.cos(')
          .replace(/tan\(/g, 'Math.tan(');

        const result = eval(evalStr); // Caution: Portfolio only
        setHistory(current + " =");
        setCurrent(result.toString());
        setLastComputed(true);
      } catch (err) {
        setCurrent("Error");
      }
      return;
    }

    // 4. Input Handling
    if (lastComputed && !['+', '-', '×', '÷'].includes(val)) {
      setLastComputed(false);
      setCurrent(val); // New start
    } else {
      setLastComputed(false);
      setCurrent((prev) => prev + val);
    }
  }, [current, lastComputed]);

  // --- 🎹 KEYBOARD MAPPING LOGIC (New Magic) ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      // 1. Numbers (0-9) & Decimal
      if (/^[0-9.]$/.test(key)) {
        processInput(key);
      }
      
      // 2. Operators
      else if (key === '+') processInput('+');
      else if (key === '-') processInput('-');
      else if (key === '*') processInput('×');
      else if (key === '/') {
        e.preventDefault(); // Browser ka quick search rokne ke liye
        processInput('÷');
      }

      // 3. Actions (Enter, Backspace, Escape)
      else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        processInput('=');
      }
      else if (key === 'Backspace') {
        processInput('DEL');
      }
      else if (key === 'Escape') {
        processInput('C');
      }
      
      // 4. Scientific Keys (Optional shortcuts)
      else if (key === '(' || key === ')') processInput(key);
      else if (key === '^') processInput('^');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [processInput]); // processInput dependency zaroori hai

  // --- BUTTON DATA ---
  const stdButtons = [
    '%', 'CE', 'C', 'DEL',
    '1/x', 'x²', '√', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '+/-', '0', '.', '='
  ];

  const sciButtons = [
    '2nd', 'π', 'e', 'C', 'DEL',
    'x²', '1/x', '|x|', 'exp', 'mod',
    '√', '(', ')', 'n!', '÷',
    'x^y', '7', '8', '9', '×',
    '10^x', '4', '5', '6', '-',
    'log', '1', '2', '3', '+',
    'ln', '+/-', '0', '.', '='
  ];

  return (
    <div className="calc-container" onClick={() => setMenuOpen(false)}>
      
      {/* HEADER */}
      <div className="calc-header" onClick={(e) => e.stopPropagation()}>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
           <Menu size={20} />
        </button>
        <span className="mode-title">{mode}</span>
      </div>

      {/* MENU */}
      {menuOpen && (
        <div className="mode-menu" onClick={(e) => e.stopPropagation()}>
          <button className={`menu-item ${mode==='Standard'?'active':''}`} onClick={()=>{setMode('Standard'); setMenuOpen(false)}}>Standard</button>
          <button className={`menu-item ${mode==='Scientific'?'active':''}`} onClick={()=>{setMode('Scientific'); setMenuOpen(false)}}>Scientific</button>
        </div>
      )}

      {/* DISPLAY */}
      <div className="calc-display">
        <div className="history-text">{history}</div>
        <div className="current-text">{current || "0"}</div>
      </div>

      {/* KEYPAD */}
      <div className={`calc-keypad ${mode.toLowerCase()}`}>
        {(mode === 'Standard' ? stdButtons : sciButtons).map((btn, i) => {
          let className = "c-btn";
          if (!isNaN(btn) || btn === '.') className += " btn-num";
          if (['+', '-', '×', '÷', '='].includes(btn)) className += " btn-op";
          if (btn === '=') className += " btn-equal";
          if (['sin','cos','tan','log','ln','π','e'].includes(btn)) className += " btn-sci";

          return (
            <button key={i} className={className} onClick={() => processInput(btn)}>
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
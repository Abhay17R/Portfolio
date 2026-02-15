"use client";
import React, { useState } from "react";
import Draggable from "react-draggable";
import { X, Minus, Square } from "lucide-react"; // Icons ke liye lucide-react use kar lena
import { useOS } from "@/context/OSContext";

const WindowFrame = ({ title, children, onClose, isOpen, icon }) => {
  const { osMode } = useOS();
  
  // Chaos Mode Effect: Agar chaos on hai, to window thoda shake karegi
  const chaosStyle = osMode === "chaos" ? "animate-pulse border-red-500 border-2" : "border-gray-700";

  if (!isOpen) return null;

  return (
    <Draggable handle=".window-header" bounds="parent">
      <div 
        className={`absolute top-10 left-10 w-[600px] bg-[#1c1c1c] rounded-lg shadow-2xl overflow-hidden flex flex-col text-white ${chaosStyle}`}
        style={{ zIndex: 50 }}
      >
        {/* Title Bar */}
        <div className="window-header h-10 bg-[#2d2d2d] flex items-center justify-between px-3 cursor-pointer select-none border-b border-gray-700">
          <div className="flex items-center gap-2">
            {icon && <span className="text-lg">{icon}</span>}
            <span className="text-sm font-medium tracking-wide">{title}</span>
          </div>
          <div className="flex items-center gap-4">
            <Minus size={16} className="hover:text-yellow-400 cursor-pointer" />
            <Square size={14} className="hover:text-blue-400 cursor-pointer" />
            <X size={18} className="hover:text-red-500 cursor-pointer" onClick={onClose} />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-black/90 p-1 overflow-auto h-[400px]">
          {children}
        </div>
      </div>
    </Draggable>
  );
};

export default WindowFrame;
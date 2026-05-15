"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Image, ImageOff } from "lucide-react";
import { useUI } from "@/context/UIContext";

export default function PhotoToggleButton() {
  const { isPhotosEnabled, setIsPhotosEnabled, isMobileMenuOpen } = useUI();

  return (
    <AnimatePresence>
      {!isMobileMenuOpen && (
        <motion.button
          onClick={() => setIsPhotosEnabled(!isPhotosEnabled)}
          initial={{ scale: 0, opacity: 0, x: 20 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          exit={{ scale: 0, opacity: 0, x: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`fixed bottom-28 right-8 z-100 w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-2xl transition-all duration-500 border ${
            isPhotosEnabled 
              ? "bg-navy-dark/80 text-gold border-gold/30 backdrop-blur-md" 
              : "bg-gold text-navy-dark border-navy-dark/10 shadow-gold/20"
          }`}
          aria-label={isPhotosEnabled ? "Desativar Fotos" : "Ativar Fotos"}
        >
          {isPhotosEnabled ? <Image size={20} /> : <ImageOff size={20} />}
          <span className="text-[7px] font-black uppercase tracking-tighter mt-1">
            {isPhotosEnabled ? "Fotos" : "Texto"}
          </span>
          
          {/* Subtle Indicator */}
          <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-navy-dark flex items-center justify-center text-[8px] font-bold ${
            isPhotosEnabled ? "bg-green-500" : "bg-red-500"
          }`}>
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

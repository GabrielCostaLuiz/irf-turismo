"use client";

import React, { createContext, useContext, useState } from "react";

interface UIContextType {
  isPromoVisible: boolean;
  setIsPromoVisible: (visible: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  isPhotosEnabled: boolean;
  setIsPhotosEnabled: (enabled: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [isPromoVisible, setIsPromoVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPhotosEnabled, setIsPhotosEnabled] = useState(true);

  return (
    <UIContext.Provider value={{ 
      isPromoVisible, 
      setIsPromoVisible,
      isMobileMenuOpen,
      setIsMobileMenuOpen,
      isPhotosEnabled,
      setIsPhotosEnabled
    }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
}

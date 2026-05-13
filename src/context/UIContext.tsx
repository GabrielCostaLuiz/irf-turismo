"use client";

import React, { createContext, useContext, useState } from "react";

interface UIContextType {
  isPromoVisible: boolean;
  setIsPromoVisible: (visible: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [isPromoVisible, setIsPromoVisible] = useState(true);

  return (
    <UIContext.Provider value={{ isPromoVisible, setIsPromoVisible }}>
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

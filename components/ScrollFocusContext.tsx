// ScrollFocusContext.tsx
import { createContext, useContext, useState } from "react";

type ScrollFocusContextType = {
  activeY: number;
  activeColor: string;
  setActiveY: (y: number) => void;
  setActiveColor: (c: string) => void;
};

const ScrollFocusContext = createContext<ScrollFocusContextType | null>(null);

export function ScrollFocusProvider({ children }: { children: React.ReactNode }) {
  const [activeY, setActiveY] = useState(0);
  const [activeColor, setActiveColor] = useState("blue");

  return (
    <ScrollFocusContext.Provider
      value={{ activeY, activeColor, setActiveY, setActiveColor }}
    >
      {children}
    </ScrollFocusContext.Provider>
  );
}

export function useScrollFocus() {
  const ctx = useContext(ScrollFocusContext);
  if (!ctx) throw new Error("useScrollFocus must be used inside provider");
  return ctx;
}

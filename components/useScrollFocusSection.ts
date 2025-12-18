// useScrollFocusSection.ts
import { useEffect, useRef } from "react";
import { useScrollFocus } from "./ScrollFocusContext";

export function useScrollFocusSection(color: string) {
  const ref = useRef<HTMLElement | null>(null);
  const { setActiveY, setActiveColor } = useScrollFocus();

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 📍 FOCO CENTRADO EN PANTALLA
          const y = window.scrollY + window.innerHeight * 0.5;
          setActiveY(y);

          // 🎨 CAMBIO DE COLOR SUAVE
          setTimeout(() => setActiveColor(color), 80);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [color, setActiveY, setActiveColor]);

  return ref;
}

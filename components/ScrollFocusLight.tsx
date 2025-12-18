// ScrollFocusLight.tsx
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { useScrollFocus } from "./ScrollFocusContext";

const gradients: Record<string, string> = {
  blue:   "from-cyan-400/30 via-blue-500/22 to-indigo-600/25",
  purple: "from-fuchsia-500/30 via-purple-500/22 to-indigo-600/25",
  green:  "from-emerald-400/30 via-teal-500/22 to-cyan-600/25",
  pink:   "from-pink-500/30 via-rose-500/22 to-purple-600/25",
  white:  "from-white/20 via-gray-200/18 to-gray-300/15",
};

export function ScrollFocusLight() {
  const { activeY, activeColor } = useScrollFocus();

  // 🌊 Movimiento con peso
  const y = useSpring(activeY, {
    stiffness: 18,
    damping: 45,
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeColor}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={`
            absolute left-1/2 -translate-x-1/2
            w-[720px] h-[480px]
            rounded-full blur-[140px]
            bg-gradient-to-r
            ${gradients[activeColor]}
          `}
          style={{ top: y }}
        />
      </AnimatePresence>
    </div>
  );
}

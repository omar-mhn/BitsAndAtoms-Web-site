import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX - innerWidth / 2;
      const y = clientY - innerHeight / 2;
      
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handleScroll = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero"
      // Cambiado: Usa bg-background en lugar de #0a0a0a fijo para soportar modo claro
      className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            // El gradiente usa currentColor (primary) para adaptarse al tema
            backgroundImage: `
              linear-gradient(to right, var(--primary) 1px, transparent 1px),
              linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>

      {/* Particles - Adjusted opacity for light mode visibility */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary pointer-events-none"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            // Más opacidad en las partículas para que se vean sobre blanco
            opacity: Math.random() * 0.5 + 0.3, 
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4">
        <motion.div
          className="relative"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            className="relative"
            animate={{
              scale: isHovering ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo Glow Container */}
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{
                  background: "radial-gradient(circle, var(--glow-primary) 0%, transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Main Text */}
              <motion.div 
                className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent"
                style={{
                  fontSize: "clamp(4rem, 12vw, 10rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  textAlign: "center",
                  lineHeight: 0.9,
                }}
              >
                BITS
                <br />
                <span className="text-foreground/20">&</span>
                <br />
                ATOMS
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tagline - Nueva frase inspiradora */}
        <motion.p
          // Text color adapts to theme (dark gray in light mode, light gray in dark mode)
          className="text-muted-foreground max-w-2xl text-center px-4 font-bold tracking-widest uppercase"
          style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Architecting the Future
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {/* Primary Button - Filled for weight */}
          <motion.button
            className="group relative px-8 py-4 bg-primary border border-primary overflow-hidden rounded-full shadow-lg shadow-primary/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("training")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="relative z-10 text-white font-bold tracking-wide">
              Descubre programas
            </span>
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            className="group relative px-8 py-4 bg-transparent border border-muted-foreground/30 text-foreground overflow-hidden rounded-full hover:bg-muted/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="relative z-10 font-medium tracking-wide">
              Únete a nosotros
            </span>
          </motion.button>
        </motion.div>
      </div>

      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground cursor-pointer z-20 hover:text-primary transition-colors"
        onClick={handleScroll}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.2 }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
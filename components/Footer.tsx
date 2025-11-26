import React from 'react';
import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    // Changed bg-[#050505] to bg-background (which is white in light mode) but with a dark border/section context maybe?
    // Actually, typically footers are dark even in light mode OR consistent with theme. 
    // User asked for "consistency", so let's make it follow theme: bg-background or bg-muted.
    // Let's use a very dark gray for footer in dark mode and a light gray in light mode.
    <footer className="relative bg-muted/30 border-t border-border">

        {/* Bottom bar */}
        <div className="align-items-center max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-border">
          <p className="text-muted-foreground text-sm text-center md:text-left font-medium">
            © 2025 Bits and Atoms. Hecho con <Heart className="inline text-red-500 mx-1" size={16} fill="currentColor" /> en Admira.
          </p>
          <div className="flex items-center gap-8 text-sm text-muted-foreground font-medium">
            <motion.a 
              href="#" 
              className="hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacidad
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              Términos
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              Cookies
            </motion.a>
          </div>
        </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 p-4 rounded-full bg-primary text-white shadow-lg z-40 shadow-primary/30"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ margin: "-100px" }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
}
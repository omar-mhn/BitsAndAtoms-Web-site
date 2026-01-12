import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">

      {/* ================= CAPA GLASS ================= */}
      <div
        className="
          absolute inset-0
          backdrop-blur-xl
          bg-background/85
          dark:bg-background/75
        "
      />

      {/* ================= CAPA DE PROFUNDIDAD ================= */}
      <div
        className="
          absolute inset-0
          pointer-events-none
          shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
          dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
        "
      />

      {/* ================= CONTENIDO ================= */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Texto */}
        <p className="text-muted-foreground text-sm font-medium text-center md:text-left">
          © 2026 Bits &amp; Atoms. Hecho con{" "}
          <Heart
            className="inline mx-1 text-red-500"
            size={16}
            fill="currentColor"
          />{" "}
          en Admira.
        </p>

        {/* Links */}
        <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {["Privacidad", "Términos", "Cookies"].map((item) => (
            <motion.a
              key={item}
              href="#"
              whileHover={{ y: -2 }}
              className="
                transition-colors
                hover:text-foreground
              "
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>

      {/* ================= SCROLL TO TOP ================= */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ margin: "-120px" }}
        whileHover={{ scale: 1.1, y: -6 }}
        whileTap={{ scale: 0.9 }}
        className="
          fixed bottom-10 right-10 z-40
          p-4 rounded-full
          bg-primary text-white
          shadow-lg shadow-primary/30
          backdrop-blur-sm
        "
      >
        <ArrowUp size={22} />
      </motion.button>
    </footer>
  );
}

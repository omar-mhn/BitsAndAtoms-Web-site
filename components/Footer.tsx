import React from 'react';
import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    Programas: ["Full-Stack", "IA & ML", "UX/UI", "Fabricación Digital"],
    Recursos: ["Blog", "Podcast", "Proyectos", "Guía de Branding"],
    Comunidad: ["Eventos", "Alumni", "Mentores", "Colaboradores"],
    Legal: ["Política de Privacidad", "Términos de Uso", "Cookies", "FAQ"],
  };

  return (
    // Changed bg-[#050505] to bg-background (which is white in light mode) but with a dark border/section context maybe?
    // Actually, typically footers are dark even in light mode OR consistent with theme. 
    // User asked for "consistency", so let's make it follow theme: bg-background or bg-muted.
    // Let's use a very dark gray for footer in dark mode and a light gray in light mode.
    <footer className="relative bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span 
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent"
                style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.03em" }}
              >
                BITS & ATOMS
              </span>
            </motion.div>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed text-lg font-medium">
              Educación práctica, creatividad e innovación tecnológica. 
              Formando a los creadores del futuro.
            </p>
            <div className="flex gap-4">
              {[
                { name: "Instagram", url: "#" },
                { name: "LinkedIn", url: "#" },
                { name: "Twitter", url: "#" },
                { name: "YouTube", url: "#" },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all text-muted-foreground shadow-sm"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.name[0]}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-6 text-foreground font-bold text-lg">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-base block font-medium"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          className="mb-16 p-10 rounded-3xl bg-card border border-border shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="mb-3 text-foreground font-bold text-2xl">Únete a nuestra newsletter</h3>
              <p className="text-muted-foreground text-lg font-medium">
                Recibe las últimas noticias, eventos y recursos directamente en tu email.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-4 rounded-xl bg-background border border-input focus:border-primary outline-none text-foreground placeholder:text-muted-foreground"
              />
              <motion.button
                className="px-8 py-4 bg-foreground text-background rounded-xl font-bold hover:bg-primary hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Suscribirse
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-border">
          <p className="text-muted-foreground text-sm text-center md:text-left font-medium">
            © 2025 Bits and Atoms. Hecho con <Heart className="inline text-red-500 mx-1" size={16} fill="currentColor" /> en Madrid.
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
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Quiénes somos", href: "#about" },
    { name: "Formación", href: "#training" },
    { name: "Mentores", href: "#mentors" },
    { name: "Espacios", href: "#spaces" },
    { name: "Podcast", href: "#podcast" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-background/80 backdrop-blur-lg shadow-sm border-border" 
          : "bg-transparent border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("#hero")}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent text-2xl font-black tracking-tighter">
              B&A
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-border bg-background text-muted-foreground"
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-border bg-background text-muted-foreground"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden overflow-hidden bg-background border-b border-border"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-4 py-3 rounded-xl hover:bg-muted text-foreground font-medium transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Twitter, Globe, Award, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const mentors = [
  {
    name: "Elena Rodríguez",
    role: "Directora de IA & Data Science",
    company: "Ex-Google DeepMind",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlY2h8ZW58MXx8fHwxNzYzNzE0OTAwfDA&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Doctora en Inteligencia Artificial con más de 10 años de experiencia liderando equipos de investigación.",
    specialties: ["Machine Learning", "Python", "Neural Networks"],
    social: { linkedin: "#", twitter: "#", website: "#" }
  },
  {
    name: "David Chen",
    role: "Lead Full-Stack Instructor",
    company: "Senior Arch @ Spotify",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBpbiUyMHRlY2h8ZW58MXx8fHwxNzYzNzE0OTAwfDA&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Arquitecto de software especializado en sistemas distribuidos y escalabilidad web.",
    specialties: ["React", "Node.js", "Cloud Arch"],
    social: { linkedin: "#", twitter: "#", website: "#" }
  },
  {
    name: "Sarah Johnson",
    role: "Head of Product Design",
    company: "Design Lead @ Airbnb",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM3MTQ5MDB8MA&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Diseñadora de producto apasionada por crear experiencias de usuario intuitivas y accesibles.",
    specialties: ["UX/UI", "Figma", "Design Systems"],
    social: { linkedin: "#", twitter: "#", website: "#" }
  },
  {
    name: "Marc Alvárez",
    role: "FabLab Manager",
    company: "Founder @ MakerSpace",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzYzNzE0OTAwfDA&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Ingeniero mecatrónico experto en fabricación digital, robótica e impresión 3D.",
    specialties: ["IoT", "3D Printing", "Arduino"],
    social: { linkedin: "#", twitter: "#", website: "#" }
  },
  {
    name: "Laura Wesker",
    role: "Cybersecurity Lead",
    company: "CISO @ TechGuard",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNzE1MjAwfDA&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Especialista en ciberseguridad ofensiva y defensiva. Experta en auditorías de seguridad y criptografía.",
    specialties: ["Ethical Hacking", "SecOps", "Criptografía"],
    social: { linkedin: "#", twitter: "#", website: "#" }
  },
  {
    name: "James Wilson",
    role: "DevOps & Cloud Architect",
    company: "AWS Hero",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM3MTUyMDB8MA&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Experto en infraestructura como código y automatización de despliegues en la nube a gran escala.",
    specialties: ["AWS", "Docker", "Kubernetes"],
    social: { linkedin: "#", twitter: "#", website: "#" }
  },
  {
    name: "Sofía Andreu",
    role: "Digital Growth Mentor",
    company: "Growth @ StartupX",
    image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7e89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxYJTIwZ2VuZXJhdGlvbiUyMHdvbWFufGVufDF8fHx8MTc2MzcxNTMwMHww&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Estratega digital enfocada en escalar productos tecnológicos mediante Growth Hacking y análisis de datos.",
    specialties: ["Marketing", "Analytics", "SEO"],
    social: { linkedin: "#", twitter: "#", website: "#" }
  },
  {
    name: "Alex Nakomoto",
    role: "Blockchain Developer",
    company: "Core Dev @ Ethereum F.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMHRlY2h8ZW58MXx8fHwxNzYzNzE1NDAwfDA&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Desarrollador de Smart Contracts y arquitecto de soluciones descentralizadas Web3.",
    specialties: ["Solidity", "Web3", "DeFi"],
    social: { linkedin: "#", twitter: "#", website: "#" }
  }
];

export function Mentors() {
  const [showAll, setShowAll] = useState(false);
  const displayedMentors = showAll ? mentors : mentors.slice(0, 4);

  return (
    <section id="mentors" className="min-h-screen py-24 px-4 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-6 px-6 py-2 rounded-full bg-primary shadow-lg shadow-primary/25"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-white font-bold text-sm tracking-wider uppercase">Mentores</span>
          </motion.div>
          
          <h2 className="mb-6 text-4xl md:text-6xl font-black tracking-tight text-foreground">
            Aprende de los <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
              expertos de la industria
            </span>
          </h2>
          
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            Nuestro equipo docente está formado por profesionales activos en las empresas tecnológicas más innovadoras.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {displayedMentors.map((mentor, index) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                layout
              >
                <Card className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 rounded-3xl h-full flex flex-col hover:shadow-2xl hover:shadow-primary/10">
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <ImageWithFallback
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Social Links Overlay */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <a href={mentor.social.linkedin} className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-white transition-colors">
                        <Linkedin size={18} />
                      </a>
                      <a href={mentor.social.twitter} className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-white transition-colors">
                        <Twitter size={18} />
                      </a>
                      <a href={mentor.social.website} className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-white transition-colors">
                        <Globe size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow relative">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{mentor.name}</h3>
                      <div className="flex items-center gap-2 mt-1 text-sm font-medium text-muted-foreground">
                        <Briefcase size={14} className="text-primary" />
                        <span>{mentor.role}</span>
                      </div>
                      <div className="text-xs font-semibold text-primary/80 mt-1 uppercase tracking-wide">
                        {mentor.company}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                      {mentor.bio}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {mentor.specialties.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-muted text-foreground border-border hover:bg-primary/10 hover:text-primary transition-colors text-xs py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        <motion.div 
            className="mt-16 text-center flex flex-col items-center gap-6"
            layout
        >
            <motion.button
                onClick={() => setShowAll(!showAll)}
                className="group flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all text-primary font-bold uppercase tracking-wide text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {showAll ? (
                    <>
                        <span>Ver menos mentores</span>
                        <ChevronUp size={20} />
                    </>
                ) : (
                    <>
                        <span>Ver más mentores</span>
                        <ChevronDown size={20} />
                    </>
                )}
            </motion.button>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-muted-foreground text-sm font-medium">
                <Award size={16} className="text-primary" />
                <span>Todos nuestros mentores están certificados y activos en la industria</span>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
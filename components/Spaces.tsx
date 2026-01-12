import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Cpu, Clapperboard, GraduationCap, Wrench, Laptop, Sprout, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollFocusSection } from "./useScrollFocusSection";

/* ---------------- DATA ---------------- */

const spaces = [
  {
    id: "fablab",
    name: "FabLab",
    icon: Wrench,
    description: "Laboratorio de fabricación digital equipado con impresoras 3D, cortadoras láser, fresadoras CNC y más.",
    image: "https://images.unsplash.com/photo-1694701503673-379c9e0d887e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJsYWIlMjBtYWtlcnNwYWNlJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzcxNDg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Impresoras 3D (FDM y SLA)",
      "Cortadora láser CO2",
      "Fresadora CNC",
      "Estación de soldadura",
      "Herramientas de prototipado",
      "Zona de ensamblaje"
    ],
  },
  {
    id: "estudio_audiovisual",
    name: "Estudio audiovisual",
    icon: Clapperboard,
    description: "Espacios de aprendizaje equipados con tecnología de última generación para clases y talleres.",
    image: "https://images.unsplash.com/photo-1563394867331-e687a36112fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY2xhc3Nyb29tJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzcxNDg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Pantallas interactivas 4K",
      "Equipos informáticos de alto rendimiento",
      "Mobiliario modular",
      "Sistema de sonido premium",
      "Iluminación adaptable",
      "Pizarras digitales"
    ],
  },
  {
    id: "incubadora",
    name: "Incubadora",
    icon: Cpu,
    description: "Zona tranquila para estudio individual y trabajo colaborativo con recursos técnicos actualizados.",
    image: "https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwbGFiJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzcxNDg5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Biblioteca técnica física y digital",
      "Puestos de trabajo individual",
      "Salas de reuniones",
      "WiFi de alta velocidad",
      "Zona silenciosa",
      "Acceso 24/7 para estudiantes"
    ],
  },
  {
    id: "uni",
    name: "Universidad",
    icon: GraduationCap,
    description: "Espacios de descanso y socialización diseñados para fomentar la creatividad y el networking.",
    image: "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNjUyMjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Cafetería con snacks saludables",
      "Zona de gaming y descanso",
      "Terraza exterior",
      "Lounges cómodos",
      "Ping pong y juegos de mesa",
      "Eventos y networking"
    ],
  },
  {
    id: "ofi_desarrollo",
    name: "Oficinas de desarrollo",
    icon: Laptop,
    description: "Espacios privados insonorizados diseñados para el trabajo en equipo y videoconferencias.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjM3MTU1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Pantallas para presentaciones",
      "Sistemas de videoconferencia",
      "Pizarras de vidrio",
      "Paneles acústicos",
      "Climatización independiente",
      "Servicio de catering"
    ],
  },
  {
    id: "360",
    name: "Sala 360",
    icon: Sprout,
    description: "Estudio profesional equipado para la producción de podcasts, vídeos y contenido multimedia.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwc3R1ZGlvfGVufDF8fHx8MTc2MzcxNTUwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Micrófonos Shure SM7B",
      "Interfaz de audio Rodecaster Pro",
      "Iluminación LED profesional",
      "Cámaras 4K",
      "Fondos intercambiables",
      "Software de edición"
    ],
  },
  {
    id: "showrooms",
    name: "Showrooms",
    icon: Sparkles,
    description: "Gran espacio polivalente para eventos, conferencias, presentaciones y hackathons.",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpdG9yaXVtJTIwbW9kZXJufGVufDF8fHx8MTc2MzcxNTUwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Capacidad para 150 personas",
      "Proyector Láser 4K",
      "Sistema de sonido envolvente",
      "Streaming en directo",
      "Cabina de control",
      "Zona de networking anexa"
    ],
  },
];

/* ---------------- COMPONENT ---------------- */

export function Spaces() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const focusRef = useScrollFocusSection("green");

  // Fonctions de navigation (Uniquement pour Desktop)
  const nextSpace = () => {
    setCurrentIndex((prev) => (prev + 1) % spaces.length);
  };

  const prevSpace = () => {
    setCurrentIndex((prev) => (prev - 1 + spaces.length) % spaces.length);
  };

  const currentSpace = spaces[currentIndex];
  
  return (
    <section
      ref={focusRef}
      id="spaces"
      className="py-24 px-4"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER (Commun) */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center px-6 py-2 rounded-full
                          bg-gradient-to-r from-purple-500 to-indigo-500
                          text-white text-xs font-extrabold tracking-widest uppercase
                          shadow-lg shadow-purple-500/30">
              Espacios
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6">
            Instalaciones pensadas para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-500">
              crear sin límites
            </span>
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            Espacios diseñados para inspirar, experimentar y construir.
            Cada rincón impulsa el aprendizaje práctico y la creatividad.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* VUE MOBILE : Scroll Horizontal (lg:hidden) */}
        {/* ========================================================= */}
        <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4">
          {spaces.map((space) => (
            <div 
              key={space.id} 
              className="min-w-[85vw] snap-center bg-card rounded-3xl border border-border overflow-hidden shadow-sm flex flex-col"
            >
              {/* Image Mobile */}
              <div className="h-48 relative">
                <ImageWithFallback
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <space.icon size={20} />
                  <span className="font-bold text-lg">{space.name}</span>
                </div>
              </div>

              {/* Contenu Mobile */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  {space.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Equipamiento</h4>
                  <div className="flex flex-wrap gap-2">
                    {space.features.slice(0, 4).map((f) => ( // On en montre un peu moins sur mobile pour pas faire trop long
                      <span key={f} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground border border-border">
                        {f}
                      </span>
                    ))}
                    {space.features.length > 4 && (
                      <span className="text-xs px-2 py-1 text-muted-foreground">+ más</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* ========================================================= */}
        {/* VUE DESKTOP : Carousel Original (hidden lg:block) */}
        {/* ========================================================= */}
        <div className="hidden lg:block">
          
          {/* Navigation Controls */}
          <motion.div 
            className="flex items-center justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={prevSpace}
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors shadow-sm"
              aria-label="Espacio anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex items-center gap-3 px-8 py-4 rounded-full bg-card border border-border shadow-md min-w-[300px] justify-center">
              <currentSpace.icon className="text-primary" size={24} />
              <span className="text-lg font-bold text-foreground">{currentSpace.name}</span>
            </div>

            <button 
              onClick={nextSpace}
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors shadow-sm"
              aria-label="Siguiente espacio"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>

          {/* Content Display (Desktop) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSpace.id}
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Image */}
              <div className="relative h-[550px] rounded-[2rem] overflow-hidden group shadow-2xl border border-border/50">
                <ImageWithFallback
                  src={currentSpace.image}
                  alt={currentSpace.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center h-full">
                <h3 className="mb-6 text-4xl font-bold text-foreground">{currentSpace.name}</h3>
                <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                  {currentSpace.description}
                </p>

                <div className="space-y-6">
                  <h4 className="text-primary font-bold text-lg border-b border-border pb-3 inline-block">
                    Equipamiento destacado
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {currentSpace.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors shadow-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 shadow-[0_0_10px_rgba(0,255,136,0.5)]" />
                        <span className="text-muted-foreground text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {spaces.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/50'
                }`}
                aria-label={`Ir al espacio ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
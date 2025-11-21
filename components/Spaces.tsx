import React from 'react';
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Cpu, BookOpen, Coffee, Wrench } from "lucide-react";

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
    id: "aulas",
    name: "Aulas Tecnológicas",
    icon: Cpu,
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
    id: "biblioteca",
    name: "Biblioteca & Coworking",
    icon: BookOpen,
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
    id: "comunes",
    name: "Zonas Comunes",
    icon: Coffee,
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
];

export function Spaces() {
  return (
    <section id="spaces" className="min-h-screen py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Solid Badge */}
          <motion.div
            className="inline-block mb-6 px-6 py-2 rounded-full bg-accent shadow-lg shadow-accent/25"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-white font-bold text-sm tracking-wider uppercase">Espacios</span>
          </motion.div>
          
          <h2 className="mb-6 text-4xl md:text-6xl font-black tracking-tight text-foreground">
            Instalaciones de <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-500">
              última generación
            </span>
          </h2>
          
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            Espacios diseñados para inspirar, crear e innovar. 
            Cada rincón está pensado para potenciar tu aprendizaje y creatividad.
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="fablab" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-16 bg-muted border border-border rounded-xl p-1.5 h-auto">
            {spaces.map((space) => (
              <TabsTrigger
                key={space.id}
                value={space.id}
                className="flex items-center justify-center gap-2 py-3 data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-primary dark:data-[state=active]:text-white rounded-lg transition-all shadow-sm"
              >
                <space.icon size={18} />
                <span className="hidden sm:inline font-medium">{space.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {spaces.map((space, index) => (
            <TabsContent key={space.id} value={space.id}>
              <motion.div
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <motion.div
                  className="relative h-[400px] lg:h-[550px] rounded-3xl overflow-hidden group shadow-2xl shadow-black/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Floating Badge on Image */}
                  <motion.div
                    className="absolute bottom-8 left-8 bg-black/70 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10 flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <space.icon className="text-primary" size={24} />
                    <span className="text-white font-semibold">{space.name}</span>
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h3 className="mb-6 text-3xl font-bold text-foreground">{space.name}</h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {space.description}
                  </p>

                  <div className="space-y-6">
                    <h4 className="text-primary font-semibold text-lg border-b border-border pb-2 inline-block">Equipamiento y servicios</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {space.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors shadow-sm"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-sm font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    className="mt-10 group px-8 py-4 bg-transparent border-2 border-primary rounded-full overflow-hidden relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 text-primary group-hover:text-white transition-colors font-bold tracking-wide">
                      Reservar visita virtual 360°
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
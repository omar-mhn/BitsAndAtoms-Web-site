import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Twitter, Globe, Award, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const mentors = [
  {
    name: "Marc Segarra",
    role: "Creatividad",
    company: "",
    image: "/Mentores/Marc_Segarra.png",
    bio: "Explora y expande los límites de tu imaginación, convirtiendo ideas innovadoras en realidades impactantes.",
    specialties: [],
    social: { linkedin: "#", twitter: "#", website: "#" }
  },
  {
    name: "Jordi Palou",
    role: "IoT",
    company: "",
    image:"/Mentores/Jordi_Palou.jpg",
    bio: "Integra el mundo físico con el digital creando soluciones inteligentes a través del Internet de las Cosas.",
    specialties: [],
    social: { linkedin: "#", twitter: "#", website: "#" }
  },

  {
    name: "Carlas Mayans",
    role: "Marketing 3.0",
    company: "",
    image: "/Mentores/Carles_Mayans.jpg",
    bio: "Aprende a conectar con tus clientes a un nivel emocional y ético, utilizando las estrategias avanzadas del marketing 3.0.",
    specialties: [],
    social: { linkedin: "#", twitter: "#", website: "#" }
  },
  {
    name: "Daniel Vidal",
    role: "Propiedad intelectual",
    company: "",
    image:"/Mentores/Daniel_Vidal.png",
    bio: "Protege y maximiza el valor de tus innovaciones y creaciones con una sólida estrategia de propiedad intelectual.",
    specialties: [],
    social: { linkedin: "#", twitter: "#", website: "#" }
  },
  {
    name: "Juan Antonio Dominguez",
    role: "Producción Audiovisual",
    company: "",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM3MTUyMDB8MA&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Da vida a tus ideas con excelencia técnica y creatividad, dominando cada etapa de la producción y postproducción audiovisual.",
    specialties: [],
    social: { linkedin: "#", twitter: "#", website: "#" }
  },
  {
    name: "Skain",
    role: "Producción y Streaming",
    company: "",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM3MTQ5MDB8MA&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Descubre cómo transformar historias en experiencias visuales cautivadoras a través del arte del streaming.",
    specialties: [],
    social: { linkedin: "#", twitter: "#", website: "#" }
  },
  {
    name: "Iván Rodríguez",
    role: "Web 3.0",
    company: "",
    image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7e89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxYJTIwZ2VuZXJhdGlvbiUyMHdvbWFufGVufDF8fHx8MTc2MzcxNTMwMHww&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Da vida a tus ideas con excelencia técnica y creatividad, dominando cada etapa de la producción y postproducción audiovisual.",
    specialties: [],
    social: { linkedin: "#", twitter: "#", website: "#" }
  },
  {
    name: "Juan Carlos Expósito",
    role: "Ecommerce",
    company: "",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMHRlY2h8ZW58MXx8fHwxNzYzNzE1NDAwfDA&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Revoluciona el comercio electrónico con estrategias disruptivas que potencian el crecimiento y la satisfacción del cliente.",
    specialties: [],
    social: { linkedin: "#", twitter: "#", website: "#" }
  },
  {
    name: "Carlos Silva",
    role: "Entrepreneurship",
    company: "",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMHRlY2h8ZW58MXx8fHwxNzYzNzE1NDAwfDA&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Revoluciona el comercio electrónico con estrategias disruptivas que potencian el crecimiento y la satisfacción del cliente.",
    specialties: [],
    social: { linkedin: "#", twitter: "#", website: "#" }
  }
];

export function Mentors() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Safety check to ensure we don't stay out of bounds when resizing
  useEffect(() => {
    const maxIndex = Math.max(0, mentors.length - itemsPerPage);
    if (startIndex > maxIndex) {
      setStartIndex(maxIndex);
    }
  }, [itemsPerPage, startIndex]);

  const nextSlide = () => {
    // If we are at the end (showing the last possible group), go back to 0
    if (startIndex >= mentors.length - itemsPerPage) {
      setStartIndex(0);
    } else {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex === 0) {
      // Go to the last possible start index
      setStartIndex(mentors.length - itemsPerPage);
    } else {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <section id="mentors" className="min-h-screen pt-12 pb-24 px-4 bg-background">
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

        {/* Carousel Container */}
        <div className="relative">
          {/* Controls - Left Arrow */}
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-background border border-border shadow-lg hover:bg-primary hover:text-white hover:border-primary transition-all text-foreground"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          {/* Controls - Right Arrow */}
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20">
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-background border border-border shadow-lg hover:bg-primary hover:text-white hover:border-primary transition-all text-foreground"
              aria-label="Siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Slider Track */}
          <div className="overflow-hidden py-10 -my-10 px-2">
            <motion.div 
              className="flex"
              // Correct logic: Translate percentage relative to total items
              animate={{ x: `-${startIndex * (100 / mentors.length)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ width: `${(mentors.length / itemsPerPage) * 100}%` }}
            >
              {mentors.map((mentor) => (
                <div 
                  key={mentor.name}
                  className="px-3"
                  style={{ width: `${100 / mentors.length}%` }}
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
                        {mentor.company && (
                            <div className="text-xs font-semibold text-primary/80 mt-1 uppercase tracking-wide">
                            {mentor.company}
                            </div>
                        )}
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                        {mentor.bio}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Footer Info / Progress */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex gap-2">
            {/* Indicators showing progress based on valid start positions */}
            {Array.from({ length: Math.max(1, mentors.length - itemsPerPage + 1) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === startIndex ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/50'
                }`}
                aria-label={`Ir a diapositiva ${idx + 1}`}
              />
            ))}
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-muted-foreground text-sm font-medium">
            <Award size={16} className="text-primary" />
            <span>Todos nuestros mentores están certificados y activos en la industria</span>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { motion } from "framer-motion";
import { GraduationCap, Target, Users, Trophy } from "lucide-react";
import { Card } from "./ui/card";

const programs = [
  {
    title: "Learning by Doing",
    description: "Aprende tecnología construyéndola desde el primer día. Aquí exploras, experimentas y conviertes cada concepto en algo tangible que te impulsa a avanzar.",
    color: "primary",
  },
  {
    title: "Proyectos reales",
    description: "Resolverás retos auténticos que exigen creatividad y criterio, aplicando IA, IoT y métodos actuales para crear soluciones con impacto inmediato.",
    color: "accent",
  },
  {
    title: "Mentores",
    description: "Profesionales en activo te acompañarán, guiando tus decisiones, retándote a mejorar y ayudándote a transformar cada proyecto en aprendizaje real.",
    color: "secondary",
  },
  {
    title: "Colaboración",
    description: "Trabajarás en equipos multidisciplinares donde las ideas se combinan, se debaten y crecen hasta convertirse en innovación compartida.",
    color: "primary",
  },
];

export function Training() {
  return (
    <section id="training" className="min-h-screen py-24 px-4 bg-background">
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
            className="inline-block mb-6 px-6 py-2 rounded-full bg-secondary shadow-lg shadow-secondary/25"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-white font-bold text-sm tracking-wider uppercase">Formación</span>
          </motion.div>
          
          <h2 className="mb-6 text-4xl md:text-6xl font-black tracking-tight text-foreground">
            Programas diseñados <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
              para el futuro
            </span>
          </h2>
          
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            Aprende con metodologías innovadoras y proyectos reales. 
            Nuestros programas están diseñados para prepararte para los desafíos del mundo tech.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Card updated to use theme vars */}
              <Card className="group relative p-8 h-full bg-card border-border hover:border-primary/50 transition-all duration-500 overflow-hidden rounded-3xl shadow-sm hover:shadow-xl">
                {/* Top Border Gradient */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  program.color === 'primary' ? 'from-blue-500 to-indigo-500' :
                  program.color === 'secondary' ? 'from-cyan-500 to-blue-500' :
                  'from-purple-500 to-pink-500'
                }`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{program.title}</h3>
                      <div className="flex gap-2">
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed flex-grow">
                    {program.description}
                  </p>

                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

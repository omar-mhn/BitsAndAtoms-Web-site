import React from 'react';
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Lightbulb, Users, Rocket, Code } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Creatividad",
    description: "Fomentamos el pensamiento creativo y la innovación en cada proyecto",
  },
  {
    icon: Code,
    title: "Tecnología",
    description: "Herramientas de última generación para crear el futuro",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Aprendizaje colaborativo y trabajo en equipo",
  },
  {
    icon: Rocket,
    title: "Innovación",
    description: "Exploramos nuevas formas de aprender y enseñar",
  },
];

export function About() {
  return (
    <section id="about" className="min-h-screen py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge Sólido para más peso */}
          <motion.div
            className="inline-block mb-6 px-6 py-2 rounded-full bg-primary shadow-lg shadow-primary/25"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-white font-bold text-sm tracking-wider uppercase">Quiénes somos</span>
          </motion.div>
          
          <h2 className="mb-6 text-4xl md:text-6xl font-black tracking-tight text-foreground">
            Educación práctica, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
              creatividad e innovación
            </span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            En Bits and Atoms creemos en una educación centrada en proyectos reales, 
            donde la tecnología y la creatividad se unen para formar a los innovadores del futuro.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden group shadow-2xl shadow-primary/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNjUyMjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bits and Atoms Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay for text readability on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-xl px-6 py-4 rounded-2xl border border-border shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-foreground font-bold">Educación del futuro</p>
                <p className="text-muted-foreground text-sm">FabLab & Code</p>
              </motion.div>
            </div>

            {/* Back Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-3xl -z-10 opacity-60" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-3xl font-bold text-foreground">
              Un espacio donde la <span className="text-primary">tecnología</span> cobra vida
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Somos un centro de innovación y aprendizaje tecnológico donde estudiantes y profesionales 
                trabajan juntos en proyectos reales que impulsan el cambio.
              </p>
              <p>
                Nuestro FabLab está equipado con tecnología de fabricación digital de última generación, 
                permitiendo que las ideas se conviertan en realidad.
              </p>
              <p>
                Aquí, cada estudiante es un creador, cada proyecto es una oportunidad de innovar y 
                cada día es una nueva aventura en el mundo de la tecnología.
              </p>
            </div>

            <motion.button
              className="group mt-8 self-start px-8 py-4 bg-transparent border-2 border-primary rounded-full overflow-hidden relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 text-primary group-hover:text-white transition-colors font-bold">
                Ver nuestros proyectos
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group relative p-8 rounded-3xl border border-border bg-card hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <value.icon size={28} />
              </div>
              <h4 className="mb-3 text-xl font-bold text-foreground">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
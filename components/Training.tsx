import React from 'react';
import { motion } from "framer-motion";
import { GraduationCap, Target, Users, Trophy } from "lucide-react";
import { Card } from "./ui/card";

const programs = [
  {
    title: "Desarrollo Web Full-Stack",
    duration: "6 meses",
    level: "Intermedio",
    description: "Aprende a crear aplicaciones web completas desde cero utilizando las tecnologías más demandadas del mercado.",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
    color: "primary",
  },
  {
    title: "Inteligencia Artificial & Machine Learning",
    duration: "8 meses",
    level: "Avanzado",
    description: "Domina los fundamentos de IA y ML, desde algoritmos básicos hasta redes neuronales profundas.",
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
    color: "accent",
  },
  {
    title: "Diseño UX/UI & Producto Digital",
    duration: "4 meses",
    level: "Inicial",
    description: "Crea experiencias digitales memorables combinando diseño, investigación de usuarios y prototipado.",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    color: "secondary",
  },
  {
    title: "Fabricación Digital & IoT",
    duration: "5 meses",
    level: "Intermedio",
    description: "Explora el mundo del hardware, impresión 3D, Arduino y dispositivos IoT en nuestro FabLab.",
    technologies: ["Arduino", "Raspberry Pi", "3D Printing", "CAD"],
    color: "primary",
  },
];

const methodology = [
  {
    icon: Target,
    title: "Proyectos Reales",
    description: "Trabaja en proyectos del mundo real con clientes reales",
  },
  {
    icon: Users,
    title: "Mentorías",
    description: "Acompañamiento personalizado de expertos en la industria",
  },
  {
    icon: GraduationCap,
    title: "Aprendizaje Práctico",
    description: "80% práctica, 20% teoría - aprende haciendo",
  },
  {
    icon: Trophy,
    title: "Certificación",
    description: "Certificado reconocido por la industria tech",
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
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                          {program.duration}
                        </span>
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                          {program.level}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed flex-grow">
                    {program.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {program.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                          program.color === 'primary' ? 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-300' :
                          program.color === 'secondary' ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-300' :
                          'border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-300'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    className={`w-full py-3 rounded-xl border-2 transition-all font-bold text-sm tracking-wide uppercase ${
                      program.color === 'primary' ? 'border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white' :
                      program.color === 'secondary' ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white' :
                      'border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Más información
                  </motion.button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h3 className="mb-4 text-3xl font-bold text-foreground">Nuestra metodología</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Aprendizaje basado en proyectos con mentorías personalizadas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((item, index) => (
              <motion.div
                key={item.title}
                className="group text-center p-8 rounded-3xl border border-border bg-card hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all mb-6"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <item.icon size={32} />
                </motion.div>
                <h4 className="mb-3 text-lg font-bold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
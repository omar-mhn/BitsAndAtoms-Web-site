import React from 'react';
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Users, Code } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const projects = [
  {
    title: "Sistema de Monitoreo Ambiental IoT",
    description: "Red de sensores distribuidos para monitorear calidad del aire, temperatura y humedad en tiempo real",
    team: ["Ana García", "Carlos Ruiz", "María Torres"],
    technologies: ["Arduino", "React", "Node.js", "MQTT", "MongoDB"],
    image: "https://images.unsplash.com/photo-1725923727790-15ec49fa4d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwcHJvamVjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNzE0OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "IoT",
  },
  {
    title: "Plataforma de Educación Adaptativa con IA",
    description: "Sistema de aprendizaje personalizado que se adapta al ritmo y estilo de cada estudiante",
    team: ["Pedro López", "Laura Martín"],
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1563394867331-e687a36112fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY2xhc3Nyb29tJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzcxNDg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "IA",
  },
  {
    title: "Prótesis Biónica de Bajo Coste",
    description: "Diseño e impresión 3D de prótesis de mano funcionales y asequibles",
    team: ["Javier Sánchez", "Isabel Fernández", "David Gómez"],
    technologies: ["CAD", "3D Printing", "Arduino", "Electrónica"],
    image: "https://images.unsplash.com/photo-1694701503673-379c9e0d887e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJsYWIlMjBtYWtlcnNwYWNlJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzcxNDg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Hardware",
  },
  {
    title: "App de Realidad Aumentada para Museos",
    description: "Experiencia inmersiva que combina arte físico con contenido digital interactivo",
    team: ["Sofía Ramírez", "Miguel Ortiz"],
    technologies: ["Unity", "AR Foundation", "C#", "Firebase"],
    image: "https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwbGFiJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzcxNDg5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "AR/VR",
  },
  {
    title: "Blockchain para Trazabilidad Alimentaria",
    description: "Sistema distribuido para rastrear el origen y recorrido de productos alimentarios",
    team: ["Roberto Díaz", "Carmen Vega", "Pablo Castro"],
    technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
    image: "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNjUyMjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Blockchain",
  },
  {
    title: "Robot Autónomo de Limpieza Solar",
    description: "Robot capaz de limpiar paneles solares de forma autónoma y eficiente",
    team: ["Elena Morales", "Alberto Jiménez"],
    technologies: ["ROS", "Python", "Computer Vision", "Mecatrónica"],
    image: "https://images.unsplash.com/photo-1627667050609-d4ba6483a368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwcmVjb3JkaW5nJTIwc3R1ZGlvfGVufDF8fHx8MTc2MzcxNDc1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Robótica",
  },
];

const categories = ["Todos", "IoT", "IA", "Hardware", "AR/VR", "Blockchain", "Robótica"];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 px-4 bg-background">
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
            className="inline-block mb-6 px-6 py-2 rounded-full bg-accent shadow-lg shadow-accent/25"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-white font-bold text-sm tracking-wider uppercase">Proyectos</span>
          </motion.div>
          
          <h2 className="mb-6 text-4xl md:text-6xl font-black tracking-tight text-foreground">
            Innovación <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500">
              en acción
            </span>
          </h2>
          
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            Descubre los proyectos desarrollados por nuestros estudiantes y equipos. 
            De la idea al prototipo funcional.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className="px-5 py-2.5 rounded-full bg-card border border-border hover:border-primary/50 hover:text-primary transition-all text-muted-foreground font-bold text-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative h-full overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 rounded-3xl shadow-sm hover:shadow-xl">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Category badge */}
                  <Badge className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border-none text-white px-3 py-1">
                    {project.category}
                  </Badge>

                  {/* View project button overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.button
                      className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span>Ver proyecto</span>
                      <ExternalLink size={16} />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h4 className="mb-4 text-foreground line-clamp-2 text-xl font-bold">
                    {project.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  {/* Team */}
                  <div className="flex items-center gap-3 mb-6 text-sm text-muted-foreground">
                    <Users size={16} />
                    <span className="line-clamp-1">{project.team.join(", ")}</span>
                  </div>

                  {/* Technologies */}
                  <div className="flex items-start gap-3">
                    <Code size={16} className="text-primary mt-1 flex-shrink-0" />
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border font-bold">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group px-10 py-5 bg-transparent border-2 border-foreground rounded-full overflow-hidden relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-foreground"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 text-foreground group-hover:text-background transition-colors font-black tracking-wide uppercase">
              ¿Tienes una idea? Empieza tu proyecto
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

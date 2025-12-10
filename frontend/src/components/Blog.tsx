import React from 'react';
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Badge } from "./ui/badge";

const blogPosts = [
  {
    title: "Visita histórica de Steve Wozniak a Bits and Atoms",
    excerpt: "El cofundador de Apple visitó nuestras instalaciones y compartió su visión sobre el futuro de la educación tecnológica",
    author: "Equipo B&A",
    date: "18 Nov 2025",
    readTime: "5 min",
    category: "Eventos",
    image: "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNjUyMjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true,
  },
  {
    title: "Inicio del nuevo curso académico 2025",
    excerpt: "Damos la bienvenida a más de 200 nuevos estudiantes que comienzan su viaje en el mundo tech",
    author: "María López",
    date: "10 Nov 2025",
    readTime: "3 min",
    category: "Educación",
    image: "https://images.unsplash.com/photo-1563394867331-e687a36112fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY2xhc3Nyb29tJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzcxNDg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
  },
  {
    title: "Casos de éxito del FabLab: De la idea al prototipo",
    excerpt: "Descubre cómo nuestros estudiantes han transformado sus ideas en productos reales utilizando nuestro laboratorio",
    author: "Carlos Martínez",
    date: "5 Nov 2025",
    readTime: "7 min",
    category: "Proyectos",
    image: "https://images.unsplash.com/photo-1694701503673-379c9e0d887e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJsYWIlMjBtYWtlcnNwYWNlJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzcxNDg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
  },
  {
    title: "Colaboración con Admira en cartelería digital interactiva",
    excerpt: "Partnership estratégico para desarrollar soluciones de señalización digital de próxima generación",
    author: "Ana García",
    date: "1 Nov 2025",
    readTime: "6 min",
    category: "Colaboraciones",
    image: "https://images.unsplash.com/photo-1725923727790-15ec49fa4d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwcHJvamVjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNzE0OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
  },
  {
    title: "Tendencias tecnológicas 2025: Lo que viene",
    excerpt: "Análisis de las tecnologías emergentes que marcarán el futuro próximo",
    author: "Equipo B&A",
    date: "28 Oct 2025",
    readTime: "8 min",
    category: "Tecnología",
    image: "https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwbGFiJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzcxNDg5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
  },
  {
    title: "Hackathon Bits & Atoms 2025: Récord de participación",
    excerpt: "Más de 300 participantes, 48 horas de creatividad y soluciones innovadoras",
    author: "Pedro Sánchez",
    date: "20 Oct 2025",
    readTime: "4 min",
    category: "Eventos",
    image: "https://images.unsplash.com/photo-1627667050609-d4ba6483a368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwcmVjb3JkaW5nJTIwc3R1ZGlvfGVufDF8fHx8MTc2MzcxNDc1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
  },
];

export function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="min-h-screen py-24 px-4 bg-background">
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
            <span className="text-white font-bold text-sm tracking-wider uppercase">Blog & Noticias</span>
          </motion.div>
          
          <h2 className="mb-6 text-4xl md:text-6xl font-black tracking-tight text-foreground">
            Últimas novedades <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
              y artículos
            </span>
          </h2>
          
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl font-medium">
            Mantente al día con las últimas noticias, eventos y tendencias del mundo tech
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[600px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-2xl border border-border">
              <ImageWithFallback
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              
              {/* Content overlay (Dark bg -> white text) */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-16">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge className="bg-primary text-white border-none px-3 py-1 uppercase font-bold">
                    Destacado
                  </Badge>
                  <Badge variant="outline" className="border-white/30 text-gray-200 px-3 py-1 bg-black/20 backdrop-blur-sm">
                    {featuredPost.category}
                  </Badge>
                </div>
                
                <h2 className="text-white mb-6 max-w-4xl text-3xl lg:text-5xl font-bold leading-tight">
                  {featuredPost.title}
                </h2>
                
                <p className="text-gray-200 mb-8 max-w-2xl text-lg lg:text-xl font-medium">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-300 text-sm font-bold">
                  <div className="flex items-center gap-2">
                    <User size={18} />
                    <span>{featuredPost.author}</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <motion.button
                  className="group self-start flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold tracking-wide hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05, gap: "12px" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>LEER ARTÍCULO</span>
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.title}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-secondary transition-all duration-300 cursor-pointer flex flex-col h-full shadow-sm hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Category badge */}
                <Badge className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border-none text-white">
                  {post.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="mb-4 line-clamp-2 group-hover:text-secondary transition-colors font-bold text-xl text-foreground">
                  {post.title}
                </h4>
                
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow leading-relaxed font-medium">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground font-bold mt-auto uppercase tracking-wide">
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-6 pt-6 border-t border-border">
                  <Calendar size={14} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground font-bold">{post.date}</span>
                  <motion.div
                    className="ml-auto text-secondary opacity-0 group-hover:opacity-100"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load more */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-10 py-4 rounded-full border-2 border-muted-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-colors font-bold tracking-wide uppercase text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver todos los artículos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

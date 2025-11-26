import React from 'react';
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, Youtube, Music, Radio, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import podcastImg from "../public/img/podcast_1.jpeg";

const featuredEpisodes = [
  {
    title: "El futuro de la Inteligencia Artificial",
    guest: "Mateo, Omar & Iván",
    duration: "45:30",
    date: "15 Nov 2025",
    category: "Tecnología",
    description: "Exploramos las opiones de nuestros alumnos en IA y su impacto en el trabajo",
    thumbnail: podcastImg,
  },
  {
    title: "Emprendimiento Tech en 2025",
    guest: "Carlos Martínez",
    duration: "52:15",
    date: "8 Nov 2025",
    category: "Emprendimiento",
    description: "Consejos y estrategias para lanzar tu startup tecnológica",
    thumbnail: "https://images.unsplash.com/photo-1725923727790-15ec49fa4d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwcHJvamVjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNzE0OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Educación del Futuro",
    guest: "Prof. María López",
    duration: "38:45",
    date: "1 Nov 2025",
    category: "Educación",
    description: "Cómo la tecnología está transformando la forma de aprender",
    thumbnail: "https://images.unsplash.com/photo-1563394867331-e687a36112fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY2xhc3Nyb29tJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzcxNDg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const categories = ["Todos", "Educación", "Tecnología", "Emprendimiento"];

const platforms = [
  { name: "YouTube", icon: Youtube, color: "text-red-500" },
  { name: "Spotify", icon: Music, color: "text-green-500" },
];

export function Podcast() {
  return (
    <section id="podcast" className="min-h-screen py-24 px-4 bg-background">
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
            <span className="text-white font-bold text-sm tracking-wider uppercase">Podcast</span>
          </motion.div>
          
          <h2 className="mb-6 text-4xl md:text-6xl font-black tracking-tight text-foreground">
            Bits & Atoms Podcast
          </h2>
          
          <p className="text-muted-foreground max-w-3xl mx-auto mb-10 text-lg md:text-xl leading-relaxed font-medium">
            Conversaciones con líderes de la industria tech sobre innovación, educación y el futuro de la tecnología
          </p>

          {/* Platforms */}
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <motion.button
                key={platform.name}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/5 transition-colors shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <platform.icon className={platform.color} size={20} />
                <span className="text-foreground font-medium">{platform.name}</span>
                <ExternalLink size={14} className="text-muted-foreground ml-1" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Episode */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-[500px] rounded-[2rem] overflow-hidden group shadow-2xl shadow-primary/10 border border-border">
            <ImageWithFallback
              src={featuredEpisodes[0].thumbnail}
              alt={featuredEpisodes[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            
            {/* Content Overlay (Always dark bg, so text stays white) */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
              <Badge className="self-start mb-4 bg-accent hover:bg-accent/90 text-white px-4 py-1 text-xs font-bold uppercase tracking-wider border-none">
                Episodio destacado
              </Badge>
              <h3 className="text-white mb-4 max-w-2xl text-3xl lg:text-5xl font-bold leading-tight">
                {featuredEpisodes[0].title}
              </h3>
              <p className="text-gray-200 mb-8 max-w-xl text-lg font-medium">
                {featuredEpisodes[0].description}
              </p>
              <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-300 font-semibold">
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Con {featuredEpisodes[0].guest}</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> {featuredEpisodes[0].duration}</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> {featuredEpisodes[0].date}</span>
              </div>
              <motion.button
                className="group self-start flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold tracking-wide hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={20} fill="currentColor" />
                <span>ESCUCHAR AHORA</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <Tabs defaultValue="Todos" className="w-full">
          <TabsList className="inline-flex gap-3 mb-12 bg-transparent border-none p-0 flex-wrap justify-center w-full">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="px-6 py-2.5 rounded-full bg-muted border border-border text-muted-foreground data-[state=active]:bg-accent data-[state=active]:text-white data-[state=active]:border-accent font-medium transition-all"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredEpisodes.map((episode, index) => (
                  <motion.div
                    key={episode.title}
                    className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-accent transition-all duration-300 shadow-sm hover:shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    {/* Thumbnail */}
                    <div className="relative h-56 overflow-hidden">
                      <ImageWithFallback
                        src={episode.thumbnail}
                        alt={episode.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Play button overlay */}
                      <motion.div
                        className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                          <Play size={24} fill="black" className="text-black ml-1" />
                        </div>
                      </motion.div>

                      {/* Category badge */}
                      <Badge className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border-none text-white hover:bg-black/80">
                        {episode.category}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h4 className="mb-3 text-foreground line-clamp-2 font-bold text-lg group-hover:text-accent transition-colors">
                        {episode.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed">
                        {episode.description}
                      </p>
                      <div className="flex items-center justify-between text-xs font-bold text-muted-foreground uppercase tracking-wide border-t border-border pt-4">
                        <span>{episode.guest}</span>
                        <span>{episode.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Load more */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-3 rounded-full border-2 border-muted-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-colors font-bold tracking-wide uppercase text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver todos los episodios
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
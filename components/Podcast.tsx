import React from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, Youtube, Music, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

// ------------------------------
// DATA
// ------------------------------
const featuredEpisodes = [
  {
    title: "El futuro de la Inteligencia Artificial",
    guest: "Mateo, Omar & Iván",
    duration: "45:30",
    date: "15 Nov 2025",
    category: "Tecnología",
    description:
      "Exploramos las opiniones de nuestros alumnos en IA y su impacto en el trabajo",
    thumbnail: "/img/podcast_1.jpeg",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Emprendimiento Tech en 2025",
    guest: "Carlos Martínez",
    duration: "52:15",
    date: "8 Nov 2025",
    category: "Emprendimiento",
    description: "Consejos y estrategias para lanzar tu startup tecnológica",
    thumbnail:
      "https://images.unsplash.com/photo-1725923727790-15ec49fa4d15?fit=max&q=80&w=1080",
    youtubeUrl: "https://www.youtube.com/embed/OziJJFJNPYU",
  },
  {
    title: "Educación del Futuro",
    guest: "Prof. María López",
    duration: "38:45",
    date: "1 Nov 2025",
    category: "Educación",
    description:
      "Cómo la tecnología está transformando la forma de aprender",
    thumbnail:
      "https://images.unsplash.com/photo-1563394867331-e687a36112fd?fit=max&q=80&w=1080",
    youtubeUrl: "https://www.youtube.com/embed/Tt8Xa9TRfds",
  },
];

const categories = ["Todos", "Educación", "Tecnología", "Emprendimiento"];

// ------------------------------
// COMPONENTE
// ------------------------------
export function Podcast() {
  const [selectedEpisode, setSelectedEpisode] =
    React.useState<null | (typeof featuredEpisodes)[0]>(null);

  const [showAllEpisodes, setShowAllEpisodes] = React.useState(false);

  const platforms = [
    { name: "YouTube", icon: Youtube, color: "text-red-500" },
    { name: "Spotify", icon: Music, color: "text-green-500" },
  ];

  return (
    <section id="podcast" className="min-h-screen py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
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
            <span className="text-white font-bold text-sm uppercase tracking-wider">
              Podcast
            </span>
          </motion.div>

          <h2 className="mb-6 text-4xl md:text-6xl font-black tracking-tight text-foreground">
            Bits & Atoms Podcast
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto mb-10 text-lg md:text-xl font-medium leading-relaxed">
            Conversaciones con líderes de la industria tech sobre innovación, educación y el futuro.
          </p>

          {/* Plataformas */}
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

        {/* ------------------------------ */}
        {/* FEATURED EPISODE */}
        {/* ------------------------------ */}

        <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border border-border">

          {/* Si NO hay seleccionado → mostrar imagen */}
          {!selectedEpisode ? (
            <>
              <ImageWithFallback
                src={featuredEpisodes[0].thumbnail}
                alt={featuredEpisodes[0].title}
                className="w-full h-full object-cover"
              />

              {/* Overlay para legibilidad */}
              <div className="absolute inset-0 bg-black/70"></div>

              {/* Texto */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                <Badge className="self-start mb-4 bg-accent text-white">
                  Episodio destacado
                </Badge>

                <h3 className="text-white text-3xl lg:text-5xl font-bold max-w-2xl mb-4">
                  {featuredEpisodes[0].title}
                </h3>

                <p className="text-gray-200 text-lg max-w-xl mb-8">
                  {featuredEpisodes[0].description}
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Si hay seleccionado → mostrar VIDEO */}
              <iframe
                src={`${selectedEpisode.youtubeUrl}?controls=1&rel=0&modestbranding=1`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </>
          )}
        </div>

        {/* MARGEN ABAJO */}
        <div className="h-16"></div>

        {/* ------------------------------ */}
        {/* CATEGORY TABS */}
        {/* ------------------------------ */}

        <Tabs defaultValue="Todos" className="w-full">
          <TabsList className="inline-flex gap-3 mb-12 bg-transparent border-none p-0 flex-wrap justify-center w-full">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="px-6 py-2.5 rounded-full bg-muted border border-border text-muted-foreground 
                data-[state=active]:bg-accent data-[state=active]:text-white data-[state=active]:border-accent font-medium"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredEpisodes
                  .filter((ep) => category === "Todos" || ep.category === category)
                  .map((episode, index) => (
                    <motion.div
                      key={episode.title}
                      onClick={() => setSelectedEpisode(episode)}
                      className="cursor-pointer group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-accent shadow-sm hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                    >
                      <div className="relative h-56 overflow-hidden">
                        <ImageWithFallback
                          src={episode.thumbnail}
                          alt={episode.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        <motion.div
                          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <Play size={24} className="text-black ml-1" fill="black" />
                          </div>
                        </motion.div>

                        <Badge className="absolute top-4 right-4 bg-black/60 text-white border-none backdrop-blur-md">
                          {episode.category}
                        </Badge>
                      </div>

                      <div className="p-8">
                        <h4 className="font-bold text-lg mb-3 text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                          {episode.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                          {episode.description}
                        </p>
                        <div className="flex justify-between text-xs font-bold text-muted-foreground uppercase border-t border-border pt-4">
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

        {/* ------------------------------ */}
        {/* VER TODOS LOS EPISODIOS */}
        {/* ------------------------------ */}

        <div className="text-center mt-16">
          <motion.button
            onClick={() => setShowAllEpisodes(true)}
            className="px-8 py-3 rounded-full border-2 border-muted-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-colors font-bold tracking-wide uppercase text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver todos los episodios
          </motion.button>
        </div>

      </div>

      {/* ------------------------------ */}
      {/* FULLSCREEN PANEL */}
      {/* ------------------------------ */}
      {showAllEpisodes && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl overflow-y-auto p-8"
        >
          {/* Cerrar */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setShowAllEpisodes(false)}
              className="px-4 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Cerrar ✕
            </button>
          </div>

          {/* Título */}
          <h2 className="text-white text-4xl font-bold mb-10 text-center">
            Todos los episodios
          </h2>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEpisodes.map((episode, index) => (
              <motion.div
                key={episode.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => window.open(episode.youtubeUrl, "_blank")}
                className="cursor-pointer group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-accent shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={episode.thumbnail}
                    alt={episode.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <motion.div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play size={24} className="text-black ml-1" fill="black" />
                    </div>
                  </motion.div>
                </div>

                <div className="p-8">
                  <h4 className="font-bold text-lg mb-3 text-foreground line-clamp-2">
                    {episode.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                    {episode.description}
                  </p>
                  <div className="flex justify-between text-xs font-bold text-muted-foreground uppercase border-t border-border pt-4">
                    <span>{episode.guest}</span>
                    <span>{episode.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}

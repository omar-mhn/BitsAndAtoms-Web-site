import React from 'react';
import { motion } from "framer-motion";
import { Check, X, Download, Palette, Type, Image } from "lucide-react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

// Actualización de los colores de marca
const brandColors = [
  { name: "Índigo Primario", hex: "#6366f1", rgb: "99, 102, 241", usage: "Botones principales, CTAs, highlights" },
  { name: "Azul Real", hex: "#3b82f6", rgb: "59, 130, 246", usage: "Enlaces, degradados secundarios" },
  { name: "Lila Acento", hex: "#8b5cf6", rgb: "139, 92, 246", usage: "Detalles especiales, badges, glow" },
  { name: "Negro Profundo", hex: "#0a0a0a", rgb: "10, 10, 10", usage: "Fondo principal (Dark Mode)" },
  { name: "Gris Carbono", hex: "#171717", rgb: "23, 23, 23", usage: "Tarjetas (Dark Mode)" },
  { name: "Blanco Puro", hex: "#ffffff", rgb: "255, 255, 255", usage: "Fondo principal (Light Mode)" },
];

const typography = [
  { name: "Títulos", font: "Inter", weight: "800 (Extra Bold)", size: "36px - 72px" },
  { name: "Subtítulos", font: "Inter", weight: "600 (Semi Bold)", size: "24px - 30px" },
  { name: "Cuerpo", font: "Inter", weight: "400 (Regular)", size: "16px - 18px" },
  { name: "Botones", font: "Inter", weight: "500 (Medium)", size: "14px - 16px" },
];

const usageExamples = {
  correct: [
    "Usar el logo sobre fondos oscuros (#0a0a0a) o blancos puros",
    "Mantener espacio de respiro alrededor del logo",
    "Usar colores de acento (lila/azul) para CTAs y elementos interactivos",
    "Combinar grises con un solo color de acento por sección",
  ],
  incorrect: [
    "Distorsionar o rotar el logo",
    "Usar el logo sobre fondos de colores saturados",
    "Mezclar más de dos colores de acento en un mismo elemento",
    "Modificar las proporciones del logo",
  ],
};

const applications = [
  { name: "Presentaciones", icon: Image },
  { name: "Merchandising", icon: Palette },
  { name: "Cartelería", icon: Type },
  { name: "Redes Sociales", icon: Image },
];

export function Branding() {
  return (
    <section id="branding" className="min-h-screen py-24 px-4 bg-background">
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
            <span className="text-white font-bold text-sm tracking-wider uppercase">Branding</span>
          </motion.div>
          
          <h2 className="mb-6 text-4xl md:text-6xl font-black tracking-tight text-foreground">
            Nuestra identidad <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
              visual
            </span>
          </h2>
          
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            Guía completa de uso de la marca Bits and Atoms. 
            Descarga nuestros recursos y conoce cómo aplicar correctamente nuestra identidad.
          </p>
        </motion.div>

        <Tabs defaultValue="logo" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-16 bg-muted border border-border rounded-xl p-1.5 h-auto">
            <TabsTrigger value="logo" className="py-3 rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground font-bold">
              Logo
            </TabsTrigger>
            <TabsTrigger value="colors" className="py-3 rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground font-bold">
              Paleta
            </TabsTrigger>
            <TabsTrigger value="typography" className="py-3 rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground font-bold">
              Tipografía
            </TabsTrigger>
            <TabsTrigger value="applications" className="py-3 rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground font-bold">
              Aplicaciones
            </TabsTrigger>
          </TabsList>

          {/* Logo Tab */}
          <TabsContent value="logo">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Logo showcase */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="p-16 bg-[#0a0a0a] border-border flex items-center justify-center min-h-[400px] rounded-3xl shadow-xl">
                  <div className="text-center">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6"
                      style={{ fontSize: "clamp(3rem, 8vw, 5rem)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.04em" }}
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      BITS & ATOMS
                    </motion.div>
                    <p className="text-gray-500 uppercase tracking-widest text-sm font-bold">Logo principal dark mode</p>
                  </div>
                </Card>

                <Card className="p-16 bg-[#ffffff] border border-gray-200 flex items-center justify-center min-h-[300px] rounded-3xl shadow-xl">
                  <div className="text-center">
                    <div 
                      className="text-[#0a0a0a] mb-6"
                      style={{ fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.04em" }}
                    >
                      BITS & ATOMS
                    </div>
                    <p className="text-gray-400 uppercase tracking-widest text-sm font-bold">Logo versión tinta negra</p>
                  </div>
                </Card>
              </motion.div>

              {/* Usage guidelines */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div>
                  <h3 className="mb-6 flex items-center gap-3 font-bold text-2xl text-foreground">
                    <div className="p-2 bg-green-500/10 rounded-lg border border-green-500/20">
                      <Check className="text-green-600 dark:text-green-500" size={24} />
                    </div>
                    Uso correcto
                  </h3>
                  <Card className="p-8 bg-card border-border rounded-2xl">
                    <ul className="space-y-4">
                      {usageExamples.correct.map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-4"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Check className="text-green-600 dark:text-green-500 flex-shrink-0 mt-1" size={18} />
                          <span className="text-muted-foreground text-lg font-medium">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </Card>
                </div>

                <div>
                  <h3 className="mb-6 flex items-center gap-3 font-bold text-2xl text-foreground">
                    <div className="p-2 bg-red-500/10 rounded-lg border border-red-500/20">
                      <X className="text-red-600 dark:text-red-500" size={24} />
                    </div>
                    Uso incorrecto
                  </h3>
                  <Card className="p-8 bg-card border-border rounded-2xl">
                    <ul className="space-y-4">
                      {usageExamples.incorrect.map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-4"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <X className="text-red-600 dark:text-red-500 flex-shrink-0 mt-1" size={18} />
                          <span className="text-muted-foreground text-lg font-medium">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </Card>
                </div>

                <motion.button
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-wide shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={22} />
                  <span>Descargar kit de marca</span>
                </motion.button>
              </motion.div>
            </div>
          </TabsContent>

          {/* Colors Tab */}
          <TabsContent value="colors">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {brandColors.map((color, index) => (
                <motion.div
                  key={color.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-border hover:border-primary transition-all group bg-card rounded-2xl">
                    <div 
                      className="h-48 transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="p-8">
                      <h4 className="mb-4 font-bold text-foreground text-xl">{color.name}</h4>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex justify-between border-b border-border pb-2">
                          <span className="font-medium">HEX</span>
                          <span className="font-mono text-foreground">{color.hex}</span>
                        </div>
                        <div className="flex justify-between border-b border-border pb-2">
                          <span className="font-medium">RGB</span>
                          <span className="font-mono text-foreground">{color.rgb}</span>
                        </div>
                        <div className="pt-2">
                          <p className="text-xs leading-relaxed font-medium">{color.usage}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography">
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {typography.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-10 border-border hover:border-primary transition-all group bg-card rounded-2xl h-full flex flex-col justify-between">
                    <div className="mb-8">
                      <div 
                        className="mb-2 text-foreground"
                        style={{ 
                          fontSize: type.size.split(' - ')[0],
                          fontWeight: parseInt(type.weight.split(' ')[0]) || 400
                        }}
                      >
                        {type.name}
                      </div>
                      <p className="text-muted-foreground font-medium">The quick brown fox jumps over the lazy dog</p>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground pt-6 border-t border-border">
                      <div className="flex justify-between">
                        <span className="font-bold">Fuente</span>
                        <span className="text-foreground">{type.font}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-bold">Peso</span>
                        <span className="text-foreground">{type.weight}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-bold">Tamaño</span>
                        <span className="text-foreground">{type.size}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors font-bold uppercase tracking-wide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Descargar tipografías
              </motion.button>
            </motion.div>
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {applications.map((app, index) => (
                <motion.div
                  key={app.name}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-8 text-center border-border hover:border-primary transition-all bg-card rounded-2xl shadow-sm hover:shadow-md">
                    <motion.div
                      className="inline-flex p-5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all mb-6"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <app.icon size={36} />
                    </motion.div>
                    <h4 className="font-bold text-foreground text-lg">{app.name}</h4>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-8 bg-card border-border text-center rounded-2xl">
                <h4 className="text-foreground mb-6 font-bold">Tarjetas de visita</h4>
                <div className="aspect-[1.75/1] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 border border-border">
                  <span className="text-blue-500 font-bold">Preview</span>
                </div>
                <motion.button
                  className="text-sm text-primary hover:text-foreground transition-colors font-bold uppercase tracking-wide"
                  whileHover={{ x: 5 }}
                >
                  Descargar template →
                </motion.button>
              </Card>

              <Card className="p-8 bg-card border-border text-center rounded-2xl">
                <h4 className="text-foreground mb-6 font-bold">Presentaciones</h4>
                <div className="aspect-[16/9] bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-border">
                  <span className="text-indigo-500 font-bold">Preview</span>
                </div>
                <motion.button
                  className="text-sm text-primary hover:text-foreground transition-colors font-bold uppercase tracking-wide"
                  whileHover={{ x: 5 }}
                >
                  Descargar template →
                </motion.button>
              </Card>

              <Card className="p-8 bg-card border-border text-center rounded-2xl">
                <h4 className="text-foreground mb-6 font-bold">Redes Sociales</h4>
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center mb-6 border border-border">
                  <span className="text-purple-500 font-bold">Preview</span>
                </div>
                <motion.button
                  className="text-sm text-primary hover:text-foreground transition-colors font-bold uppercase tracking-wide"
                  whileHover={{ x: 5 }}
                >
                  Descargar template →
                </motion.button>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

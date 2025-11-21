import React, { useState } from 'react';
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    content: "Calle Innovación Tech, 42\n28001 Madrid, España",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+34 91 234 56 78",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@bitsandatoms.tech",
  },
];

const socialMedia = [
  { name: "Instagram", icon: Instagram, url: "#", color: "hover:text-pink-500" },
  { name: "LinkedIn", icon: Linkedin, url: "#", color: "hover:text-blue-500" },
  { name: "Twitter", icon: Twitter, url: "#", color: "hover:text-sky-500" },
  { name: "YouTube", icon: Youtube, url: "#", color: "hover:text-red-500" },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="min-h-screen py-24 px-4 bg-background">
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
            <span className="text-white font-bold text-sm tracking-wider uppercase">Contacto</span>
          </motion.div>
          
          <h2 className="mb-6 text-4xl md:text-6xl font-black tracking-tight text-foreground">
            Hablemos de tu <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
              futuro proyecto
            </span>
          </h2>
          
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl font-medium">
            ¿Tienes alguna pregunta o quieres saber más sobre nuestros programas? 
            Estamos aquí para ayudarte.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="mb-8 text-2xl font-bold text-foreground">Información de contacto</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 bg-card border-border hover:border-primary transition-all group rounded-2xl shadow-sm">
                      <div className="flex items-start gap-5">
                        <motion.div
                          className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all"
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          <info.icon size={24} />
                        </motion.div>
                        <div>
                          <h4 className="mb-2 font-bold text-foreground text-lg">{info.title}</h4>
                          <p className="text-muted-foreground whitespace-pre-line leading-relaxed font-medium">{info.content}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social media */}
            <div>
              <h4 className="mb-6 text-foreground font-bold text-xl">Síguenos</h4>
              <div className="flex gap-4">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className={`p-4 rounded-full bg-card border border-border transition-all ${social.color} text-muted-foreground hover:bg-muted`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <motion.div
              className="relative h-64 rounded-3xl overflow-hidden group border border-border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-4 text-primary opacity-80" size={48} />
                    <p className="text-muted-foreground font-bold">Mapa interactivo</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-10 bg-card border-border rounded-3xl shadow-lg">
              <h3 className="mb-8 text-2xl font-bold text-foreground">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground mb-2 block font-medium">
                    Nombre completo
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-input focus:border-primary text-foreground placeholder:text-muted-foreground h-12 rounded-xl"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground mb-2 block font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-input focus:border-primary text-foreground placeholder:text-muted-foreground h-12 rounded-xl"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-foreground mb-2 block font-medium">
                    Asunto
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="¿En qué podemos ayudarte?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-background border-input focus:border-primary text-foreground placeholder:text-muted-foreground h-12 rounded-xl"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground mb-2 block font-medium">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu proyecto o pregunta..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-input focus:border-primary text-foreground min-h-[180px] placeholder:text-muted-foreground rounded-xl resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white rounded-xl overflow-hidden relative font-bold text-lg tracking-wide shadow-lg shadow-primary/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Enviar mensaje</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send size={22} />
                  </motion.div>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-indigo-500 to-primary opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                </motion.button>
              </form>
            </Card>

            {/* Additional info */}
            <motion.div
              className="mt-8 p-6 rounded-2xl bg-muted border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                <strong className="text-primary block mb-1 text-base">Horario de atención:</strong>
                Lunes a Viernes: 9:00 - 20:00<br />
                Sábados: 10:00 - 14:00
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
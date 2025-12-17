import React, { useState } from 'react';
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Instagram, Linkedin, Youtube, Podcast  } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    content: "Gràcia, Barcelona · 08012 ",
  },
  
  {
    icon: Mail,
    title: "¿Tienes alguna pregunta?",
    content: "jsedano@admira.com",
  },
];

const socialMedia = [
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/bitsatoms_/", color: "hover:text-pink-500" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/bitsatoms/", color: "hover:text-blue-500" },
  { name: "TikTok", icon: SiTiktok, url: "https://www.tiktok.com/@bitsatoms?_r=1&_t=ZN-91TI3bSOSpi", color:  "hover:text-[#69C9D0]" },
  { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@BitsAtomsAdmira", color: "hover:text-red-500" },
  { name: "Spotify", icon: Podcast, url: "https://spotify.com/BitsAtoms_", color: "hover:text-green-500" },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    //subject: "",
    //message: "" ,
    center: "",   
    city: "",     
    cv: null as File | null,
    coverLetter: null as File | null, 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    
    const formToSend = new FormData();
    

    formToSend.append("name", formData.name);
    formToSend.append("email", formData.email);
   // formToSend.append("subject", formData.subject);
    //formToSend.append("message", formData.message);
    formToSend.append("center", formData.center);
    formToSend.append("city", formData.city);
    
    // Ajouter les fichiers (vérifier s'ils existent)
    if (formData.cv) {
      formToSend.append("cv", formData.cv, formData.cv.name);
    }
    if (formData.coverLetter) {
      formToSend.append("coverLetter", formData.coverLetter, formData.coverLetter.name);
    }

    // Requête vers le backend Express
    const promise = fetch('http://localhost:5000/api/contact', {
        method: "POST",
        // Pas de Content-Type ici, FormData le gère
        body: formToSend,
      })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur réseau ou du serveur.");
        return res.json();
      });

    toast.promise(promise, {
      loading: "Enviando mensaje...",
      success: () => {
        // Réinitialiser l'état après succès
        setFormData({
         name: "", email: "", /*subject: "",*/ /*message: ""*/ 
         cv: null, coverLetter: null, center: "", city: ""
        });
        return "Mensaje enviado con éxito. ¡Gracias por contactarnos!";
      },  
      error: "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
    });
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
            Súmate a<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
              Bits & Atoms
            </span>
          </h2>
          
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl font-medium">
            ¿Te apetece empezar algo nuevo?
            Cuéntanos qué te interesa y hablamos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact info, Social media, and Map (Code Intégral) */}
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
                    target="_blank"
                    rel="noopener noreferrer"
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
               {/* Mapa */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.701747264483!2d2.1494400764403756!3d41.402283095070466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2a26721ad83%3A0x59179c0e359f91d!2sCarrer%20de%20Bret%C3%B3n%20de%20los%20Herreros%2C%209%2C%20Gr%C3%A0cia%2C%2008012%20Barcelona!5e0!3m2!1ses!2ses!4v1764072192952!5m2!1ses!2ses"
                className="absolute inset-0 w-full h-full pointer-events-none"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Link arriba */}
              <a
                href="https://www.google.com/maps/place/Carrer+de+Bret%C3%B3n+de+los+Herreros,+9,+08012+Barcelona/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
              ></a>
            </motion.div>
          </motion.div>

          {/* Contact form (avec les champs ajoutés) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-10 bg-card border-border rounded-3xl shadow-lg mt-16 h-fit min-h-[650px] overflow-y-auto">
              <h3 className="mb-1 text-2xl font-bold text-foreground">¡Inscríbete a Bits&Atoms!</h3>
              <p className='text-muted-foreground mb-7'>Únete a la próxima edición · 2026/27</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Champ Nombre completo */}
                <div>
                  <Label htmlFor="name" className="text-foreground mb-2 block font-medium">
                    Nombre completo *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Nombre y apellidos"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-input focus:border-primary text-foreground placeholder:text-muted-foreground h-12 rounded-xl"
                    required
                  />
                </div>

                {/* Champ Email */}
                <div>
                  <Label htmlFor="email" className="text-foreground mb-2 block font-medium">
                    Email *
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

                {/* AJOUTÉ: Champ Centro (Center) */}
                <div>
                    <Label htmlFor="center" className="text-foreground mb-1 block font-medium">
                        Centro 
                    </Label>
                    <p className='text-muted-foreground text-xs mb-2'>Si no estás estudiando, déjalo en blanco</p>
                    <Input
                        id="center"
                        type="text"
                        placeholder="Centro de estudios actual"
                        value={formData.center}
                        onChange={(e) => setFormData({ ...formData, center: e.target.value })}
                        className="bg-background border-input focus:border-primary text-foreground placeholder:text-muted-foreground h-12 rounded-xl"
                    />
                </div>

                {/* AJOUTÉ: Champ Ciudad (City) */}
                <div>
                    <Label htmlFor="city" className="text-foreground mb-2 block font-medium">
                        Ciudad *
                    </Label>
                    <Input
                        id="city"
                        type="text"
                        placeholder="Tu ciudad de residencia"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="bg-background border-input focus:border-primary text-foreground placeholder:text-muted-foreground h-12 rounded-xl"
                        required
                    />
                </div>

                {/* Champ Asunto 
                
                <div>
                  <Label htmlFor="subject" className="text-foreground mb-2 block font-medium">
                    Asunto  *
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
                */}
                {/* Champ Mensaje 
                <div>
                  <Label htmlFor="message" className="text-foreground mb-2 block font-medium">
                    Mensaje *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu proyecto o pregunta..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-input focus:border-primary text-foreground min-h-[120px] placeholder:text-muted-foreground rounded-xl resize-none"
                    required
                  />
                </div>
                    */}  
                {/* Adjuntar CV */}
                <div>
                  <Label htmlFor="cv" className="text-foreground mb-1 block font-medium">
                    Adjuntar CV *
                  </Label>

                  <div className="border border-input rounded-xl h-11 px-4 flex items-center">
                    {!formData.cv ? (
                      <>
                        <label
                          htmlFor="cv"
                          className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer hover:text-foreground transition-colors w-full"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            attach_file
                          </span>
                          <span>Ningún archivo seleccionado</span>
                        </label>

                        <input
                          id="cv"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={(e) =>
                            setFormData({ ...formData, cv: e.target.files?.[0] || null })
                          }
                        />
                      </>
                    ) : (
                      <>
                        <span className="text-sm truncate flex-1">
                          {formData.cv.name}
                        </span>

                        <label
                          htmlFor="cv"
                          className="text-xs text-primary cursor-pointer hover:underline"
                        >
                          Cambiar
                        </label>

                        <input
                          id="cv"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={(e) =>
                            setFormData({ ...formData, cv: e.target.files?.[0] || null })
                          }
                        />
                      </>
                    )}
                  </div>
                </div>

                {/* Adjuntar Carta de Motivación */}
                <div>
                  <Label htmlFor="coverLetter" className="text-foreground mb-1 block font-medium">
                    Adjuntar Carta de Motivación
                  </Label>

                  <p className="text-muted-foreground text-xs mb-2">
                    Es opcional, pero si te apetece, cuéntanos qué te motiva.
                  </p>

                  <div className="border border-input rounded-xl h-11 px-4 flex items-center gap-3">
                    {!formData.coverLetter ? (
                      <>
                        <label
                          htmlFor="coverLetter"
                          className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer hover:text-foreground transition-colors w-full"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            attach_file
                          </span>
                          <span>Ningún archivo seleccionado</span>
                        </label>

                        <input
                          id="coverLetter"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={(e) =>
                            setFormData({ ...formData, coverLetter: e.target.files?.[0] || null })
                          }
                        />
                      </>
                    ) : (
                      <>
                        <span className="text-sm truncate flex-1">
                          {formData.coverLetter.name}
                        </span>

                        <label
                          htmlFor="coverLetter"
                          className="text-xs text-primary cursor-pointer hover:underline"
                        >
                          Cambiar
                        </label>

                        <button
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, coverLetter: null })
                          }
                          className="text-muted-foreground hover:text-destructive transition-colors flex items-center"
                          aria-label="Eliminar archivo"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            delete
                          </span>
                        </button>

                        <input
                          id="coverLetter"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={(e) =>
                            setFormData({ ...formData, coverLetter: e.target.files?.[0] || null })
                          }
                        />
                      </>
                    )}
                  </div>
                </div>

                {/* Bouton de soumission */}
                <motion.button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl overflow-hidden relative font-bold text-lg tracking-wide shadow-lg shadow-primary/20"
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

            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
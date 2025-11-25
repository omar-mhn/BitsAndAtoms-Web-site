import React from 'react';
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Training } from "./components/Training";
import { Spaces } from "./components/Spaces";
import { Podcast } from "./components/Podcast";
import { Blog } from "./components/Blog";
import { Projects } from "./components/Projects";
import { Branding } from "./components/Branding";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { Mentors } from './components/Mentors';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Training />
        <Mentors />
        <Spaces />
        <Podcast />
        <Blog />
        <Projects />
        <Branding />
        <Contact />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}
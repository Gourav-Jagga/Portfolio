import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero({ personalData, scrollToSection }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto z-10">
        <div className="text-center mb-8">
          <div className="inline-block p-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
            <div className="bg-slate-950 rounded-full px-6 py-2">
              <span className="text-cyan-400">{personalData.greeting}</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {personalData.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {personalData.tagline}
          </p>
        </div>
        
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/30"
          >
            Get In Touch
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 border-2 border-cyan-500 hover:bg-cyan-500/10 rounded-lg font-semibold transition-all"
          >
            View Projects
          </button>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Github size={24} />
          </a>
          <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${personalData.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
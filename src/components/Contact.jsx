import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact({ personalData }) {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Mail className="text-cyan-400" size={32} />
          <h2 className="text-4xl font-bold">Get In Touch</h2>
        </div>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href={personalData.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-slate-800 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all group"
          >
            <Github size={28} className="group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href={personalData.linkedin} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-slate-800 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all group"
          >
            <Linkedin size={28} className="group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href={`mailto:${personalData.email}`}
            className="p-4 bg-slate-800 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all group"
          >
            <Mail size={28} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
        
        <a 
          href={`mailto:${personalData.email}`}
          className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/30"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
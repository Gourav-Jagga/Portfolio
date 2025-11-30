import React from 'react';
import { User } from 'lucide-react';

export default function About({ aboutData }) {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <User className="text-cyan-400" size={32} />
          <h2 className="text-4xl font-bold">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {aboutData.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Core Competencies</h3>
            <ul className="space-y-3">
              {aboutData.competencies.map((competency, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span className="text-gray-300">{competency}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

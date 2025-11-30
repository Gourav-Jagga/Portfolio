import React from 'react';
import { Code } from 'lucide-react';

export default function Skills({ skillsData }) {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Code className="text-cyan-400" size={32} />
          <h2 className="text-4xl font-bold">Technical Skills</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skillsData).map(([category, items], idx) => (
            <div key={idx} className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-slate-800 rounded-lg text-sm text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
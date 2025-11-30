import React from 'react';
import { Briefcase, Award } from 'lucide-react';

export default function Experience({ experienceData }) {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-cyan-400" size={32} />
          <h2 className="text-4xl font-bold">Professional Experience</h2>
        </div>
        
        {experienceData.map((exp, idx) => (
          <div key={idx} className="bg-slate-800/30 rounded-xl p-8 border border-slate-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-cyan-400">{exp.role}</h3>
                <p className="text-xl text-gray-300">{exp.company}</p>
              </div>
              <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
            </div>
            
            <p className="text-gray-300 mb-6">{exp.description}</p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Key Achievements:</h4>
              {exp.achievements.map((achievement, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Award className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
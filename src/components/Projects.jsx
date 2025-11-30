import React from 'react';
import { Terminal, Github, ExternalLink, Globe, Briefcase, Server ,Hospital} from 'lucide-react';

const iconMap = {
    Globe,
    Briefcase,
    Server,
    Hospital
};

export default function Projects({ projectsData }) {
    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-12">
                    <Terminal className="text-cyan-400" size={32} />
                    <h2 className="text-4xl font-bold">Featured Projects</h2>
                </div>

                <div className="grid md:grid-cols-1 gap-8">
                    {projectsData.map((project, idx) => {
                        const Icon = iconMap[project.icon];
                        return (
                            <div
                                key={idx}
                                className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all group"
                            >
                                <div className="p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                                            <Icon className="text-cyan-400" size={32} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                            <p className="text-gray-400 leading-relaxed">{project.description}</p>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                                        <div className="grid md:grid-cols-2 gap-2">
                                            {project.features.map((feature, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <span className="text-cyan-400 mt-1">✓</span>
                                                    <span className="text-gray-300 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-cyan-400">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                                            >
                                                <Github size={18} />
                                                <span>View Code</span>
                                            </a>
                                        )}

                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                                            >
                                                <ExternalLink size={18} />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
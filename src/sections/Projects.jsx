import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Microscope, ArrowUpRight, FlaskConical } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="section-padding bg-slate-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Projects</h2>
                <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
                <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                    Selected works showcasing analytical skills and scientific inquiry.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary-800"
                    >
                        <div className="h-2 bg-gradient-to-r from-primary-500 to-teal-400"></div>
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-primary-50 rounded-lg text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                    {project.category === 'Research' ? <Microscope size={24} /> : <FlaskConical size={24} />}
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 border border-slate-200 px-2 py-1 rounded">
                                    {project.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

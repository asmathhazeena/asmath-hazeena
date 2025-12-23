import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
    const { education } = portfolioData;

    return (
        <section id="education" className="section-padding bg-slate-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
                <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-3xl mx-auto">
                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative overflow-hidden flex gap-6"
                        >
                            <div className="hidden sm:flex w-16 h-16 rounded-full bg-primary-50 items-center justify-center text-primary-600 flex-shrink-0">
                                <GraduationCap size={32} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-1">{edu.degree}</h4>
                                <p className="text-primary-600 font-medium mb-4">{edu.institution} • {edu.duration}</p>
                                <p className="text-slate-600 text-sm leading-relaxed">{edu.details}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

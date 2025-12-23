import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { portfolioData } from '../data/portfolioData';

const SkillBar = ({ name, level, delay }) => (
    <div className="mb-6">
        <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-slate-700">{name}</span>
            <span className="text-sm font-medium text-slate-500">{level}%</span>
        </div>
        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: delay, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary-500 to-teal-400 rounded-full"
            ></motion.div>
        </div>
    </div>
);

const Skills = () => {
    const { skills } = portfolioData;

    return (
        <section id="skills" className="section-padding bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
                <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                {/* Laboratory Skills */}
                <div>
                    <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20" /><path d="M12 2v20" /><path d="M12 10h4" /><path d="M12 14h4" /><path d="M12 18h4" /></svg>
                        </span>
                        Laboratory Techniques
                    </h3>
                    {skills.laboratory.map((skill, index) => (
                        <SkillBar key={index} name={skill.name} level={skill.level} delay={index * 0.1} />
                    ))}
                </div>

                {/* Data & Soft Skills */}
                <div className="space-y-12">
                    <div>
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                            </span>
                            Data Analysis & Tools
                        </h3>
                        {skills.data.map((skill, index) => (
                            <SkillBar key={index} name={skill.name} level={skill.level} delay={index * 0.1} />
                        ))}
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </span>
                            Professional Competencies
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.soft.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm text-slate-700 font-medium hover:border-primary-300 hover:text-primary-600 transition-colors cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Modal from '../components/Modal';

const Experience = () => {
    const { experience } = portfolioData;
    const [selectedExp, setSelectedExp] = React.useState(null);

    return (
        <section id="experience" className="section-padding bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
                <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200"></div>

                <div className="space-y-12">
                    {experience.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center md:items-start gap-8`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-primary-500 rounded-full z-10 mt-1.5"></div>

                            {/* Content */}
                            <div className="w-full md:w-1/2 pl-8 md:pl-0 md:pr-12 text-left md:text-right">
                                <div className={`${index % 2 === 0 ? 'md:text-left md:pl-12 md:pr-0' : ''}`}>
                                    <div
                                        className={`bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow ${item.certificate ? 'cursor-pointer hover:border-primary-200' : ''}`}
                                        onClick={() => item.certificate && setSelectedExp(item)}
                                    >
                                        <div className="flex flex-col gap-2 mb-4">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
                                                    <div className="flex items-center gap-2 text-primary-600 font-medium text-sm mt-1">
                                                        <Briefcase size={16} />
                                                        <span>{item.organization}</span>
                                                    </div>
                                                </div>
                                                {item.logo && (
                                                    <img
                                                        src={item.logo}
                                                        alt={`${item.organization} logo`}
                                                        className="w-20 h-20 object-contain rounded-md bg-white border border-slate-100 p-1"
                                                    />
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                                                <Calendar size={16} />
                                                <span>{item.duration}</span>
                                            </div>
                                        </div>

                                        <p className="text-slate-600 mb-4 italic">{item.description}</p>

                                        <ul className="space-y-2">
                                            {item.responsibilities.map((resp, idx) => (
                                                <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                                                    <span className="mt-1.5 w-1.5 h-1.5 bg-teal-400 rounded-full flex-shrink-0"></span>
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Empty space for the other side */}
                            <div className="hidden md:block w-1/2"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={!!selectedExp}
                onClose={() => setSelectedExp(null)}
                title={selectedExp?.role}
                content={selectedExp?.certificate}
            />
        </section>
    );
};

export default Experience;

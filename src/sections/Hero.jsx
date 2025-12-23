import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Download, Mail, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
    const { hero } = portfolioData;

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute top-1/2 -left-24 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center md:text-left"
                    >
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-50 border border-primary-100 text-primary-700 font-medium text-sm tracking-wide">
                            Available for Research & Clinical Roles
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                            Hi, I'm <span className="text-gradient">{hero.name}</span>
                        </h1>

                        <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6">
                            {hero.title}
                        </h2>

                        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mb-6 mx-auto md:mx-0">
                            {hero.summary}
                        </p>

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-8 text-slate-500 text-sm">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                <span>{hero.location}</span>
                            </div>
                            <div className="hidden md:block text-slate-300">|</div>
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <span>{hero.phone}</span>
                            </div>
                        </div>

                        {/* <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <a
                                href={hero.cvLink}
                                className="px-8 py-3.5 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-all shadow-lg shadow-primary-200 flex items-center gap-2 group"
                            >
                                <Download size={20} />
                                <span>Download CV</span>
                            </a>

                            <a
                                href={`mailto:${hero.email}`}
                                className="px-8 py-3.5 rounded-lg bg-white text-slate-700 border border-slate-200 font-medium hover:border-primary-300 hover:text-primary-600 transition-all flex items-center gap-2"
                            >
                                <Mail size={20} />
                                <span>Contact Me</span>
                            </a>
                        </div> */}
                    </motion.div>

                    {/* Visual/Image Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative"
                    >
                        <div className="relative w-full max-w-md mx-auto aspect-square">
                            {hero.image ? (
                                <div className="relative w-full h-full">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-teal-400 rounded-2xl rotate-3 opacity-20"></div>
                                    <img
                                        src={hero.image}
                                        alt={hero.name}
                                        className="relative w-full h-full object-cover rounded-2xl shadow-xl border border-slate-100 -rotate-3 hover:rotate-0 transition-transform duration-500"
                                    />
                                </div>
                            ) : (
                                <>
                                    <div className="absolute inset-4 bg-gradient-to-tr from-primary-500 to-teal-400 rounded-2xl rotate-3 opacity-20"></div>
                                    <div className="absolute inset-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col justify-center items-center -rotate-3 hover:rotate-0 transition-transform duration-500">
                                        <div className="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center mb-6 text-primary-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M2 12h20"></path>
                                                <path d="M12 2v20"></path>
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M12 8a4 4 0 0 1 4 4"></path>
                                                <path d="M8 12a4 4 0 0 1 4 4"></path>
                                            </svg>
                                        </div>
                                        <div className="space-y-3 w-full">
                                            <div className="h-2 bg-slate-100 rounded w-3/4 mx-auto"></div>
                                            <div className="h-2 bg-slate-100 rounded w-1/2 mx-auto"></div>
                                            <div className="h-2 bg-slate-100 rounded w-5/6 mx-auto"></div>
                                        </div>
                                        <div className="mt-8 text-center">
                                            <p className="font-heading font-bold text-slate-900">Precision & Analysis</p>
                                            <p className="text-sm text-slate-500">Data-Driven Science</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

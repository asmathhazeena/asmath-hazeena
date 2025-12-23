import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
    const { hero } = portfolioData;

    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-heading font-bold text-white mb-4">Asmath<span className="text-primary-500">Hazeena</span></h3>
                        <p className="text-slate-400 max-w-xs">
                            Showcasing the intersection of biomedical science, research, and innovation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
                            <li><a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a></li>
                            <li><a href="#experience" className="hover:text-primary-400 transition-colors">Experience</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href={`mailto:${hero.email}`} className="bg-slate-800 p-2 rounded-full hover:bg-primary-600 transition-colors text-white">
                                <Mail size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/asmath-hazeena-6479ba308/" className="bg-slate-800 p-2 rounded-full hover:bg-primary-600 transition-colors text-white">
                                <Linkedin size={20} />
                            </a>

                        </div>
                        <p className="mt-4 text-sm text-slate-500">
                            &copy; {new Date().getFullYear()} Asmath. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

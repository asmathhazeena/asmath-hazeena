import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Modal from '../components/Modal';

const Certificates = () => {
    const { certificates } = portfolioData;
    const [selectedCert, setSelectedCert] = React.useState(null);

    return (
        <section id="certificates" className="section-padding bg-slate-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates & Courses</h2>
                <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => cert.certificate && setSelectedCert(cert)}
                        className={`bg-white p-6 rounded-xl border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group ${cert.certificate ? 'cursor-pointer' : ''}`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-primary-50 rounded-lg text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                <FileText size={24} />
                            </div>
                            <span className="text-xs font-bold text-slate-400 border border-slate-100 px-2 py-1 rounded bg-slate-50">
                                {cert.year}
                            </span>
                        </div>

                        <h5 className="font-bold text-slate-900 mb-2 min-h-[3rem]">{cert.name}</h5>
                        <p className="text-sm text-slate-500 mb-4">{cert.platform}</p>

                        <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary-400 w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Modal
                isOpen={!!selectedCert}
                onClose={() => setSelectedCert(null)}
                title={selectedCert?.name}
                content={selectedCert?.certificate}
            />
        </section>
    );
};

export default Certificates;

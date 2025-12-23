import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Modal from '../components/Modal';

const Awards = () => {
    const { awards } = portfolioData;
    const [selectedAward, setSelectedAward] = React.useState(null);

    return (
        <section id="awards" className="section-padding bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Honours & Awards</h2>
                <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {awards.map((award, index) => (
                    <motion.div
                        key={award.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => award.certificate && setSelectedAward(award)}
                        className={`flex items-center gap-4 bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-primary-200 transition-colors ${award.certificate ? 'cursor-pointer hover:shadow-md' : ''}`}
                    >
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-teal-500 flex-shrink-0">
                            <Award size={24} />
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-900 text-lg">{award.title}</h5>
                            <p className="text-slate-500">{award.issuer}</p>
                            <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded mt-1 inline-block">{award.year}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Modal
                isOpen={!!selectedAward}
                onClose={() => setSelectedAward(null)}
                title={selectedAward?.title}
                content={selectedAward?.certificate}
            />
        </section>
    );
};

export default Awards;

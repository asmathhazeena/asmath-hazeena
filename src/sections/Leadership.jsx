import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Users, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Modal from '../components/Modal';

const Leadership = () => {
    const { leadership } = portfolioData;
    const [selectedItem, setSelectedItem] = React.useState(null);

    return (
        <section id="leadership" className="section-padding bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership & Volunteering</h2>
                <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {leadership.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => item.certificate && setSelectedItem(item)}
                        className={`bg-slate-50 p-8 rounded-2xl border border-slate-100 flex gap-6 hover:bg-white hover:shadow-lg transition-all duration-300 ${item.certificate ? 'cursor-pointer' : ''}`}
                    >
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary-600 flex-shrink-0">
                            {index % 2 === 0 ? <Users size={24} /> : <Heart size={24} />}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-1">{item.role}</h3>
                            <p className="text-primary-600 font-medium mb-3">{item.organization}</p>
                            <p className="text-slate-600 leading-relaxed">{item.description}</p>
                            {item.certificate && (
                                <p className="text-xs text-slate-400 mt-2 italic">(Click to view certificate)</p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            <Modal
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                title={selectedItem?.role}
                content={selectedItem?.certificate}
            />
        </section>
    );
};

export default Leadership;

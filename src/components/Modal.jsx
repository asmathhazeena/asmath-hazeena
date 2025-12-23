import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    // Determine content type (simple check for pdf extension)
    const isPdf = content?.toLowerCase().endsWith('.pdf');

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    ></motion.div>

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-white w-full max-w-4xl h-[80vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-white z-10">
                            <h3 className="text-lg font-bold text-slate-800 truncate pr-4">{title}</h3>
                            <div className="flex items-center gap-2">
                                <a
                                    href={content}
                                    download
                                    className="p-2 text-slate-500 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors"
                                    title="Download Certificate"
                                >
                                    <Download size={20} />
                                </a>
                                <button
                                    onClick={onClose}
                                    className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="flex-1 bg-slate-50 p-4 overflow-auto flex items-center justify-center">
                            {content ? (
                                isPdf ? (
                                    <iframe
                                        src={content}
                                        className="w-full h-full rounded-lg border border-slate-200"
                                        title={title}
                                    ></iframe>
                                ) : (
                                    <img
                                        src={content}
                                        alt={title}
                                        className="max-w-full max-h-full object-contain shadow-md rounded-lg"
                                    />
                                )
                            ) : (
                                <div className="text-center text-slate-400">
                                    <p>No certificate file available</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;

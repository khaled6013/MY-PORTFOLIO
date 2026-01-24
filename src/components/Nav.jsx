import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FiDownload } from "react-icons/fi";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const navLinks = [
        { name: "About", href: "#about" },
        { name: "services", href: "#services" },
        { name: "Skills", href: "#skill" },
        { name: "Projects", href: "#project" },
    ];

    return (
        <>
            {/* Desktop & Mobile Floating Navbar */}
            <motion.div 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
            >
                <div className="w-full max-w-5xl bg-white/70 backdrop-blur-md border border-white/40 shadow-xl rounded-full px-6 py-3 flex items-center justify-between">
                    
                    {/* Logo Area */}
                    <a href="#" className="font-pops font-extrabold text-2xl tracking-tighter text-gray-800 flex items-center gap-1">
                        KHA<span className="text-blue-500">LED</span>
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a 
                                    href={link.href} 
                                    className="font-medium text-gray-600 hover:text-blue-600 transition-colors font-pops text-sm uppercase tracking-wide"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Action Buttons (Desktop) */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="https://drive.google.com/uc?export=download&id=1nec1Mgm40gvmmEpfFsgj2N4mHESMEG-i"
                            className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all border border-transparent hover:border-gray-300"
                        >
                            <span>CV</span> <FiDownload />
                        </a>
                        <a 
                            href="#contact" 
                            className="px-6 py-2.5 bg-linear-to-r from-blue-500 to-cyan-400 text-white rounded-full text-sm font-semibold shadow-lg shadow-blue-400/30 hover:shadow-blue-400/50 transition-all transform hover:-translate-y-0.5"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden" onClick={() => setOpen(!open)}>
                        <button className="p-2 text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                            {open ? <RxCross2 size={24} /> : <FaBars size={22} />}
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Dropdown Menu (AnimatePresence for smooth exit) */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-24 left-4 right-4 z-40 bg-white/90 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-6 lg:hidden"
                    >
                        <ul className="flex flex-col items-center gap-6 text-center">
                            {navLinks.map((link, index) => (
                                <li key={index} onClick={() => setOpen(false)}>
                                    <a href={link.href} className="text-xl font-bold text-gray-800 hover:text-blue-500 font-pops">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <div className="flex flex-col w-full gap-3 mt-4">
                                <a
                                    href="https://drive.google.com/uc?export=download&id=1nec1Mgm40gvmmEpfFsgj2N4mHESMEG-i"
                                    className="w-full py-3 bg-gray-100 rounded-xl font-bold text-gray-700 flex justify-center items-center gap-2"
                                >
                                    Download CV <FiDownload />
                                </a>
                                <a
                                    href="#contact"
                                    onClick={() => setOpen(false)}
                                    className="w-full py-3 bg-linear-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-bold shadow-lg"
                                >
                                    Let's Talk
                                </a>
                            </div>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Nav;
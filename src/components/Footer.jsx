import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { MdEmail, MdCall, MdLocationOn, MdSend } from "react-icons/md";
import { FaUser, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
    const form = useRef();
    const [status, setStatus] = useState(null); 

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(null), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus(null), 5000);
            });
    };

    return (
        <section id="contact" className="py-20 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl z-0 opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-50 rounded-full blur-3xl z-0 opacity-50" />

            <div className="w-11/12 max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    
                    {/* Left Side: Contact Info & Text */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">Get in Touch</span>
                        <h2 className="font-pops font-extrabold text-4xl md:text-5xl text-gray-900 mt-2 mb-6">
                            Let’s Work <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-400">Together!</span>
                        </h2>
                        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                            Have a project in mind or just want to say hi? I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        {/* Contact Cards (Vertical Stack) */}
                        <div className="space-y-6">
                            {/* Phone Card */}
                            <div className="flex items-center gap-5 p-5 bg-[#F9FAFB] rounded-2xl border border-transparent hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-500 text-2xl shadow-sm group-hover:scale-110 transition-transform">
                                    <MdCall />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Phone</p>
                                    <p className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">+880 1791-592180</p>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="flex items-center gap-5 p-5 bg-[#F9FAFB] rounded-2xl border border-transparent hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-cyan-500 text-2xl shadow-sm group-hover:scale-110 transition-transform">
                                    <MdEmail />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Email</p>
                                    <p className="text-xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors">kmd601384@gmail.com</p>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="flex items-center gap-5 p-5 bg-[#F9FAFB] rounded-2xl border border-transparent hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-purple-500 text-2xl shadow-sm group-hover:scale-110 transition-transform">
                                    <MdLocationOn />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Location</p>
                                    <p className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100"
                    >
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
                            
                            {/* Input: Name */}
                            <div className="relative">
                                <label className="text-sm font-bold text-gray-600 ml-3 mb-1 block">Your Name</label>
                                <div className="relative">
                                    <FaUser className="absolute top-4 left-4 text-gray-400" />
                                    <input 
                                        type="text" 
                                        name="user_name" 
                                        required 
                                        placeholder="ex. Khaledur Rahman"
                                        className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block w-full pl-10 p-3.5 outline-none transition-all" 
                                    />
                                </div>
                            </div>

                            {/* Input: Email */}
                            <div className="relative">
                                <label className="text-sm font-bold text-gray-600 ml-3 mb-1 block">Email Address</label>
                                <div className="relative">
                                    <MdEmail className="absolute top-4 left-4 text-gray-400 text-lg" />
                                    <input 
                                        type="email" 
                                        name="user_email" 
                                        required 
                                        placeholder="ex. hello@example.com"
                                        className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block w-full pl-10 p-3.5 outline-none transition-all" 
                                    />
                                </div>
                            </div>

                            {/* Input: Message */}
                            <div className="relative">
                                <label className="text-sm font-bold text-gray-600 ml-3 mb-1 block">Message</label>
                                <textarea 
                                    name="message" 
                                    rows="4" 
                                    required 
                                    placeholder="Write your message here..."
                                    className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block w-full p-4 outline-none transition-all resize-none" 
                                ></textarea>
                            </div>

                            {/* Submit Button & Status */}
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full text-white bg-linear-to-r from-blue-600 to-cyan-500 hover:bg-linear-to-l focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-xl text-lg px-5 py-4 text-center transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? 'Sending...' : (
                                    <>
                                        Send Message <FaPaperPlane />
                                    </>
                                )}
                            </button>

                            {/* Feedback Messages */}
                            {status === 'success' && (
                                <motion.p 
                                    initial={{ opacity: 0, y: 10 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    className="text-green-600 text-center font-bold bg-green-50 p-3 rounded-lg border border-green-200"
                                >
                                    ✅ Message Sent Successfully!
                                </motion.p>
                            )}
                            {status === 'error' && (
                                <motion.p 
                                    initial={{ opacity: 0, y: 10 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    className="text-red-600 text-center font-bold bg-red-50 p-3 rounded-lg border border-red-200"
                                >
                                    ❌ Failed to send. Please try again.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Footer;
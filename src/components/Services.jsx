import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt, FaServer, FaBug, FaRocket } from "react-icons/fa";

const services = [
    {
        id: 1,
        title: "Web Development",
        desc: "Building fast, responsive, and secure websites using React & Next.js.",
        icon: <FaCode />,
        color: "text-blue-500",
        bg: "bg-blue-50"
    },
    {
        id: 2,
        title: "UI/UX Design",
        desc: "Translating Figma/XD designs into pixel-perfect interactive code.",
        icon: <FaPaintBrush />,
        color: "text-purple-500",
        bg: "bg-purple-50"
    },
    {
        id: 3,
        title: "Responsive Design",
        desc: "Ensuring your site looks perfect on mobile, tablet, and desktop screens.",
        icon: <FaMobileAlt />,
        color: "text-green-500",
        bg: "bg-green-50"
    },
    {
        id: 4,
        title: "API Integration",
        desc: "Connecting frontend with backend services using REST & GraphQL APIs.",
        icon: <FaServer />,
        color: "text-orange-500",
        bg: "bg-orange-50"
    },
    {
        id: 5,
        title: "Bug Fixing",
        desc: "Identifying and fixing UI/logic bugs to ensure smooth performance.",
        icon: <FaBug />,
        color: "text-red-500",
        bg: "bg-red-50"
    },
    {
        id: 6,
        title: "Performance",
        desc: "Optimizing code and assets to boost website loading speed.",
        icon: <FaRocket />,
        color: "text-cyan-500",
        bg: "bg-cyan-50"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl z-0 opacity-50" />

            <div className="w-11/12 max-w-7xl mx-auto relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-blue-500 font-bold tracking-widest uppercase text-sm"
                    >
                        What I Offer
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-pops font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 mt-2"
                    >
                        My <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-400">Services</span>
                    </motion.h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl border border-transparent hover:border-blue-100 transition-all duration-300 group"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${service.bg} ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
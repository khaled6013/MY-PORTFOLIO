import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import ecom from "../assets/e-com.png";
import fin from "../assets/fin.png";
import cyber from "../assets/cyber.png";
import part from "../assets/part.png";

const projects = [
    {
        title: "E-Commerce Website",
        tech: "React JS (API Integrated)",
        icon: <FaReact className="text-cyan-400 text-3xl" />,
        img: ecom,
        link: "https://zingy-mochi-1d5f2f.netlify.app/",
    },
    {
        title: "Finance Dashboard",
        tech: "React JS (Multi Page)",
        icon: <FaReact className="text-cyan-400 text-3xl" />,
        img: fin,
        link: "https://vocal-boba-03d8ad.netlify.app/",
    },
    {
        title: "Cyber Landing Page",
        tech: "Next JS (Single Page)",
        icon: <SiNextdotjs className="text-black text-3xl dark:text-white" />,
        img: cyber,
        link: "https://cyber-ai-iota.vercel.app/", 
    },
    {
        title: "Portfolio Agency",
        tech: "Next JS (Multi Page)",
        icon: <SiNextdotjs className="text-black text-3xl dark:text-white" />,
        img: part,
        link: "https://your-finance-dashboard.com",
    },
];


const Project = () => {
    return (
        <section className="lg:py-20 py-10 bg-[#E0E0E0]">
            <div className="w-11/12 lg:w-10/12 mx-auto text-center">
                <h2 className="font-pops lg:font-extrabold font-bold text-black lg:text-[67px] md:text-[45px] text-[32px] opacity-75 leading-tight">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:mt-10 mt-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-transparent hover:border-blue-400"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            </div>
                            <div className="p-5 text-center relative z-10">
                                <div className="flex justify-center items-center gap-2 mb-3">
                                    {project.icon}
                                    <p className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
                                        {project.tech}
                                    </p>
                                </div>
                                <h3 className="font-bold text-[20px] text-gray-800 group-hover:text-blue-500 transition-all duration-300">
                                    {project.title}
                                </h3>

                                {project.link !== "#" ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-4 text-sm font-semibold text-white bg-linear-to-r from-blue-500 to-cyan-400 px-4 py-2 rounded-full hover:shadow-lg hover:shadow-blue-400/40 transition-all duration-300"
                                    >
                                        View Project
                                    </a>
                                ) : (
                                    <p className="text-gray-500 text-sm mt-4 italic">
                                        Coming Soon
                                    </p>
                                )}
                            </div>
                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-all duration-500 bg-linear-to-r from-blue-400 via-cyan-300 to-purple-500 blur-xl -z-10"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project
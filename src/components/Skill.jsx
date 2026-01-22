import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: "90%", desc: "Structure" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: "85%", desc: "Design" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" />, level: "95%", desc: "Styling" },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" />, level: "80%", desc: "Framework" },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, level: "85%", desc: "Logic" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: "75%", desc: "Type Safety" },
    { name: "React JS", icon: <FaReact className="text-cyan-400" />, level: "90%", desc: "UI Lib" },
    { name: "Next JS", icon: <SiNextdotjs className="text-black" />, level: "80%", desc: "Fullstack" },
];

const marqueeSkills = [...skills, ...skills, ...skills];

const Skill = () => {
    return (
        <section id="skill" className="py-20 bg-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl z-0 opacity-50" />
             <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-50 rounded-full blur-3xl z-0 opacity-50" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                
                <div className="text-center mb-12">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-blue-500 font-bold tracking-wider uppercase text-sm"
                    >
                        My Expertise
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-pops font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 mt-2"
                    >
                        Tech <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-400">Arsenal</span>
                    </motion.h2>
                </div>
                <div className="relative w-full overflow-hidden py-10">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent z-10" />

                    <motion.div 
                        className="flex gap-8 w-max"
                        animate={{ x: [0, -1000] }}
                        transition={{ 
                            repeat: Infinity, 
                            duration: 20, 
                            ease: "linear" 
                        }}
                    >
                        {marqueeSkills.map((skill, index) => (
                            <div 
                                key={index} 
                                className="flex flex-col items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm min-w-[150px]"
                            >
                                <div className="text-5xl">{skill.icon}</div>
                                <span className="font-bold text-gray-700">{skill.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-[#F9FAFB] hover:bg-white rounded-3xl p-6 border border-transparent hover:border-blue-100 hover:shadow-xl transition-all duration-300 group text-center"
                        >
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-4xl shadow-md mb-4 group-hover:scale-110 transition-transform">
                                {skill.icon}
                            </div>
                            <h3 className="font-bold text-lg text-gray-800">{skill.name}</h3>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-3">{skill.desc}</p>
                            
                            <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: skill.level }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full bg-blue-500"
                                />
                            </div>
                            <p className="text-right text-xs font-bold text-blue-500 mt-1">{skill.level}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skill;
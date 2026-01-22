import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import ecom from "../assets/e-com.png";
import qu from "../assets/qu.png";
import cyber from "../assets/cyber.png";
import hekto from "../assets/hekto.png";
import Authentication from '../assets/Athu.png';

const projects = [
  {
    title: "E-Commerce Platform",
    category: "E-Commerce",
    tech: ["React", "API", "Tailwind"],
    img: ecom,
    link: "https://zingy-mochi-1d5f2f.netlify.app/",
    github: "https://github.com/khaled6013/E-commerce",
    color: "from-blue-400 to-cyan-300"
  },
  {
    title: "Hekto Shop",
    category: "E-Commerce",
    tech: ["React", "API", "Tailwind" , "AI Chat System"],
    img: hekto,
    link: "https://e-commerce-m-ten.vercel.app/",
    github: "https://github.com/khaled6013/E-commerce--M-",
    color: "from-purple-400 to-pink-300"
  },
  {
    title: "Quarter Real Estate",
    category: "Business",
    tech: ["Next.js", "framer-motion","Tailwind"],
    img: qu,
    link: "https://quarter-next-js.vercel.app/",
    github: "https://github.com/khaled6013/Quarter-next-js",
    color: "from-orange-400 to-red-300"
  },
  {
    title: "Cyber AI Landing",
    category: "Technology",
    tech: ["Next.js", "Tailwind", "GSAP"],
    img: cyber,
    link: "https://cyber-ai-iota.vercel.app/",
    github: "https://github.com/khaled6013/cyber-ai",
    color: "from-emerald-400 to-teal-300"
  },
  {
    title: "Secure Auth System",
    category: "Security",
    tech: ["React", "Tailwind", "Firebase"],
    img: Authentication,
    link: "https://authentication-rouge-seven.vercel.app/",
    github: "https://github.com/khaled6013/Authentication",
    color: "from-indigo-400 to-blue-300"
  },
];

const Project = () => {
  return (
    <section id="project" className="py-20 bg-[#F3F4F6] relative">
      <div className="absolute top-10 left-0 w-full overflow-hidden leading-none pointer-events-none opacity-[0.03]">
        <h1 className="text-[15vw] font-bold text-gray-900 text-center uppercase">Work</h1>
      </div>

      <div className="w-11/12 max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2"
          >
            Portfolio
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-pops font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900"
          >
            Recent <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-400">Projects</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg bg-white"
            >
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-linear-to-t ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500`} />
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-bold px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-white/80 text-sm font-medium mb-6 uppercase tracking-wider">{project.category}</p>

                <div className="flex gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg cursor-pointer z-30"
                  >
                    Live Demo <FaExternalLinkAlt className="text-xs" />
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-black/20 backdrop-blur-md border border-white/30 text-white rounded-xl hover:bg-black/40 transition-colors cursor-pointer z-30"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-black/80 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10">
                 <h3 className="text-xl font-bold text-white">{project.title}</h3>
                 <p className="text-gray-300 text-sm">{project.category}</p>
              </div>

            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
            <a href="https://github.com/khaled6013" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-full font-bold text-gray-800 hover:border-blue-500 hover:text-blue-500 transition-all shadow-sm hover:shadow-md">
                <FaGithub /> View More on GitHub
            </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
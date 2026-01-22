import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaRocket, FaLaptopCode } from "react-icons/fa";

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 50
      },
    }),
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Glows (Responsive Position) */}
      <div className="absolute top-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-blue-100 rounded-full blur-3xl z-0 opacity-60" />
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-cyan-100 rounded-full blur-3xl z-0 opacity-60" />
      
      <div className="w-11/12 max-w-7xl mx-auto z-10 relative">
        
        {/* Header Section */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
        >
            <h2 className="font-pops font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-3 md:mb-4">
              About <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-400">Me</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
              Turning complex problems into simple, beautiful, and intuitive designs.
            </p>
        </motion.div>

        {/* Improved Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          
          {/* 1. Main Bio Card (Full width on Tablet, 2 cols on Desktop) */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="md:col-span-2 bg-[#F3F4F6] rounded-4xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-blue-200"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <div className="p-3 md:p-4 bg-white shadow-sm text-blue-600 rounded-2xl text-2xl md:text-3xl shrink-0">
                    <FaLaptopCode />
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Who I Am</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base font-pops text-justify sm:text-left">
                        Hi, I'm <span className="font-bold text-gray-900">Khaledur Rahman</span>. I specialize in building modern, responsive websites using <span className="text-blue-600 font-semibold">React, Next.js</span>, and Tailwind CSS. My goal is to craft websites that not only look great but also deliver smooth user experiences.
                    </p>
                </div>
            </div>
          </motion.div>

          {/* 2. Stats/Experience Card (Compact on Tablet/Desktop) */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-gray-900 text-white rounded-4xl p-6 md:p-8 flex flex-col justify-center items-center text-center shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
          >
            <h4 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 mb-2">
                10+
            </h4>
            <p className="text-lg md:text-xl font-semibold">Projects</p>
            <p className="text-gray-400 text-xs md:text-sm mt-1">Completed Successfully</p>
          </motion.div>

          {/* 3. My Mission (Compact on Desktop, Side-by-side on Tablet) */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-linear-to-br from-blue-500 to-cyan-400 text-white rounded-4xl p-6 md:p-8 shadow-lg flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="bg-white/20 p-2 rounded-lg">
                   <FaRocket className="text-xl md:text-2xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">My Mission</h3>
            </div>
            <p className="text-blue-50 leading-relaxed text-sm md:text-base font-medium">
                To bridge the gap between design and technology, ensuring every pixel serves a purpose.
            </p>
          </motion.div>

          {/* 4. Highlights (Full width on Tablet, 2 cols on Desktop) */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="md:col-span-2 bg-white border border-gray-100 shadow-lg hover:shadow-xl rounded-4xl p-6 md:p-8 flex flex-col justify-center transition-all duration-300"
          >
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-5 md:mb-6 flex items-center gap-2">
                <FaLightbulb className="text-yellow-500 text-xl md:text-2xl" /> What drives me?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                {[
                    { title: "Clean Code", desc: "Easy to maintain" },
                    { title: "Responsive", desc: "All devices supported" },
                    { title: "Modern UI", desc: "Eye-catching design" },
                ].map((item, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-2xl text-center hover:bg-blue-50 transition-colors border border-gray-100">
                        <h4 className="font-bold text-gray-900 text-sm md:text-base">{item.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                    </div>
                ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: "90%" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: "85%" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: "90%" },
  { name: "Bootstrap 5", icon: <FaBootstrap className="text-purple-600" />, level: "80%" },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, level: "85%" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: "75%" },
  { name: "React JS", icon: <FaReact className="text-cyan-400" />, level: "90%" },
  { name: "Next JS", icon: <SiNextdotjs className="text-black dark:text-white" />, level: "80%" },
];

const Skill = () => {
  return (
   <>
  <section className="bg-linear-to-b from-gray-100 to-gray-200 lg:py-20 py-8" id="skills">
      <div className="w-11/12 lg:w-10/12 mx-auto text-center">
        <h2 className="font-pops lg:font-extrabold font-bold text-black lg:text-[67px] md:text-[45px] text-[32px] opacity-75 leading-tight">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 lg:mt-10 mt-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-[#1a1a1a] shadow-xl rounded-3xl py-10 flex flex-col items-center justify-center gap-4 border border-transparent hover:border-blue-400 transition-all duration-300"
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl drop-shadow-lg">{skill.icon}</div>
              <p className="text-[20px] font-semibold text-gray-700 dark:text-gray-300">{skill.name}</p>
              <div className="w-4/5 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-linear-to-r from-blue-500 to-cyan-400 rounded-full"
                ></motion.div>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{skill.level}</p>
              <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-30 transition-all duration-500 bg-linear-to-r from-blue-400 via-cyan-300 to-purple-500 blur-xl -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
   </>
  )
}

export default Skill
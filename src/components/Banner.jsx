import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaInstagram, FaFacebookF, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import bannerImg from "../assets/k.jpg";

const Banner = () => {
  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/khaled6013", color: "hover:text-gray-900" },
    { icon: <FaWhatsapp />, link: "https://web.whatsapp.com/", color: "hover:text-green-500" },
    { icon: <FaTwitter />, link: "https://x.com/khaledur_r62302", color: "hover:text-blue-400" },
    { icon: <FaFacebookF />, link: "https://www.facebook.com/pk.khaled.7", color: "hover:text-blue-600" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/_kha_led_0/", color: "hover:text-pink-500" },
  ];

  return (
    <section className="bg-[#F3F4F6] min-h-screen flex items-center pt-32 pb-10 lg:pt-0 lg:pb-0 relative overflow-hidden">
      {/* Background Shapes (Optional Decoration) */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-200/30 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl z-0" />

      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
          
          {/* Left Content (Text) */}
          <motion.div 
            className="w-full lg:w-3/5 text-center lg:text-left z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <span className="inline-block py-2 px-4 rounded-full bg-white border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
              👋 Welcome to my world
            </span>

            <h1 className="font-pops font-extrabold text-black text-[36px] sm:text-[48px] md:text-[60px] lg:text-[75px] leading-[1.1] mb-6">
              Hello, I’m <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-400">
                Khaledur Rahman
              </span>
            </h1>

            <p className="font-pops text-gray-600 text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              A passionate <span className="text-gray-900 font-bold">Front-End Developer</span> creating bold & brave interface designs for companies all across the world.
            </p>

            {/* Buttons & Socials */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a 
                href="#contact" 
                className="group flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30"
              >
                Hire Me
                <FaTelegramPlane className="group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 text-xl shadow-sm hover:scale-110 transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content (Image) */}
          <motion.div 
            className="w-full lg:w-2/5 flex justify-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]">
              {/* Colorful Blob/Glow behind image */}
              <div className="absolute inset-0 bg-linear-to-tr from-blue-400 to-cyan-300 rounded-[3rem] rotate-6 opacity-60 blur-xl animate-pulse"></div>
              <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-2xl -rotate-3 hover:rotate-0 transition-all duration-500">
                <img
                  src={bannerImg}
                  alt="Khaledur Rahman"
                  className="w-full lg:w-[320px] h-full object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="bg-green-100 p-2 rounded-full">
                   <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Status</p>
                    <p className="text-sm font-bold text-gray-800">Available</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
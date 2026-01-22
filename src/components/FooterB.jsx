import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const FooterB = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-white py-12 border-t border-gray-800">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* 1. Brand & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-extrabold font-pops tracking-tight flex items-center justify-center md:justify-start gap-1">
              KHA<span className="text-blue-500">LED</span>
            </a>
            <p className="text-gray-400 text-sm mt-2">
              Building digital experiences that matter.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              &copy; {currentYear} Khaledur Rahman. All rights reserved.
            </p>
          </div>

          {/* 2. Quick Links */}
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium text-gray-300">
            <li>
              <a href="#about" className="hover:text-blue-400 transition-colors duration-300 relative group">
                About Me
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#skill" className="hover:text-blue-400 transition-colors duration-300 relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#project" className="hover:text-blue-400 transition-colors duration-300 relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition-colors duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>

          {/* 3. Social Media Icons */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/khaled6013" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.facebook.com/pk.khaled.7" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <FaFacebookF />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-[#0077B5] hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://x.com/khaledur_r62302" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <FaTwitter />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterB;
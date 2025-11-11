import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const FooterB = () => {
  return (
    <>
       <footer className="lg:py-20 py-10 bg-[#E0E0E0]">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between pb-6">
          <h2 className="text-2xl font-extrabold text-black tracking-wide mb-4 md:mb-0 font-pops">
            KHALED
          </h2>
          <ul className="flex items-center gap-6 text-gray-700 font-medium">
            <li>
              <a
                href="#about"
                className="hover:text-black transition-colors duration-300"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skill"
                className="hover:text-black transition-colors duration-300"
              >
                Skill
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-black transition-colors duration-300"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>
        <div className="border-b border-black mb-6"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-700 text-sm text-center md:text-left">
            Copyright © 2023 By <span className="font-semibold">DV Printplan</span> All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-3 bg-white hover:bg-black hover:text-white text-black rounded-sm shadow-sm transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 bg-white hover:bg-black hover:text-white text-black rounded-sm shadow-sm transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-3 bg-white hover:bg-black hover:text-white text-black rounded-sm shadow-sm transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-3 bg-white hover:bg-black hover:text-white text-black rounded-sm shadow-sm transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default FooterB
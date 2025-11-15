import { FaTelegramPlane, FaGithub, FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn,FaWhatsapp  } from "react-icons/fa";
import bannerImg from "../assets/k.jpg";

const Banner = () => {
  return (
    <>
      <div className="lg:py-14 md:py-10 py-4 bg-[#E9E9E9]">
        <div className="lg:w-10/12 w-11/12 mx-auto">
          <div className="lg:flex items-center flex-col-reverse lg:flex-row text-center lg:text-left">
            <div className="lg:w-3/6 w-full mt-10 lg:mt-0">
              <div>
                <h2 className="lg:font-extrabold font-bold font-pops text-black lg:text-[67px] md:text-[45px] text-[35px] leading-tight opacity-75">
                  Hello, I’m <br /> Khaledur Rahman
                </h2>
                <p className="font-normal font-pops text-black lg:text-[19px] md:text-[17px] text-[16px] pt-3 opacity-75">
                  Hi! I’m A front end developer – Creating Bold & Brave Interface
                  Design For Companies All Across The World.
                </p>
              </div>
              <div className="lg:mt-4 mt-3">
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 lg:gap-6 py-6">
                  <button className="flex items-center gap-2 text-white bg-linear-to-r from-blue-500 to-cyan-400 font-semibold px-6 py-3 rounded-full e hover:shadow-lg hover:shadow-blue-400/40 transition-all duration-300 cursor-pointer">
                    HIRE ME
                    <FaTelegramPlane className="text-lg" />
                  </button>

                  <p className="font-pops text-black text-[17px] opacity-75 font-medium whitespace-nowrap">
                    Check Out My :
                  </p>

                  <div className="flex items-center gap-3 lg:gap-4">
                    <a
                      href="https://github.com/khaled6013"
                      target="_blank"
                      className="border border-black rounded-full p-3 hover:bg-black hover:text-white transition-all duration-300"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="#"
                      className="border border-black rounded-full p-3 hover:bg-black hover:text-white transition-all duration-300"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="https://web.whatsapp.com/"
                      target="_blank"
                      className="border border-black rounded-full p-3 hover:bg-black hover:text-white transition-all duration-300"
                    >
                      <FaWhatsapp />
                    </a>
                    <a
                      href="https://x.com/khaledur_r62302"
                      target="_blank"
                      className="border border-black rounded-full p-3 hover:bg-black hover:text-white transition-all duration-300"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="https://www.facebook.com/pk.khaled.7"
                      target="_blank"
                      className="border border-black rounded-full p-3 hover:bg-black hover:text-white transition-all duration-300"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="https://www.instagram.com/_kha_led_0/"
                      target="_blank"
                      className="border border-black rounded-full p-3 hover:bg-black hover:text-white transition-all duration-300"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-3/6 w-full flex justify-center">
              <div className="p-1 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full inline-block lg:block">
                <img
                  src={bannerImg}
                  alt="bannerImg"
                  className="w-[250px] md:w-[300px] lg:w-[350px] rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

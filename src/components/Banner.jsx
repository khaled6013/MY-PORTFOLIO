import { FaTelegramPlane, FaGithub, FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import bannerImg from "../assets/k.jpg";

const Banner = () => {
  return (
    <>
      <div className="lg:py-14 md:py-10 py-4 bg-[#E9E9E9]">
        <div className="lg:w-10/12 w-11/12 mx-auto">
          <div className="lg:flex items-center flex-col-reverse lg:flex-row text-center lg:text-left">
            {/* Left Content */}
            <div className="lg:w-3/6 w-full mt-10 lg:mt-0">
              <div>
                <h2 className="lg:font-extrabold font-bold font-pops text-black lg:text-[67px] md:text-[45px] text-[35px] leading-tight opacity-[75%]">
                  Hello, I’m <br /> Khaledur Rahman
                </h2>
                <p className="font-normal font-pops text-black lg:text-[19px] md:text-[17px] text-[16px] pt-3 opacity-[75%]">
                  Hi! I’m A front end developer – Creating Bold & Brave Interface
                  Design For Companies All Across The World.
                </p>
              </div>

              {/* Hire Me + Social Icons */}
              <div className="lg:mt-4 mt-3">
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 lg:gap-6 py-6">
                  <button className="flex items-center gap-2 bg-[#FDC76B] border-[#FDC76B] border-2 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:border-black hover:text-white">
                    HIRE ME
                    <FaTelegramPlane className="text-lg" />
                  </button>

                  <p className="font-pops text-black text-[17px] opacity-[75%] font-medium whitespace-nowrap">
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
                      href="#"
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
                      href="#"
                      className="border border-black rounded-full p-3 hover:bg-black hover:text-white transition-all duration-300"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-3/6 w-full flex justify-center">
              <img
                src={bannerImg}
                alt="bannerImg"
                className="w-[250px] md:w-[300px] lg:w-[350px] rounded-full border-[#FDC76B] border-4 object-cover lg:block hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

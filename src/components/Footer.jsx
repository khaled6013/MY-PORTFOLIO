import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div id="contact" className="bg-[#E9E9E9] lg:py-20 py-10">
                <div className="lg:w-11/12 w-10/12 mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="font-pops lg:font-extrabold font-bold text-black lg:text-[67px] md:text-[45px] text-[32px] opacity-75 leading-tight">
                            Let's Get In Touch With Me.
                        </h2>
                    </div>
                    <div className="lg:w-4/6 mx-auto">
                        <form className="flex flex-col items-center gap-5">
                            <div className="w-full flex flex-col md:flex-row justify-between gap-5">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="flex-1 bg-white px-5 py-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="flex-1 bg-white px-5 py-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                                />
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    className="flex-1 bg-white px-5 py-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                                />
                            </div>
                            <textarea
                                rows="4"
                                placeholder="How can I help you?"
                                className="w-full bg-white px-5 py-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                            ></textarea>
                            <button
                                type="submit"
                                className="text-white bg-linear-to-r from-blue-500 to-cyan-400 font-semibold tracking-wide py-3 px-10 rounded-sm hover:shadow-lg hover:shadow-blue-400/40 transition-all duration-300 cursor-pointer"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                    <div className="lg:w-4/6 mx-auto mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center w-full md:w-1/2 bg-white border border-gray-300 rounded-md px-8 py-6 gap-5 shadow-sm hover:shadow-md transition-all duration-300">
                            <IoCall className="text-[30px] text-blue-500" />
                            <div>
                                <p className="text-gray-700 text-sm font-medium mb-1">
                                    Phone Number
                                </p>
                                <p className="text-black text-lg font-semibold">
                                    +8801791592180
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center w-full md:w-1/2 bg-white border border-gray-300 rounded-md px-8 py-6 gap-5 shadow-sm hover:shadow-md transition-all duration-300">
                            <MdEmail className="text-[30px] text-blue-500" />
                            <div>
                                <p className="text-gray-700 text-sm font-medium mb-1">Email</p>
                                <p className="text-black text-lg font-semibold">
                                    kmd601384@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;

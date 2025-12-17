import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
const Nav = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="lg:py-4 py-3 bg-white">
                <div className="lg:w-10/12 w-11/12 mx-auto">
                    <div className="lg:flex items-center justify-between">
                        <div className="lg:flex items-center lg:w-3/4 w-full">
                            <h2 className="lg:font-extrabold font-bold font-pops text-black lg:text-[40px] text-[30px] cursor-pointer">KHALED</h2>
                            <div className="lg:ml-20 lg:mt-0 mt-3">
                                <ul className={`lg:flex items-center lg:justify-start text-center duration-200 ease-in-out ${open == true ? "block" : "hidden"}`}>
                                    <li className='lg:pt-0 pt-1'>
                                        <a href="#" className="font-medium font-pops text-black hover:text-[#FDC76B] lg:text-[19px] text-[16px]">About Me</a>
                                    </li>
                                    <li className='lg:pt-0 pt-1'>
                                        <a href="#" className="font-medium font-pops text-black hover:text-[#FDC76B] lg:text-[19px] text-[16px] lg:pl-10">Skill</a>
                                    </li>
                                    <li className='lg:pt-0 pt-1'>
                                        <a href="#" className="font-medium font-pops text-black hover:text-[#FDC76B] lg:text-[19px] text-[16px] lg:pl-10">Project</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="lg:w-1/4 w-full lg:mt-0 mt-3">
                            <div className="flex items-center lg:justify-between justify-center lg:gap-x-0 gap-x-2">
                                <a
                                    href="https://drive.google.com/uc?export=download&id=1nec1Mgm40gvmmEpfFsgj2N4mHESMEG-i"
                                    className="lg:py-[13px] py-[9px] lg:px-[30px] px-[21px] text-white bg-linear-to-r from-blue-500 to-cyan-400 rounded-[30px] font-pops lg:font-medium uppercase hover:shadow-lg hover:shadow-blue-400/40 transition-all duration-300 lg:ml-10">
                                    Download CV
                                </a>
                                <a href="#" className="lg:py-[13px] py-[9px] lg:px-[30px] px-[21px] text-white bg-linear-to-r from-blue-500 to-cyan-400 rounded-[30px] font-pops lg:font-medium  uppercase hover:shadow-lg hover:shadow-blue-400/40 transition-all duration-300 ">Contact</a>
                            </div>
                        </div>
                        <div className="lg:hidden absolute top-[23px] right-3" onClick={() => setOpen(!open)}>
                            {open ? <RxCross2 className="text-[26px]" /> : <FaBars className="text-[26px]" />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
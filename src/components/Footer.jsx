import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io5";
import ara from "../../public/assets/Ara.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { useState } from "react";
// import {HashLink as Link} from "react-router-hash-link"
import { Link } from "react-router-dom"

const Footer = () => {
  const [showSubscription, setShowSubscription] = useState(false);

  const handleToggleSubscription = () => {
    setShowSubscription((prev) => !prev); // Toggle visibility
  };

  // const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#121C27] w-full h-full pt-[80px] pb-5  overflow-x-hidden">
        <div className="flex flex-col justify-center items-center res-width gap-x-[20rem]">
          <div className="flex flex-row gap-x-[20rem] max-sm:flex-col gap-y-5">
            <div className="flex flex-col">
              {/* Left section */}
              <div className="max-sm:flex flex-col items-start">
                <img src={ara} alt="" className="max-sm:ml-6"/>
                <p className="text-white font-Blinker font-light text-pretty w-[29rem] pt-7 max-sm:ml-7 max-sm:w-[20rem]">
                  We understand that business can be chaotic. That’s where we
                  come in. We’re focused on adding some much-needed balance to
                  the mix.
                </p>
                <h3 className="text-white font-Blinker font-semibold text-xl pt-8 max-sm:ml-7">
                  Company Information
                </h3>
                <p className="text-white font-Blinker font-light w-[29rem] pt-5 max-sm:w-[18rem] max-sm:ml-7">
                  <strong>Office</strong>: 2220 Plymouth Rd #302, Hopkins, Minnesota(MN), 55305 <br />
                  <strong>Send Mail</strong>: Herringtonconsulting@gmail.com Call us: (234)
                  109-6666
                </p>
              </div>

              {/* Social Media handles */}
              <div className="flex flex-row mt-12 gap-x-3 max-sm:ml-7">
                <div>
                  <Link to="https://armouriq.com/" target="_blank">
                    <FaXTwitter color="white" size={25} className="ml-5 cursor-pointer" />
                  </Link>
                </div>
                <div>
                  <Link to="https://armouriq.com/" target="_blank">
                    <LuLinkedin color="white" size={25} className="ml-5 cursor-pointer" />
                  </Link>
                </div>
                <div>
                  <Link to="https://armouriq.com/" target="_blank">
                    <IoLogoInstagram color="white" size={25} className="ml-5 cursor-pointer" />
                  </Link>
                </div>
              </div>
            </div>
            {/*Division*/}
            {/* <div className="bg-[#FFFFFFA3] w-[1px] h-96"></div> */}
            {/*Third section*/}
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-row gap-x-[50px] max-sm:gap-x-[30px] max-sm:ml-7">
                {/* Our services */}
                <div className="">
                  <h1 className="text-white font-Blinker font-semibold text-xl pt-8">
                    Our Services
                  </h1>
                  <div className="text-white font-Blinker font-light pt-3 flex flex-col gap-y-3">
                    <h3>Business growth consulting</h3>
                    {/* <h3>Search Engine Optimization</h3> */}
                    <h3>Conversion Optimization</h3>
                    {/* <h3>Managed IT services</h3> */}
                  </div>
                </div>
                {/* Quick Links */}
                <div>
                  <h1 className="text-white font-Blinker font-semibold text-xl pt-8">
                    Quick Links
                  </h1>
                  <div className="text-white font-Blinker font-light pt-3 flex flex-col gap-y-3">
                    <Link to="/">Home</Link>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#clients">Clients</a>
                    <a href="#growth">FAQs</a>
                  </div>
                </div>
              </div>
              <div className="max-sm:ml-4">
                <div className="bg-[#2D2F36] w-[22rem] h-12 rounded-full shadow-lg flex flex-row justify-between items-center px-4">
                  <p
                    className="text-white font-Blinker font-light text-sm truncate"
                  >
                    Don’t miss the latest news from us...
                  </p>
                  <div className="relative">
                    <Popover>
                      <PopoverTrigger asChild>
                        <button className="bg-[#525961] text-white p-2 px-4 rounded-full cursor-pointer">
                          Subscribe
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-64 bg-white p-4 rounded-xl shadow-2xl">
                        <p className="text-gray-600 mb-2">Get the latest updates and news.</p>
                        <input
                          className="border-gray-300 border-[1px] rounded-full text-gray-600 w-full text-sm p-2 pl-4"
                          placeholder="Enter your email"
                        />
                        <button className="font-Blinker font-medium text-white bg-[#525961] p-2 w-full rounded-full mt-3 text-sm transition-transform duration-200 hover:scale-105">
                          Subscribe Now!
                        </button>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>


            </div>
          </div>
          {/* Copyright */}
          <hr className="border-t-2 border-gray-500 mt-6 w-screen max-sm:mt-9" />
          <div className="text-white font-Blinker font-light mt-3 ml-3 max-sm:mt-6">
            Copyright © 2024 . All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
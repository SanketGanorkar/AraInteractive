import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#121C27] w-full h-full pt-[80px] pb-5  overflow-x-hidden">
        <div className="flex flex-col justify-center items-center res-width gap-x-[20rem]">
          <div className="flex flex-row gap-x-[20rem] max-sm:flex-col gap-y-5">
            <div className="flex flex-col">
              <div className="max-sm:flex flex-col items-start">
                <h1 className="text-white font-Blinker font-semibold text-3xl max-sm:ml-7">
                  ARA Interactive
                </h1>
                <h2 className="text-white font-Blinker font-thin text-[15px] max-sm:ml-7">
                  Attract Retain Achieve
                </h2>
                <p className="text-white font-Blinker font-light text-pretty w-[29rem] pt-7 max-sm:ml-7 max-sm:w-[20rem]">
                  We understand that business can be chaotic. That’s where we
                  come in. We’re focused on adding some much-needed balance to
                  the mix.
                </p>
                <h3 className="text-white font-Blinker font-semibold text-xl pt-8 max-sm:ml-7">
                  Company Information
                </h3>
                <p className="text-white font-Blinker font-light w-[29rem] pt-5 max-sm:w-[18rem] max-sm:ml-7">
                  Office: 2220 Plymouth Rd #302, Hopkins, Minnesota(MN), 55305
                  Send mail: Herringtonconsulting@gmail.com Call us: (234)
                  109-6666
                </p>
              </div>

              <div className="flex flex-row mt-12 gap-x-3 ml-9 max-sm:ml-7">
                <div>
                  <FaXTwitter color="white" size={25} className="ml-3" />
                  <h4 className="text-white font-Blinker font-light">
                    Twitter
                  </h4>
                </div>
                <div>
                  <LuLinkedin color="white" size={25} className="ml-4" />
                  <h4 className="text-white font-Blinker font-light">
                    LinkedIn
                  </h4>
                </div>
                <div>
                  <IoLogoInstagram color="white" size={25} className="ml-5" />
                  <h4 className="text-white font-Blinker font-light">
                    Instagram
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-row gap-x-[50px] max-sm:gap-x-[30px] max-sm:ml-7">
                <div className="">
                  <h1 className="text-white font-Blinker font-semibold text-xl pt-8">
                    Our Services
                  </h1>
                  <div className="text-white font-Blinker font-light pt-3 flex flex-col gap-y-3">
                    <h3>Business growth consulting</h3>
                    <h3>Search Engine Optimization</h3>
                    <h3>Conversion Optimization</h3>
                    <h3>Managed IT services</h3>
                  </div>
                </div>
                <div>
                  <h1 className="text-white font-Blinker font-semibold text-xl pt-8">
                    Quick Links
                  </h1>
                  <div className="text-white font-Blinker font-light pt-3 flex flex-col gap-y-3">
                    <h3>Home</h3>
                    <h3>About Us</h3>
                    <h3>Service</h3>
                    <h3>Clients</h3>
                    <h3>FAQs</h3>
                  </div>
                </div>
              </div>
              <div className="max-sm:ml-4">
                <div className="bg-[#525961] w-[21rem] h-10 rounded-3xl flex flex-row justify-around items-center">
                  <p className="text-white font-Blinker font-light">
                    Don’t miss the latest news from us....
                  </p>
                  <FaArrowRight color="white" size={15} />
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

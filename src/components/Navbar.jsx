import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { HiArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom"
import ara from "../../public/assets/Ara.png";

const Navbar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const handleMenuClick = () => {
    setVisibleMenu(false);
  };

  const navigate = useNavigate();
  return (
    <div className="bg-navbg min-h-[100px] bg-no-repeat bg-cover flex justify-center items-center">
      <div className="res-width flex flex-row items-center justify-between gap-x-16">
        {/* Logo and Heading */}
        <div className="flex flex-col">
          <img src={ara} alt="" className="md:h-16 cursor-pointer h-12" onClick={() => navigate('/')} />
        </div>

        {/* Burger Menu Icon for Mobile */}
        <div className="md:hidden max-sm:ml-auto max-sm:-mr-10" onClick={() => setVisibleMenu(!visibleMenu)}>
          {visibleMenu ? (
            <RxCross2 size={28} className="cursor-pointer" color="white" />
          ) : (
            <IoMdMenu size={28} className="cursor-pointer" color="white" />
          )}
        </div>

        {/* Menu Items (for larger screens) */}
        <div className="flex flex-row gap-x-10">
          <ul className="hidden md:flex flex-row gap-x-8 text-white font-Comme font-semibold pt-2">
            <li className="uppercase cursor-pointer">
              {/* <a href="#home">Home</a> */}
              <a href="/">Home</a>
            </li>
            <li className="uppercase cursor-pointer" onClick={()=>navigate('/')}>
              <a href="#services">Services</a>
            </li>
            <li className="uppercase cursor-pointer" onClick={()=>navigate('/')}>
              <a href="#about">About us</a>
            </li>
            <li className="uppercase cursor-pointer" onClick={() => navigate('/')}>
            <a href="#blogs">Blogs</a>
            </li>
          </ul>
          <div className="uppercase cursor-pointer bg-[#434c51] p-2 text-white rounded-xl text-[13px] font-bold mb-1 max-sm:hidden flex hover:text-black hover:bg-white ">
           <h3>Plan With Us</h3>
           <HiArrowLongRight className="mt-1 ml-2"/>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {visibleMenu && (
        <div className="fixed top-[70px] right-0 w-[12rem] h-[13rem] bg-white text-black font-bold z-50 flex flex-col p-1">
          {/* Mobile Menu Items */}
          <ul className="flex flex-col gap-6 mt-3 ml-6">
            <li className="uppercase cursor-pointer">
              <a href="/" onClick={handleMenuClick}>
                Home
              </a>
            </li>
            <li className="uppercase cursor-pointer">
              <a href="#services" onClick={handleMenuClick}>
                Services
              </a>
            </li>
            <li className="uppercase cursor-pointer">
              <a href="#about" onClick={handleMenuClick}>
                About us
              </a>
            </li>
            <li className="uppercase cursor-pointer">
              <a href="#blogs" onClick={handleMenuClick}>
                Blogs
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

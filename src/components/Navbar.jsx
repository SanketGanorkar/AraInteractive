// import { useState } from "react";
// import { IoMdMenu } from "react-icons/io";
// import { RxCross2 } from "react-icons/rx";
// import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation
// import ara from "../../public/assets/Ara.png";

// const Navbar = () => {
//   const [visibleMenu, setVisibleMenu] = useState(false);

//   const handleMenuClick = () => {
//     setVisibleMenu(false); // Close menu when clicking an item
//   };

//   const navigate = useNavigate();
//   return (
//     <div className="bg-navbg w-screen min-h-[100px] bg-no-repeat bg-cover overflow-x-hidden flex justify-center items-center">
//       <div className="res-width flex flex-row items-center justify-between gap-x-16">
//         {/* Logo and Heading */}
//         <div className="flex flex-col">
//           <img src={ara} alt="" className="h-16 cursor-pointer" onClick={()=> navigate('/')}/>
//         </div>

//         {/* Burger Menu Icon for Mobile */}
//         <div className="md:hidden" onClick={() => setVisibleMenu(!visibleMenu)}>
//           {visibleMenu ? (
//             <RxCross2 size={28} className="cursor-pointer" color="white" />
//           ) : (
//             <IoMdMenu size={28} className="cursor-pointer" color="white" />
//           )}
//         </div>

//         {/* Menu Items (for larger screens) */}
//         <div className="flex flex-row gap-x-10">
//           <ul className="hidden md:flex flex-row gap-x-8 text-white font-Comme font-semibold pt-2">
//             <li className="uppercase cursor-pointer">
//               {/* <a href="#home">Home</a> */}
//               <Link to="/">Home</Link>
//             </li>
//             <li className="uppercase cursor-pointer">
//             <a href="#services">Services</a>
//             </li>
//             <li className="uppercase cursor-pointer">
//               <a href="#about">About us</a>
//             </li>
//             <li className="uppercase cursor-pointer">
//             <a href="#blogs">Blogs</a>
//             </li>
//           </ul>
//           <button className="uppercase cursor-pointer bg-white p-2 text-black rounded-xl text-[13px] font-bold mb-1">
//             Schedule a call
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {visibleMenu && (
//         <div className="fixed top-[70px] right-0 w-[12rem] h-[13rem] bg-white text-black font-bold z-50 flex flex-col p-1">
//           {/* Mobile Menu Items */}
//           <ul className="flex flex-col gap-6 mt-3 ml-6">
//             <li className="uppercase cursor-pointer">
//               <Link to="/" onClick={handleMenuClick}>
//                 Home
//               </Link>
//             </li>
//             <li className="uppercase cursor-pointer">
//               <Link to="/services" onClick={handleMenuClick}>
//                 Services
//               </Link>
//             </li>
//             <li className="uppercase cursor-pointer">
//               <Link to="/welcome" onClick={handleMenuClick}>
//                 About us
//               </Link>
//             </li>
//             <li className="uppercase cursor-pointer">
//               <Link to="/blogs" onClick={handleMenuClick}>
//                 Blogs
//               </Link>
//             </li>
//             {/* <li className="uppercase cursor-pointer">
//               <Link to="/contact" onClick={handleMenuClick}>
//                 Contact Us
//               </Link>
//             </li> */}
//           </ul>
//         </div>
//       )}
//     </div>

// };

// export default Navbar;
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import {Link , useNavigate} from "react-router-dom"
import ara from "../../public/assets/Ara.png";

const Navbar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const handleMenuClick = () => {
    setVisibleMenu(false);
  };

  const navigate = useNavigate();
  return (
    <div className="bg-navbg w-screen min-h-[100px] bg-no-repeat bg-cover overflow-x-hidden flex justify-center items-center">
      <div className="res-width flex flex-row items-center justify-between gap-x-16">
        {/* Logo and Heading */}
        <div className="flex flex-col">
          <img src={ara} alt="" className="h-16 cursor-pointer" onClick={() => navigate('/')} />
        </div>

        {/* Burger Menu Icon for Mobile */}
        <div className="md:hidden" onClick={() => setVisibleMenu(!visibleMenu)}>
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
            <li className="uppercase cursor-pointer">
              <a href="#services">Services</a>
            </li>
            <li className="uppercase cursor-pointer">
              <a href="#about">About us</a>
            </li>
            <li className="uppercase cursor-pointer">
              <a href="#blogs">Blogs</a>
            </li>
          </ul>
          <button className="uppercase cursor-pointer bg-white p-2 text-black rounded-xl text-[13px] font-bold mb-1">
            Schedule a call
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {visibleMenu && (
        <div className="fixed top-[70px] right-0 w-[12rem] h-[13rem] bg-white text-black font-bold z-50 flex flex-col p-1">
          {/* Mobile Menu Items */}
          <ul className="flex flex-col gap-6 mt-3 ml-6">
            <li className="uppercase cursor-pointer">
              <Link smooth to="/" onClick={handleMenuClick}>
                Home
              </Link>
            </li>
            <li className="uppercase cursor-pointer">
              <Link smooth to="#services" onClick={handleMenuClick}>
                Services
              </Link>
            </li>
            <li className="uppercase cursor-pointer">
              <Link  smooth to="#welcome" onClick={handleMenuClick}>
                About us
              </Link>
            </li>
            <li className="uppercase cursor-pointer">
              <Link smooth to="#blogs" onClick={handleMenuClick}>
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

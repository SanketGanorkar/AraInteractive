import Marquee from "react-fast-marquee";
import suzie from "../../public/assets/suzie.png";
import nudgebee from "../../public/assets/nudgebee.png";
import cashmap from "../../public/assets/cashmap.png";
import dhenoo from "../../public/assets/dhenoo.png";
import foodin from "../../public/assets/foodin.png";
import nautical_staffing from "../../public/assets/nautical_staffing.png";

const Clients = () => {
  return (
    <div className="bg-white w-full py-10 px-5 flex flex-col justify-center items-center overflow-x-hidden">
      {/* <h1 className="font-Blinker font-light">Recognized By The Best</h1> */}
      <h2 className="font-Blinker font-semibold text-4xl">
        Featured Clients
      </h2>
      {/* <h3 className="font-Blinker font-light text-[17px] max-sm:text-center max-sm:mt-3">
        Here are some of the companies ARA Interactive has empowered to forge
        ahead with confidence
      </h3> */}
      <Marquee autoFill pauseOnClick speed={55} className="mt-8 ">
        <img
          src={nautical_staffing}
          className="w-29 h-20 m-1 grayscale hover:filter hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer md:mx-9 max-sm:mx-3"
        />
        <img
          src={cashmap}
          className="w-29 h-20 m-1 grayscale hover:filter hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer md:mx-9 max-sm:mx-3"
        />
        <img
          src={nudgebee}
          className="w-29 h-20 m-1 grayscale hover:filter hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer md:mx-9 max-sm:mx-3"
        />
        <img
          src={foodin}
          className="w-27 h-18 m-1 grayscale hover:filter hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer md:mx-9 max-sm:mx-3"
        />
        <img
          src={suzie}
          className="w-29 h-20 m-1 grayscale hover:filter hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer md:mx-9 max-sm:mx-3"
        />
        <img
          src={dhenoo}
          className="w-29 h-20 m-1 grayscale hover:filter hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer md:mx-9 max-sm:mx-3"
        />
      </Marquee>
    </div>
  );
};

export default Clients;
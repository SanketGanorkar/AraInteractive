import welcome from "../../public/assets/welcome.png";

const Welcome = () => {
  return (
    <div className="flex items-center justify-center bg-[#E7E7E7] w-full" id="about">
      {/* Left part */}
      <div className="md:flex max-sm:flex-col justify-between items-center res-width w-full max-sm:pb-12">
        <img
          src={welcome}
          alt="welcome image"
          className="w-[90%] md:w-[315px] md:h-[398px] max-sm:h-auto mx-auto md:-ml-[63px]" // Adjusted width and height for mobile
        />

        {/* Mid part */}
        <div className="flex md:flex-row px-3 w-full justify-between max-sm:flex-col">
          <div className=""> {/* Center text on mobile */}
            <h1 className="font-Blinker font-extralight text-2xl mt-6">
              Welcome to ARA Interactive
            </h1>
            <h2 className="font-Blinker font-normal text-3xl md:w-[19rem] mt-3 max-sm:w-[90%]"> {/* Adjust width for mobile */}
              Navigating Your Growth Journey Together
            </h2>
            <p className="font-Blinker font-light md:w-[27rem] mt-11 max-sm:w-[90%]">
            We specialize in crafting bespoke marketing strategies that drive tangible results and sustainable success. Whether you’re just starting out or ready to scale, our expertise will guide you every step of the way.
            </p>
            <p className="font-Blinker font-light md:w-[26rem] mt-5 max-sm:w-[90%]">
            Leverage hundreds of customized insights and tactics, honed from real-world experience, to accelerate your path to success.
            </p>
          </div>

          <div className="bg-[#000000A3] h-80 w-[1px] md:mt-3 ml-12 max-sm:hidden opacity-45"></div>

          <div className="flex flex-col md:-ml-[98px] max-sm:mt-5"> {/* Added margin for mobile */}
            <div className="md:mt-[30px] md:ml-8">
              <h1 className="font-Blinker font-normal md:text-4xl max-sm:text-5xl">
                50+
              </h1>
              <h2 className="md:w-32  max-sm:w-[90%]"> {/* Centered on mobile */}
                Growth advice for businesses
              </h2>
            </div>
            <div className="bg-[#000000A3] h-[1px] w-64 md:mt-12 max-sm:mt-6 md:-ml-6"></div>
            <div className="mt-5 text-center max-sm:text-left"> {/* Center text on mobile */}
              <h1 className="md:ml-8 font-Blinker font-semibold text-xl mt-2 text-left">
                Our Mission
              </h1>
              <p className="md:ml-8 w-64 max-sm:w-[80%] max-sm:mt-3 text-left">
                At ARA Interactive, we empower businesses with tailored
                marketing strategies that drive sustainable growth and
                measurable success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

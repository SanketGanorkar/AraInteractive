import welcome from "../../public/assets/welcome.png";
const Welcome = () => {
  return (
    <div className="flex items-center justify-center bg-[#E7E7E7]">
      {/* Left part */}
      <div className="flex justify-between items-center res-width">
        <img
          src={welcome}
          alt="welcome image"
          className="w-[315px] h-[398px] "
        />

        {/* Mid part */}
        <div className="flex flex-row px-3 h-[405px] w-full justify-between">
          <div>
            <h1 className="font-Blinker font-extralight text-2xl mt-12">
              Welcome to ARA Interactive
            </h1>
            <h2 className="font-Blinker font-normal text-3xl w-[19rem] mt-3">
              Navigating Your Growth Journey Together
            </h2>
            <p className="font-Blinker font-light w-[27rem] mt-11">
              At ARA Interactive, we’re more than a marketing agency—we’re your
              growth partner. We specialize in creating tailored marketing
              strategies that deliver real results and long-term success.
            </p>
            <p className="font-Blinker font-light w-[26rem] mt-5">
              Our team takes the time to understand your business, set clear
              goals, and guide you through every step of your growth journey.
              Let’s unlock your full potential together.
            </p>
          </div>
          <div className="bg-[#000000A3] h-72 w-[1px] mt-12 ml-12"></div>
          <div className="flex flex-col">
            <div className=" mt-[60px]">
              <h1 className="font-Blinker font-normal text-4xl mt-12">2530+</h1>
              <h2 className="text-balance">Growth advice for businesses</h2>
            </div>
            <div className="bg-[#000000A3] h-[1px] w-60 mt-12"></div>
            <div>
              <h1 className="ml-[10px] font-Blinker font-normal text-xl mt-6">
                Our Mission
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

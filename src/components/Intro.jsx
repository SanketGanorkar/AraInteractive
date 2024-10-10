import Features from "./Features.jsx";
const Intro = () => {
  return (
    <>
      <div className="bg-introbg w-screen bg-no-repeat bg-cover relative overflow-x-hidden flex flex-col justify-center items-center res-width2 max-sm:h-[430px] md:h-[80vh]">
        <div className="flex flex-col justify-center h-full res-width">
          {/* <button className="uppercase cursor-pointer bg-white p-2 text-black rounded-xl text-[13px] font-bold mb-4 w-32 md:hidden -mt-3 max-sm:ml-4 max-sm:cursor-pointer">
            Book a call
          </button> */}
          <h1 className="text-white font-Blinker text-[45px] leading-10 font-normal md:w-[36rem] max-sm:w-[20rem] max-sm:ml-4">
            Unlock Your Growth Potential
          </h1>
          <p className="text-white font-Blinker font-light pt-5 w-[30rem] max-sm:w-[345px] max-sm:text-[13px] max-sm:mt-3 max-sm:ml-4">
            Transform your business with tailored marketing strategies that drive real results. Partner with us to navigate your growth journey, from market fit to successful scaling. Let’s achieve your goals together!
          </p>
          <button className="uppercase cursor-pointer bg-white p-2 text-black rounded-xl text-[13px] font-bold mb-4 w-32 md:hidden -mt-3 max-sm:ml-4 max-sm:cursor-pointer">
            Book a call
          </button>
        </div>
      </div>
      <Features />
    </>
  );
};

export default Intro;

import Features from "./Features.jsx";
const Intro = () => {
  return (
    <>
      <div className="bg-introbg w-screen bg-no-repeat bg-cover relative overflow-x-hidden flex flex-col justify-center items-center res-width2 max-sm:h-[430px]">
        <div className="flex flex-col justify-center h-full res-width">
          <h1 className="text-white font-Blinker text-[45px] leading-10 font-normal w-[36rem]">
          Unlock Your Growth Potential
          </h1>
          <p className="text-white font-Blinker font-light pt-5 w-[30rem] max-sm:w-[395px] max-sm:text-[13px] max-sm:mt-3">
          Transform your business with tailored marketing strategies that drive real results. Partner with us to navigate your growth journey, from market fit to successful scaling. Let’s achieve your goals together!
          </p>
        </div>
      </div>
      <Features />
    </>
  );
};

export default Intro;

import Features from "./Features.jsx";
const Intro = () => {
  return (
    <>
      <div className="bg-introbg w-screen bg-no-repeat bg-cover relative overflow-x-hidden flex flex-col justify-center items-center res-width2 max-sm:h-[430px]">
        <div className="flex flex-col justify-center h-full res-width">
          <h1 className="text-white font-Blinker text-4xl leading-10 font-normal w-[22rem]">
            Grow Faster with our
            <br />
            all-in-one marketing <br />
            platform
          </h1>
          <p className="text-white font-Blinker font-light pt-5 w-[30rem] max-sm:w-[395px] max-sm:text-[13px] max-sm:mt-3">
            We're not just a marketing agency—we're your growth partner. Our{" "}
            <br />
            experts understand your business, set clear goals, and deliver
            tailored <br />
            solutions that drive results.
          </p>
        </div>
      </div>
      <Features />
    </>
  );
};

export default Intro;

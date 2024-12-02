
const Welcome = () => {
  return (
    <>
      <div className="bg-[#E7E7E7] w-screen min-h-[34rem] flex justify-center items-center" id="about">
        <div className="relative res-width4 h-[100%] flex max-lg:flex-col justify-between">
          <div className="flex max-md:flex-col gap-6 xl:gap-10 lg:w-[50%] max-lg: items-center">
            <img
              src="/assets/welcome.png"
              alt=""
              className="h-full max-lg:h-[30rem] object-contain"
            />
            <div className="h-full flex flex-col justify-center w-[80%]">
              <h1 className="font-Blinker font-extralight text-2xl md:-mt-3">
                Welcome to ARA Interactive
              </h1>
              <h2 className="font-Blinker font-normal text-3xl md:w-[19rem] mt-3">
                Navigating Your Growth Journey Together
              </h2>
              <p className="font-Blinker font-light mt-11">
                We specialize in crafting bespoke marketing strategies that drive tangible results and sustainable success. Whether you’re just starting out or ready to scale, our expertise will guide you every step of the way.
              </p>
              <p className="font-Blinker font-light mt-5">
                Leverage hundreds of customized insights and tactics, honed from real-world experience, to accelerate your path to success.
              </p>
            </div>
          </div>
          <div className="min-h-full flex justify-center relative">
            <div className="absolute left-0 top-[50%] max-lg:hidden -translate-y-[50%] h-[20rem] w-[1.2px] bg-black" />
            <div className="min-h-full max-sm:w-[25rem] flex lg:flex-col justify-center items-center max-lg:py-8">
              <div className="lg:pl-8 lg:pb-8 max-sm:pr-8">
                <h1 className="font-Blinker font-normal md:text-4xl max-sm:text-5xl">50+</h1>
                <p className="sm:w-44 max-sm:mt-3 text-left">
                  Growth advice for businesses
                </p>
              </div>
              <div className="h-[6rem] lg:h-[1.2px] w-[1.2px] lg:w-[20rem] bg-black" />
              <div className="pl-8 lg:pt-8">
                <h1 className="font-Blinker font-semibold text-xl text-left">Our Mission</h1>
                <p className="sm:w-64 max-sm:mt-3 text-left">
                  At ARA Interactive, we empower businesses with tailored
                  marketing strategies that drive sustainable growth and
                  measurable success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
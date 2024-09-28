import growth1 from "../../public/assets/growth1.png";
const Growth1 = () => {
  return (
    <div className="bg-[#F1EEEE]">
      <div className="flex justify-center items-center">
        <div className="flex flex-row justify-start gap-x-20 pt-[70px] res-width">
          <img src={growth1} alt="" className="h-[30rem]" />
          <div className="flex flex-col">
            <h1 className="font-Blinker font-normal  w-[580px] mt-12 text-[42px]">
              Scale, Growth and Optimizing as Fast as you need to.
            </h1>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <h2 className="font-Blinker font-normal w-[380px] mt-12 text-2xl">
                  "Our team is our greatest asset, which is why we’re passionate
                  about bringing together the brightest minds and empowering
                  them to make a lasting impact."
                </h2>
                <h3 className="font-Blinker font-normal text-2xl mt-7">Ashutosh Pandey</h3>
                <h4 className="font-Blinker font-light text-[#8E8E8E]">Growth Marketing Consultant - ARA Interactive</h4>
              </div>

              <div className="bg-[#000000A3] h-64 w-[1px] mt-5 ml-12"></div>
              <div className="flex flex-col">
                <h4 className="font-Blinker font-normal text-2xl ml-12">
                  some FAQ here
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth1;

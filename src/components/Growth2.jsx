import { TiTick } from "react-icons/ti";

const Growth2 = () => {
  const arr = [
    {
      title: "We Listen",
      desc: "Override the digital divide with additional clickthroughs from DevOps.",
    },
    {
      title: "Process Consulting",
      desc: "Dynamically innovate customer service for state of the art customer.",
    },
    {
      title: "We Listen",
      desc: "Override the digital divide with additional clickthroughs from DevOps.",
    },
  ];

  return (
    <div className="bg-[#121C27] sm:py-12 py-12 flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-x-[68px] max-sm:px-4">
          {arr.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center w-full sm:w-[20%] mb-6 sm:mb-0"
              >
                <div className="bg-[#D9D9D942] rounded-full w-16 h-16 flex items-center justify-center">
                  <TiTick color="white" size={40} />
                </div>
                <h1 className="text-white font-Blinker font-semibold text-[23px] mb-2 mt-3 text-center">
                  {item.title}
                </h1>
                <div className="bg-[#484848] h-[1px] w-full sm:w-40"></div>
                <p className="font-Blinker font-light text-[#929292] mt-2 text-center text-balance">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Growth2;

import analysis from "/assets/analysis.png";
import strategy from "/assets/strategy.png";
import execution from "/assets/execution.png";
const Succeed = () => {
  const features = [
    {
      pic: analysis,
      title: "Analysis",
      content:
        "We take time and effort to accurately review everything about your business and your industry.",
    },
    {
      pic: strategy,
      title: "Strategy",
      content:
        "We create custom strategy that includes tactics that have been previously proven and battle tested with outstanding results.",
    },
    {
      pic: execution,
      title: "Execution",
      content:
        "We get the work done while collaborating with you and our key alliances & partners to achieve results specific to your unique goals.",
    },
  ];
  return (
    <div className="bg-white w-full py-10 px-5 flex flex-col justify-center items-center">
      <h1 className="font-Blinker font-light">Steps to Success</h1>
      <h2 className="font-Blinker font-semibold sm:text-4xl max-sm:text-center max-sm:text-[30px] max-sm:leading-0">
        How we Help your Business Succeed
      </h2>
      <h3 className="font-Blinker font-light text-[17px] max-sm:text-center max-sm:mt-3 max-sm:w-80">
        We help businesses grow through market fit, smart launch plans, and targeted outreach.
      </h3>
      <div className="flex sm:flex-row gap-x-5 mt-12 max-sm:flex-col max-sm:gap-y-8 max-sm:mt-[70px]">
        {features.map((item, index) => (
          <div className="border-[#828282] border-[1px] h-[350px] w-80 flex flex-col justify-center items-center" key={index}>
            <img src={item.pic} alt="logo" className="w-25 max-h-24" />
            <h1 className="font-Blinker font-semibold text-2xl mt-5">{item.title}</h1>
            <p className="font-Blinker font-light text-[15px] pl-2 pr-2 text-center mt-3">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Succeed;

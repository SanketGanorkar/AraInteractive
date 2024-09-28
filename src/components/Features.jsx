import cost_effective from "../../public/assets/cost_effective.png";
import industry_exp from "../../public/assets/industry_exp.png";
import innovative from "../../public/assets/innovative.png";
import scalability from "../../public/assets/scalability.png";
const Features = () => {
  const features = [
    {
      pic: cost_effective,
      title: "Cost-Effectiveness",
      content:
        "We guarantee to provide affordable business consulting solutions that help you reduce costs and improve your profits.",
    },
    {
      pic: innovative,
      title: "Innovative Technology",
      content:
        "We guarantee to provide affordable business consulting solutions that help you reduce costs and improve your profits.",
    },
    {
      pic: industry_exp,
      title: "Industry Expertise",
      content:
        "We guarantee to provide affordable business consulting solutions that help you reduce costs and improve your profits.",
    },
    {
      pic: scalability,
      title: "Scalability",
      content:
        "We guarantee to provide affordable business consulting solutions that help you reduce costs and improve your profits.",
    },
  ];
  return (
    <div className="bg-white w-screen h-[400px] mt-10 flex flex-row items-center justify-center  overflow-x-hidden">
      <div className="max-sm:flex-col max-sm:gap-y-5 flex flex-row justify-center items-center res-width gap-x-5">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col">
            <img src={item.pic} className="w-[70px] h-[70px] " />
            <h1 className="pt-5 font-Blinker font-semibold text-xl">
              {item.title}
            </h1>
            <p className="pt-3 text-balance font-Blinker font-extralight leading-5 text-[17px]">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

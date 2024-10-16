import industry_exp from "../../public/assets/industry.png";
import innovative from "../../public/assets/innovative.png";
// import scalability from "../../public/assets/scalability.png";
import customized_solutions from "../../public/assets/customized_solutions.png";
import proven_track from "../../public/assets/proven_track.png";

const Features = () => {
  const features = [
    {
      pic: industry_exp,
      title: "Industry Expertise",
      content:
        "Benefit from our deep knowledge across various sectors, ensuring strategies that resonate with your specific market needs.",
    },
    {
      pic: innovative,
      title: "Data-Driven Insights",
      content:
        "Leverage market research and analytics to guide your strategic decisions and optimize your growth strategies for better results",
    },
    {
      pic: customized_solutions,
      title: "Customized Solutions",
      content:
        "Experience tailored marketing strategies designed to address your unique challenges and goals, enhancing your competitive edge.",
    },
    {
      pic: proven_track,
      title: "Proven Track Record",
      content:
        "Join a portfolio of successful partnerships where our innovative approaches have consistently delivered tangible results and sustainable growth.",
    },
  ];

  return (
    <div className="bg-white w-screen max-sm:mt-6 md:mt-10 flex justify-center items-center overflow-x-hidden md:mb-6">
      <div className="flex flex-row max-sm:flex-col max-sm:gap-y-5 justify-center items-center res-width gap-x-5 max-sm:mr-6 md:h-72">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-full max-sm:w-[90%] p-5 h-full"
          >
            <img src={item.pic} className="w-[70px] h-[70px]" alt={item.title} />
            <div>
              <h1 className="pt-5 font-Blinker font-semibold text-xl">
                {item.title}
              </h1>
              <p className="pt-3 text-black font-Blinker font-light leading-5 text-[17px] max-sm:w-64">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

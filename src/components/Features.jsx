import industry_exp from "/assets/industry.png";
import innovative from "/assets/innovative.png";
// import scalability from "../../assets/scalability.png";
import customized_solutions from "/assets/customized_solutions.png";
import proven_track from "/assets/proven_track.png";

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
      <div className="res-width4 grid sm:grid-cols-2 lg:grid-cols-4 mb-10 place-content-center">
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
        {/* <div
            className="flex flex-col w-full max-sm:w-[90%] p-5 h-full"
          >
            <img src={industry_exp} className="w-[70px] h-[70px]" alt="industry_exp"/>
            <div>
              <h1 className="pt-5 font-Blinker font-semibold text-xl">
              Industry Expertise
              </h1>
              <p className="pt-3 text-black font-Blinker font-light leading-5 text-[17px] max-sm:w-64">
              Benefit from our deep knowledge across various sectors, ensuring strategies that resonate with your specific market needs.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col w-full max-sm:w-[90%] p-5 h-full"
          >
            <img src={innovative} className="w-[70px] h-[70px]" alt="industry_exp"/>
            <div>
              <h1 className="pt-5 font-Blinker font-semibold text-xl">
              Industry Expertise
              </h1>
              <p className="pt-3 text-black font-Blinker font-light leading-5 text-[17px] max-sm:w-64">
              Benefit from our deep knowledge across various sectors, ensuring strategies that resonate with your specific market needs.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col w-full max-sm:w-[90%] p-5 h-full"
          >
            <img src={customized_solutions} className="w-[70px] h-[70px]" alt="industry_exp"/>
            <div>
              <h1 className="pt-5 font-Blinker font-semibold text-xl">
              Industry Expertise
              </h1>
              <p className="pt-3 text-black font-Blinker font-light leading-5 text-[17px] max-sm:w-64">
              Benefit from our deep knowledge across various sectors, ensuring strategies that resonate with your specific market needs.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col w-full max-sm:w-[90%] p-5 h-full"
          >
            <img src={proven_track} className="w-[66px] h-[82px]" alt="industry_exp"/>
            <div>
              <h1 className="pt-5 font-Blinker font-semibold text-xl">
              Industry Expertise
              </h1>
              <p className="pt-3 text-black font-Blinker font-light leading-5 text-[17px] max-sm:w-64">
              Benefit from our deep knowledge across various sectors, ensuring strategies that resonate with your specific market needs.
              </p>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default Features;

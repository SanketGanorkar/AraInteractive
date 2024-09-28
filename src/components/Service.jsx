import blog from "../../public/assets/blog.png";
import scaling from "../../public/assets/scaling.png";
import outbound from "../../public/assets/outbound.png";

const Services = () => {
  const features = [
    {
      pic: blog,
      title: "Market Fit",
      content:
        "Finding the right product-market fit is key to success. We help you target the right audience and refine your offering to meet their needs and stand out.",
    },
    {
      pic: scaling,
      title: "Scaling",
      content:
        "Ready to scale your business? Our strategies optimize processes, expand reach, and drive sustainable growth for lasting success and profitability.",
    },
    {
      pic: outbound,
      title: "Outbound",
      content:
        "Reach your ideal customers with our targeted outbound marketing services. We create campaigns that drive engagement, generate leads, and foster meaningful connections.",
    },
  ];

  return (
    <div className="bg-white w-full py-10 px-5 flex flex-col justify-center items-center">
      <h1 className="font-Blinker font-light max-sm:text-center">Explore our expertise</h1>
      <h2 className="font-Blinker font-semibold text-4xl max-sm:text-center max-sm:text-2xl">
        Service for your Developement
      </h2>
      <h3 className="font-Blinker font-light text-[17px] max-sm:text-center max-sm:mt-3">
        We provide the best services, ensuring your outstanding growth
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto max-sm:mt-3">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-left p-5 bg-white shadow-lg rounded-lg transition-transform transform hover:shadow-2xl"
          >
            <img
              src={item.pic}
              alt={item.title}
              className="w-full h-[170px] object-cover"
            />

            <h1 className="pt-5 font-Blinker font-semibold text-xl text-left">
              {item.title}
            </h1>

            <p className="pt-3 text-pretty font-Blinker font-light leading-5 text-[17px] ">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

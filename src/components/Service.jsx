import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./caraousel.css";
import market_fit from "/assets/market_fit.png";
import gtm from "/assets/gtm.png";
import outbound from "/assets/outbound.png";
import scaling from "/assets/scaling.png";
import crm from "/assets/crm.png";

const Services = () => {
  const features = [
    {
      pic: market_fit,
      title: "Market Fit",
      content:
        "We help you identify and refine your target audience, ensuring your product aligns with market needs. Using a data-driven approach, we'll validate your product concept & boost its market appeal.",
    },
    {
      pic: gtm,
      title: "GTM (Go-to-Market)",
      content:
        "We create strategic go-to-market plans to build momentum and maximize visibility. From market research and positioning to messaging and distribution, we ensure a successful product launch.",
    },
    {
      pic: outbound,
      title: "Outbound",
      content:
        "Reach your ideal customers with precision through our targeted outbound marketing campaigns. From email marketing to direct outreach, we drive engagement, generate leads, and build meaningful connections.",
    },
    {
      pic: scaling,
      title: "Scaling",
      content:
        "Ready to scale your business? Our tailored strategies optimize processes, expand reach, & drive growth. We assess your operations, identify opportunities, & implement solutions for sustainable growth & profitability.",
    },
    {
      pic: crm,
      title: "CRM",
      content:
        "We help implement and optimize CRM systems to effectively streamline processes, enhance meaningful customer interactions, and drive retention, ensuring you stay connected and actively engaged with your audience.",
    },
    {
      pic: crm,
      title: "B2B LeadGen",
      content:
        "Leverage AI-powered tools for personalized outreach that boosts email engagement. We refine strategies through A/B testing and customize cold calls using buyer insights for higher conversion rates.",
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white w-full py-10 px-5 flex flex-col justify-center items-center" id="services">
      <h1 className="font-Blinker font-light max-sm:text-center">
        Explore our expertise
      </h1>
      <h2 className="font-Blinker font-semibold text-4xl max-sm:text-center max-sm:text-2xl">
        Services tailored for your growth
      </h2>
      <h3 className="font-Blinker font-light text-[17px] max-sm:text-center max-sm:mt-3">
        Discover our range of tailored solutions designed to drive growth and
        foster lasting success for your business.
      </h3>
      <div className="w-full md:max-w-6xl py-10 px-5 mx-auto">
        {/* <Slider {...settings}>
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-left p-5 bg-white shadow-lg rounded-lg transition-transform transform hover:shadow-3xl md:mx-4 border border-gray-200 hover:shadow-black md:h-[80vh]"
            >
              <img
                src={item.pic}
                alt={item.title}
                className="w-full h-[170px] object-cover  mx-auto"
              />
              <h1 className="pt-12 font-Blinker font-semibold text-xl text-left">
                {item.title}
              </h1>
              <p className="pt-3 text-gray-600 font-Blinker font-light leading-5 text-[17px]">
                {item.content}
              </p>
            </div>
          ))}
        </Slider> */}
        <Slider {...settings}>
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-left p-5 bg-white shadow-lg rounded-lg transition-transform transform hover:shadow-3xl md:mx-4 border border-gray-200 hover:shadow-black h-[30rem]"
            >
              <img
                src={item.pic}
                alt={item.title}
                className="w-full h-[170px] object-cover mx-auto"
              />
              <h1 className="pt-12 font-Blinker font-semibold text-xl text-left">
                {item.title}
              </h1>
              <p className="pt-3 text-gray-600 font-Blinker font-light leading-5 text-[17px]">
                {item.content}
              </p>
            </div>
          ))}
        </Slider>

      </div>
    </div>
  );
};

export default Services;

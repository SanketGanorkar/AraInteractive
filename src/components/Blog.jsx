import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import outbound_bg from "/assets/outbound_bg.png";
import start_busi_bg from "/assets/start_busi_bg.png";
import bus_fail_bg from "/assets/bus_fail_bg.png";
import pos_elem_bg from "/assets/pos_elem_bg.png";
import scale_growth_bg from "/assets/scale_growth_bg.png";
import serv_busi_bg from "/assets/serv_busi_bg.png";
import "./caraousel.css";
import { Link, useNavigate } from "react-router-dom"

const Blogs = () => {

  const navigate = useNavigate()
  const features = [
    {
      pic: bus_fail_bg,
      title: "Reasons Why New Businesses Fail",
      content:
        "Launching a new business is an exhilarating endeavor, but it’s important to recognize that many startups face significant hurdles that can lead to failure ...",
      path: '/blogs/Reasons Why New Businesses Fail'
    },
    {
      pic: pos_elem_bg,
      title: "How to Write a Positioning Statement",
      content:
        "Creating a compelling positioning statement is essential for defining your brand's place in the market. Here’s a step-by-step guide to help you craft an effective positioning statement",
      path: '/blogs/How to Write a Positioning Statement'
    },
    {
      pic: start_busi_bg,
      title: "Starting a Business: How to Go Prepared",
      content:
        "Starting a business is an exciting and challenging venture that requires careful planning and preparation. Whether you’re launching a startup or transitioning ...",
      path: '/blogs/Starting a Business: How to Go Prepared'
    },
    {
      pic: serv_busi_bg,
      title: "How to Run a Services Business",
      content:
        "Running a service-based business can be both rewarding and challenging, as it relies heavily on customer satisfaction, unlike traditional product-based companies.",
      path: '/blogs/How to Run a Services Business Successfully'
    },
    {
      pic: outbound_bg,
      title: "Understanding Outbound Sales",
      content:
        "In the ever-evolving landscape of sales and marketing, businesses are continually exploring methods to connect with potential customers.",
      path: '/blogs/How to Run a Services Business Successfully'
    },
    {
      pic: scale_growth_bg,
      title: "Difference Between Scale and Growth",
      content:
        "In the realm of business, the terms scale and growth are often used interchangeably, but they represent fundamentally different concepts.",
      path: '/blogs/How to Run a Services Business Successfully'
    },
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
    <div className="bg-white w-full py-10 px-5 flex flex-col justify-center items-center" id="blogs">
      <h1 className="font-Blinker font-light max-sm:text-2xl">Read Our Blog</h1>
      <h2 className="font-Blinker font-semibold text-4xl text-center max-sm:text-3xl max-sm:mt-3">
        Featured News and Insights
      </h2>
      <h3 className="font-Blinker font-light text-[17px] max-sm:mt-3">
        Read the latest news from us.
      </h3>
      <div className="w-full md:max-w-6xl py-10 px-5 mx-auto">
        <Slider {...settings}>
          {features.map((item, index) => (
            <div
              key={index}
              className="caro-items flex flex-col items-left p-5 bg-white shadow-lg rounded-lg transition-transform transform hover:shadow-3xl hover:shadow-black md:mx-4 border border-gray-200 cursor-pointer h-[28rem]"
            >
              <Link to={item.path} className="overflow-hidden">
                <img
                  src={item.pic}
                  alt={item.title}
                  className="w-full h-[170px] object-cover  mx-auto"
                />
              </Link>
              <h1 className="pt-5 font-Blinker font-semibold text-xl text-left">
                {item.title}
              </h1>
              <p className="pt-3 text-gray-600 font-Blinker font-light leading-5 text-[17px]">
                {item.content}
              </p>
              <Link to={item.path} className="font-Blinker font-normal pt-3 text-black cursor-pointer hover:underline text-left">
                Continue Reading...
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blogs;

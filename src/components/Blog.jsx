import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blog from "../../public/assets/gtm.png";
import "./caraousel.css";
import { Link, useNavigate } from "react-router-dom"

const Blogs = () => {

  const navigate = useNavigate()
  const features = [
    {
      pic: blog,
      title: "Reasons Why New Businesses Fail",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      path: '/blogs/Reasons Why New Businesses Fail'
    },
    {
      pic: blog,
      title: "How to Write a Positioning Statement",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      path: '/blogs/How to Write a Positioning Statement'
    },
    {
      pic: blog,
      title: "Starting a Business: How to Go Prepared",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      path: '/blogs/Starting a Business: How to Go Prepared'
    },
    {
      pic: blog,
      title: "How to Run a Services Business Successfully",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
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
      <div className="w-full max-w-4xl py-10 px-5 mx-auto">
        <Slider {...settings}>
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-left p-5 bg-white shadow-lg rounded-lg transition-transform transform hover:shadow-3xl hover:shadow-black mx-4 border border-gray-200 cursor-pointer"
            >
              <Link to={item.path} className="overflow-hidden">
                <img
                  src={item.pic}
                  alt={item.title}
                  className="w-full h-[170px] object-cover max-w-[280px] mx-auto"
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

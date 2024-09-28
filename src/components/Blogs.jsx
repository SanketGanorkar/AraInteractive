import blog from "../../public/assets/blog.png";

const Blogs = () => {
  const features = [
    {
      pic: blog,
      title: "Lorem Ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      pic: blog,
      title: "Lorem Ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      pic: blog,
      title: "Lorem Ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];

  return (
    <div className="bg-white w-full py-10 px-5 flex flex-col justify-center items-center">
      <h1 className="font-Blinker font-light max-sm:text-2xl">Read Our Blog</h1>
      <h2 className="font-Blinker font-semibold text-4xl text-center max-sm:text-3xl max-sm:mt-3">
        Featured News and Insights
      </h2>
      <h3 className="font-Blinker font-light text-[17px] max-sm:mt-3">
        Read and update the latest news from us.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-5 bg-white shadow-lg rounded-lg transition-transform transform hover:shadow-2xl "
          >
            <img
              src={item.pic}
              alt={item.title}
              className="w-full h-[170px] object-cover"
            />

            <h1 className="pt-5 font-Blinker font-semibold text-xl text-center">
              {item.title}
            </h1>

            <p className="pt-3 text-pretty font-Blinker font-light leading-5 text-[17px] ">
              {item.content}
            </p>

            <h1 className="font-Blinker font-normal pt-3 text-blue-600 cursor-pointer hover:underline">
              Continue Reading
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

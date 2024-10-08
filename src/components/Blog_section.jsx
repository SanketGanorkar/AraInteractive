import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { FaRegCalendarAlt, FaTag } from "react-icons/fa";

const Blog_section = () => {
  const contents = [
    {
      id: 1,
      icon: <FaTag size={17} />,
      content: "By Dhruv",
    },
    {
      id: 2,
      icon: <FaRegCalendarAlt size={17} />,
      content: "30 Oct 2024",
    },
    {
      id: 3,
      icon: <FaTag size={17} />,
      content: "Marketing",
    },
  ];
  const categories = [
    {
      id: 1,
      title: "Business Consulting",
      page: "02",
    },
    {
      id: 2,
      title: "Corporate",
      page: "04",
    },
    {
      id: 3,
      title: "IT Solutions",
      page: "01",
    },
    {
      id: 4,
      title: "Marketing",
      page: "01",
    },
    {
      id: 5,
      title: "Startup Consulting",
      page: "05",
    },
  ];

  const latepost = [
    {
      id: 1,
      date: "30 Oct 2024",
      title: "5 Impactful Elements That",
    },
    {
      id: 2,
      date: "30 Oct 2024",
      title: "Revolutionizing The Future Of",
    },
    {
      id: 3,
      date: "30 Oct 2024",
      title: "A Guide to Embrace",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="bg-introbg w-screen bg-no-repeat bg-cover relative overflow-x-hidden flex flex-col justify-center items-center res-width2 max-sm:h-[430px] md:h-96">
        <div className="flex flex-col justify-center h-full res-width">
          <h1 className="text-white font-Blinker text-4xl leading-10 font-normal w-[34rem]">
          Reasons Why New Businesses Fail (and How to Prevent Them)
          </h1>
        </div>
      </div>
      <div className="bg-white flex">
        {/* first div */}
        <div className="flex flex-col mt-[180px] items-center justify-center mb-52">
          {/* Contents */}
          <div className="flex gap-x-28">
            {contents.map((item, index) => (
              <div key={index} className="flex items-center gap-x-4">
                <div className="border-[#828282] h-12 w-12 rounded-full border-[1px] flex items-center justify-center">
                  {item.icon}
                </div>
                {/* Content to the right of the icon */}
                <h1 className="font-Blinker font-normal text-[#828282]">
                  {item.content}
                </h1>
              </div>
            ))}
          </div>
          {/* Divider */}
          <div className="bg-[#828282] h-[1px] w-[43rem] mt-3 mb-3 ml-6"></div>
          {/* Paragraphs */}
          <div className="flex flex-col gap-y-3">
            <p className="font-Blinker font-normal text-[#828282] w-[34rem]">
            Launching a new business is an exhilarating endeavor, but it’s important to recognize that many startups face significant hurdles that can lead to failure. By understanding these common pitfalls, aspiring entrepreneurs can better navigate their path to success. Here’s a look at the main reasons new businesses struggle, along with strategies to avoid these challenges.
            </p>
          </div>
          {/* Contents - 2 */}
          <div className="flex flex-col gap-y-5 justify-start mt-[80px]">
            <h1 className="font-Blinker font-normal text-black w-[34rem] text-2xl">
              The Importance of Quality Websites in the Skincare Industry
            </h1>
            <p className="font-Blinker font-normal text-[#828282] w-[34rem]">
              Donec ut consectetur augue, at gravida orci. Donec nec est quis
              massa suscipit faucibus vitae id tellus. Vestibulum et leo sem.
              Aliquam viverra arcu mattis orci vestibulum tristique. Sed in
              gravida arcu.
            </p>

            <p className="font-Blinker font-normal text-[#828282] w-[34rem]">
              1. Consumer Perception and Trust Vestibulum tempor elit ac tellus
              ornare luctus. Donec ultrices placerat elit id aliquam.
            </p>

            <p className="font-Blinker font-normal text-[#828282] w-[34rem]">
              2. User Experience (UX) and Navigation Cras ac porttitor est, non
              tempor justo. Aliquam at gravida ante, vitae suscipit nisi. Sed
              turpis lectus, convallis non rhoncus a, aliquam eu lectus. Nunc
              ultrices justo id tellus bibendum viverra.
            </p>
          </div>

          <div className="flex flex-col gap-y-5 justify-start mt-[80px]">
            <h1 className="font-Blinker font-normal text-black w-[34rem] text-2xl">
              The Impact of Skincare Business Consulting Services
            </h1>
            <p className="font-Blinker font-normal text-[#828282] w-[34rem]">
              Maecenas vestibulum iaculis orci. In ut cursus lectus. Nullam
              semper vel ante at imperdiet. Quisque posuere vitae sem ac
              elementum. Sed a commodo mauris. Aliquam blandit, turpis ut
              faucibus consequat, augue tellus aliquet metus, eu posuere nibh
              risus et sapien. Morbi sit amet lorem auctor lacus efficitur
              ornare.
            </p>

            <p className="font-Blinker font-normal text-[#828282] w-[34rem]">
              Maecenas vestibulum iaculis orci. In ut cursus lectus. Nullam
              semper vel ante at imperdiet. Quisque posuere vitae sem ac
              elementum. Sed a commodo mauris. Aliquam blandit, turpis ut
              faucibus consequat, augue tellus aliquet metus, eu posuere nibh
              risus et sapien. Morbi sit amet lorem auctor lacus efficitur
              ornare. Phasellus interdum enim erat, sed viverra leo viverra vel.
              Donec vel dictum mauris,
            </p>

            <p className="font-Blinker font-normal text-[#828282] w-[34rem]">
              eu gravida arcu. Sed finibus finibus felis in facilisis. Maecenas
              nec justo et purus gravida consectetur. Ut pharetra, dui a
              vulputate ultrices, nisi lacus imperdiet urna, vel luctus ante
              lectus non ipsum. Pellentesque non tortor nec odio egestas
              placerat eget sit amet ex.Vestibulum elit nulla, facilisis et
              felis sed, egestas faucibus lorem
            </p>
          </div>
        </div>

        {/* second div */}
        <div className="flex flex-col mt-[130px] ml-12 gap-y-32">
          {/*Information*/}
          <div className="border-[#D9D9D9] w-72 h-96 border-[2px] flex flex-col items-center justify-center">
            <div className="bg-[#D9D9D9] rounded-full h-32 w-32"></div>
            <h1 className="text-black font-Blinker font-normal mt-3">
              Name of Author
            </h1>
            <h1 className="text-black font-Blinker font-normal">
              Designation
            </h1>
            <div className="bg-[#828282] h-[1px] w-[12rem] mt-7 mb-3"></div>
            <h1 className="text-black font-Blinker font-normal">
              About Author
            </h1>
          </div>
          <div>
            {/* Categories */}
            <div className="flex flex-col mt-6">
              <h1 className="text-white bg-black font-Blinker font-semibold pl-6 h-10 pt-2">
                Categories
              </h1>
              <div className="flex flex-col">
                {categories.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-[#828282] border-[1px] h-10"
                  >
                    <h3 className="font-Blinker font-normal text-black ml-3 mt-2">
                      {item.title}
                    </h3>
                    <h4 className="font-Blinker font-normal text-black mr-3 mt-2">
                      {item.page}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest post */}
            <div className="flex flex-col mt-6">
              <h1 className="text-white bg-black font-Blinker font-semibold pl-6 h-10 pt-2">
                Latest Post
              </h1>
              <div className="flex flex-col">
                {latepost.map((item, index) => (
                  <div
                    key={index}
                    className="flex border-[#7E7E7E] border-[1px] h-20 items-center"
                  >
                    <div className="bg-[#D9D9D9] w-12 h-12 ml-6"></div>
                    <div className="flex flex-col ml-3">
                      <h5 className="font-Blinker font-normal text-[#828282] text-[13px]">
                        {item.date}
                      </h5>
                      <h6 className="font-Blinker font-normal text-black text-[13px]">
                        {item.title}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col mt-6 mb-6">
              <div className="bg-black text-white font-Blinker font-semibold h-10 pt-2 pl-6">
                Subscribe Newsletter
              </div>
              <div className="bg-white border-[#7E7E7E] border-[1px] h-44 flex flex-col w-72 items-start pl-6">
                <p className="font-Blinker font-normal text-black text-[13px] w-56 mt-5">
                  Sign up to receive notifications about the latest news and
                  events from us!
                </p>
                <input
                  className="border-black border-[1px] rounded-full text-[#828282] w-48 text-[12px] p-1 pl-3 mt-4"
                  placeholder="Email Address"
                />
                <button className="font-Blinker font-normal text-white bg-black p-1 w-48 rounded-full mt-3 text-[13px]">
                  Subscribe Now !!!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog_section;

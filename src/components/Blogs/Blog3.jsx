import arrow from "/assets/arrow.png"
import Footer from "../Footer.jsx";
import { FaRegCalendarAlt, FaTag } from "react-icons/fa";
import author from "/assets/author.png"
import { Link, useNavigate } from "react-router-dom"
import start_busi_bg from "/assets/start_busi_bg.png";
import serv_busi_bg from "/assets/serv_busi_bg.png";
import pos_elem_bg from "/assets/pos_elem_bg.png";

const Blog_section = () => {
  const navigate = useNavigate()
  const info = [
    {
      id: 1,
      icon: <FaTag size={17} />,
      content: "By Ashutosh K Pandey",
    },
    {
      id: 2,
      icon: <FaRegCalendarAlt size={17} />,
      content: "5 Oct 2024",
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
      title: "Go To Market",
      page: "04",
    },
    {
      id: 3,
      title: " Growth Marketing",
      page: "01",
    },
    {
      id: 4,
      title: "Startup Consulting",
      page: "05",
    },
  ];

  const latepost = [
    {
      id: 1,
      date: "30 Sept 2024",
      title: "Writing a Positioning Statement",
      icon: pos_elem_bg,
      path: '/blogs/How to Write a Positioning Statement'
    },
    {
      id: 2,
      date: "7 Oct 2024",
      title: "Starting a Business",
      icon: start_busi_bg,
      path: '/blogs/Starting a Business: How to Go Prepared'
    },
    {
      id: 3,
      date: "21 Sept 2024",
      title: "Runing a Services Business",
      icon: serv_busi_bg,
      path: '/blogs/How to Run a Services Business Successfully'
    },
  ];

  const content = [
    {
      id: 1,
      title: "Conduct Market Research",
      desc: "Understanding your market is crucial. Start by identifying your target audience and analyzing their needs, preferences, and pain points. Use surveys, focus groups, and online research to gather insights about your potential customers and competitors. This information will help you shape your business idea and develop a unique value proposition.",
    },
    {
      id: 2,
      title: "Create a Business Plan",
      desc: "A solid business plan acts as a roadmap for your business. It should outline your business goals, strategies, target market, financial projections, and marketing plans. A comprehensive business plan not only guides your actions but also helps attract investors or secure financing. Be sure to revise it as your business evolves.",
    },
    {
      id: 3,
      title: "Establish Your Brand Identity",
      desc: "Your brand identity includes your business name, logo, and overall image. Take time to craft a brand that resonates with your target audience and reflects your business values. Consider how you want to position your brand in the market. A strong brand identity will help you stand out and build customer loyalty.",
    },
    {
      id: 4,
      title: "Choose the Right Legal Structure",
      desc: "Decide on the legal structure of your business, such as a sole proprietorship, partnership, LLC, or corporation. Each structure has its own advantages and implications for liability, taxation, and compliance. Consulting with a legal or financial advisor can help you choose the best option for your situation.",
    },
    {
      id: 5,
      title: "Secure Financing",
      desc: "Determine how much capital you need to start your business and explore various funding options. You might consider personal savings, loans, angel investors, venture capital, or crowdfunding. Be prepared to present your business plan to potential investors and clearly articulate your financial needs and growth prospects.",
    },
    {
      id: 6,
      title: "Set Up Operations",
      desc: "Establish the operational aspects of your business, including location, equipment, technology, and suppliers. Create processes for day-to-day operations, from inventory management to customer service. If you plan to hire employees, develop a recruitment strategy and consider your workplace culture.",
    },
    {
      id: 7,
      title: "Develop a Marketing Strategy",
      desc: "A well-defined marketing strategy is essential for attracting customers. Identify the most effective channels to reach your audience, such as social media, email marketing, content marketing, or traditional advertising. Create a budget for your marketing efforts and track your results to see what works best.",
    },
    {
      id: 8,
      title: "Network and Build Relationships",
      desc: "Networking is invaluable for new business owners. Attend industry events, join local business groups, and connect with mentors who can provide guidance and support. Building relationships can lead to partnerships, referrals, and opportunities that can propel your business forward.",
    },
    {
      id: 9,
      title: "Prepare for Challenges",
      desc: "Every entrepreneur faces challenges. Be prepared for setbacks and learn to pivot when necessary. Cultivating a resilient mindset will help you navigate obstacles and maintain your focus on long-term goals. Consider developing contingency plans for potential risks.",
    },
    {
      id: 10,
      title: "Stay Compliant",
      desc: "Ensure that you comply with local, state, and federal regulations. This includes registering your business, obtaining necessary licenses and permits, and understanding tax obligations. Staying compliant helps you avoid legal issues that could derail your business.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-start_busi_bg w-screen bg-no-repeat bg-cover relative overflow-x-hidden flex flex-col justify-center items-center res-width2 max-sm:h-[430px] md:h-96">
        <div className="res-width3 flex flex-col justify-center items-start h-full">
          <h1 className="text-white font-Blinker text-4xl leading-10 font-normal w-[22rem] mr-[38rem] max-sm:ml-6">
            Starting a Business: How to Go Prepared
          </h1>
          <div className="flex pt-12">
            <h2 className="text-white text-xl -mt-1 cursor-pointer max-sm:text-[15px] max-sm:ml-7" onClick={() => navigate('/')}>Home</h2>
            <img src={arrow} alt="arrow" className="md:w-10 md:h-6 md:ml-3 max-sm:w-6 max-sm:h-3 max-sm:mt-1 max-sm:ml-2" />
            <h4 className="text-white -mt-1  max-sm:ml-2 md:ml-3 text-xl cursor-pointer max-sm:text-[15px]" onClick={() => navigate('/blogs/How to Run a Services Business Successfully')}>How to Run a Services Business Successfully</h4>
          </div>
        </div>
      </div>
      <div className="res-width3 bg-white flex mb-52 md:mt-[100px] max-md:flex-col max-sm:mt-4">
        {/* first div */}
        <div className="flex flex-col justify-center md:w-[70%]">
          {/* Basic Info */}
          <div className="flex w-full max-sm:flex-col max-sm:grid max-sm:grid-cols-2 gap-4 justify-between md:pr-[2rem] lg:pr-[4rem] md:pl-[0.2rem]">
            {info.map((item, index) => (
              <div key={index} className="flex items-center gap-x-4">
                <div className="border-[#828282] h-12 w-12 rounded-full border-[1px] flex items-center justify-center max-sm:h-9 max-sm:w-9">
                  {item.icon}
                </div>
                <h1 className="font-Blinker font-normal text-[#828282] max-sm:text-[14px]">
                  {item.content}
                </h1>
              </div>
            ))}
          </div>
          {/* Divider */}
          <div className="w-full">
            <div className="bg-[#828282] h-[1px] w-full md:w-[90%] mt-3 mb-4"></div>
          </div>
          {/* Paragraphs */}
          <div className="flex flex-col gap-y-3 w-full">
            <p className="md:w-[92%] font-Blinker font-normal text-[#828282] max-sm:text-[14px] max-sm:w-[93%] max-sm:ml-2">
              Starting a business is an exciting and challenging venture that
              requires careful planning and preparation. Whether you’re
              launching a startup or transitioning from a side hustle to a
              full-time endeavor, going in with a well-thought-out strategy can
              significantly increase your chances of success. Here’s how to
              prepare effectively for your entrepreneurial journey.
            </p>
          </div>

          {/* Contents - 2 */}
          <div className="w-[100%] flex flex-col gap-y-2  mt-[20px] max-sm:text-[14px]">
            {content.map((item, index) => (
              <div key={index} className="md:w-[92%] flex flex-col md:text-[18px] mb-4 max-sm:w-[93%] max-sm:ml-2">
                <h1 className="font-Blinker font-bold">
                  {item.id} . {item.title}
                </h1>
                <p className="font-Blinker font-normal text-[#828282]">
                  {item.desc}
                </p>
              </div>
            ))}
            {/*Conclusion*/}
            <h3 className="max-sm:w-[93%] max-sm:ml-2 md:w-[92%] mt-5 -mb-3 font-Blinker font-bold md:text-xl max-sm:text-[15px]">Conclusion</h3>
            <p className=" max-sm:w-[93%] max-sm:ml-2 md:w-[92%] text-[#828282] font-Blinker font-normal text-[18px] max-sm:text-[14px]">
              Starting a business requires careful preparation and strategic
              thinking. By conducting thorough market research, creating a solid
              business plan, establishing a strong brand identity, and setting
              up effective operations, you can lay a strong foundation for
              success. Remember, entrepreneurship is a journey filled with
              learning opportunities, so remain adaptable and open to new ideas
              as you grow your business. With the right preparation, you’ll be
              well-equipped to turn your entrepreneurial dreams into reality.
            </p>
          </div>
        </div>

        {/* second div */}
        <div className="flex flex-col gap-y-32 max-md:mt-24 items-center">
          <div className="sticky top-[24px]">
            {/*Information*/}
            <div className="border-[#D9D9D9] w-[20rem] md:w-[100%] h-[505px] border-[2px] flex flex-col items-center justify-center">
              <img src={author} alt="" className="rounded-full h-32 w-32" />
              <h1 className="text-black font-Blinker font-normal mt-3">Ashutosh K Pandey</h1>
              <h1 className="text-black font-Blinker font-normal">Growth Marketing Consultant</h1>
              <div className="bg-[#828282] h-[1px] w-[12rem] mt-7 mb-3"></div>
              <h1 className="text-black font-Blinker font-normal md:text-[14px] w-56 text-center">
                With 17 years in demand generation and sales, I’ve helped tech startups grow by identifying markets and understanding customer needs. On this blog, I share insights to help founders and marketers scale their businesses.
              </h1>
            </div>
            {/* Categories */}
            <div className="flex flex-col w-[20rem] md:w-[100%] md:mt-6 max-sm:mt-6">
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
            <div className="flex flex-col md:mt-[65px] w-[20rem] md:w-[100%] max-sm:mt-6">
              <h1 className="text-white bg-black font-Blinker font-semibold pl-6 h-10 pt-2">Latest Post</h1>
              <div className="flex flex-col">
                {latepost.map((item, index) => (
                  <div key={index} className="flex border-[#7E7E7E] border-[1px] h-20 items-center">
                    <img src={item.icon} className="w-12 h-12 ml-6" />
                    <div className="flex flex-col ml-3">
                      <h5 className="font-Blinker font-normal text-[#828282] text-[13px]">{item.date}</h5>
                      <Link to={item.path} className="cursor-pointer font-Blinker font-normal text-black text-[13px]">{item.title}</Link>
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
              <div className="bg-white border-[#7E7E7E] border-[1px] flex flex-col w-[100%] items-start pl-6 pb-6">
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

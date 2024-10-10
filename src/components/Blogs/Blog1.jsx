import Footer from "../Footer.jsx";
import { useEffect, useRef, useState } from 'react';
import { FaRegCalendarAlt, FaTag } from "react-icons/fa";
import author from "../../../public/assets/author.png";
import arrow from "../../../public/assets/arrow.png"
import { Link, useNavigate } from "react-router-dom"

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

  const content = [
    {
      id: 1,
      title: "Inflexibility",
      problem:
        "Businesses that are resistant to change often miss out on growth opportunities and fail to adapt to market demands.",
      solution:
        "Stay informed about industry trends and be open to pivoting your strategies as needed. Flexibility is key to thriving in a dynamic business environment.",
    },
    {
      id: 2,
      title: "Insufficient Planning",
      problem:
        "Jumping into a business without a solid plan can lead to poor decision-making and unforeseen obstacles.",
      solution:
        "Create a comprehensive business plan that outlines your goals, target market, and financial projections. Regularly review and adjust your plan as circumstances change.",
    },
    {
      id: 3,
      title: "Underestimating the Commitment Required for Success",
      problem:
        "Many entrepreneurs are unprepared for the time and effort needed to build a successful business, leading to burnout.",
      solution:
        "Set realistic expectations about your workload and be ready for a long-term commitment. Surround yourself with a supportive network to share the journey.",
    },
    {
      id: 4,
      title: "Cash Flow Challenges",
      problem:
        "Insufficient cash flow can cripple a business, making it difficult to manage day-to-day operations.",
      solution:
        "Monitor your cash flow closely by maintaining a detailed budget and using accounting tools. Anticipate expenses and plan for fluctuations in revenue.",
    },
    {
      id: 5,
      title: "Ineffective Management",
      problem:
        "Lack of management experience can lead to inefficiencies and missed opportunities.",
      solution:
        "Invest in management training or hire experienced professionals. Build a strong team that brings diverse skills to the table.",
    },
    {
      id: 6,
      title: "Neglecting Customer Needs",
      problem:
        "Businesses that overlook the importance of their customers risk losing them to competitors.",
      solution:
        "Engage with customers regularly through feedback surveys and social media. Build strong relationships by understanding and addressing their needs.",
    },
    {
      id: 7,
      title: "Staffing Issues",
      problem:
        "Hiring the wrong people can drain resources and hurt company morale.",
      solution:
        "Implement a thorough recruitment process and focus on creating a positive work culture to retain talent.",
    },
    {
      id: 8,
      title: "Weak Marketing and Sales Strategies",
      problem:
        "Even great products can fail without effective marketing and sales approaches.",
      solution:
        "Develop a solid marketing plan that includes both digital and traditional strategies. Experiment with different tactics to find what resonates with your target audience.",
    },
    {
      id: 9,
      title: "Insufficient Capital",
      problem:
        "Many new businesses struggle to secure enough funding, stunting their growth.",
      solution:
        "Explore various funding options such as loans, investors, and crowdfunding. Ensure you have adequate capital to sustain operations during the early stages.",
    },
    {
      id: 10,
      title: "Incorrect Pricing Strategies",
      problem:
        "Setting the wrong prices can scare off customers or limit profitability.",
      solution:
        "Research your competition and understand your costs to develop a competitive pricing model. Be prepared to adjust your prices based on market feedback.",
    },
    {
      id: 11,
      title: "Lack of a Competitive Advantage",
      problem:
        "Without differentiation, businesses can struggle to attract and retain customers.",
      solution:
        "Identify what sets your product or service apart and emphasize these unique selling points in your marketing efforts.",
    },
    {
      id: 12,
      title: "Trying to Do It Alone",
      problem:
        "Many entrepreneurs believe they must handle everything by themselves, which can lead to overwhelm.",
      solution:
        "Build a support network of mentors, peers, and industry professionals who can provide guidance and assistance. Collaboration can enhance your business strategy.",
    },
    {
      id: 13,
      title: "Scaling Too Quickly",
      problem:
        "Rapid growth can strain resources and lead to operational issues.",
      solution:
        "Focus on solidifying your foundation before expanding. Scale gradually and ensure your operations can support increased demand.",
    },
    {
      id: 14,
      title: "Expert Advice",
      problem: "Many entrepreneurs struggle without expert guidance.",
      solution:
        "To enhance your chances of success, consider seeking insights from experienced entrepreneurs or business mentors. Their guidance can help you avoid common pitfalls and navigate challenges effectively.",
    },
  ];

  const [isSticky, setIsSticky] = useState(true); // To control the right section's sticky behavior
  const rightSectionRef = useRef(null);
  const endSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = rightSectionRef.current.offsetTop - 100; // Adjust this value to control when it becomes sticky
      const endPoint = endSectionRef.current.offsetTop;

      if (scrollPosition > triggerPoint && scrollPosition < endPoint) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center font-Blinker">
      <div className="bg-introbg w-screen bg-no-repeat bg-cover relative overflow-x-hidden flex flex-col justify-center items-center res-width2 max-sm:h-[430px] md:h-96">
        {/* Intro */}
        <div className="flex flex-col justify-center items-start h-full">
          <h1 className="text-white font-Blinker text-4xl leading-10 font-normal md:w-[30rem] md:mr-[38rem] max-sm:ml-6">
            Reasons Why New Businesses Fail
            <span className="hidden max-sm:inline">
              <br />
            </span>
            (and How to Prevent Them)
          </h1>

          {/* <h1 className="text-white font-Blinker text-4xl leading-10 font-normal md:w-[30rem] md:mr-[38rem] max-sm:ml-8">
            Reasons Why New Businesses Fail <br />(and How to Prevent Them)
          </h1> */}

          <div className="flex pt-12 max-sm:ml-7">
            <h2 className="text-white text-xl -mt-1 cursor-pointer max-sm:text-[15px]" onClick={() => navigate('/')}>Home</h2>
            <img src={arrow} alt="arrow" className="md:w-10 md:h-6 md:ml-3 max-sm:w-6 max-sm:h-3 max-sm:mt-1 max-sm:ml-2" />
            <h4 className="text-white -mt-1  max-sm:ml-2 md:ml-3 text-xl cursor-pointer max-sm:text-[15px]" onClick={() => navigate('/blogs/How to Write a Positioning Statement')}>How to Write a Positioning Statement</h4>
          </div>
        </div>
      </div>
      <div className="bg-white flex">
        {/* first div */}
        <div className="flex flex-col md:mt-[50px] items-center justify-center mb-52">
          {/* Basic Info */}
          <div className="flex md:gap-x-20 max-sm:ml-[20rem] max-sm:grid max-sm:grid-cols-2">
            {info.map((item, index) => (
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
          <div className="flex flex-col gap-y-3 md:mr-[80px] md:ml-[80px]">
            <p className="font-Blinker font-normal text-[#828282] md:w-[41rem] ">
              Launching a new business is an exhilarating endeavor, but it’s
              important to recognize that many startups face significant hurdles
              that can lead to failure. By understanding these common pitfalls,
              aspiring entrepreneurs can better navigate their path to success.
              Here’s a look at the main reasons new businesses struggle, along
              with strategies to avoid these challenges.
            </p>
          </div>

          {/* Contents - 2 */}
          <div className="flex flex-col gap-y-2 justify-start mt-[20px] w-[655px] -mr-1">
            {content.map((item, index) => (
              <div key={index} className="flex flex-col text-[18px] mb-4">
                <h1 className="font-Blinker font-bold">
                  {item.title}
                </h1>
                <p className="font-Blinker font-normal text-black">
                  Problem:{" "}
                  <span className="font-normal text-[#828282]">
                    {item.problem}
                  </span>
                </p>
                <p className="font-Blinker font-normal text-black">
                  Solution:{" "}
                  <span className="font-normal text-[#828282]">
                    {item.solution}
                  </span>
                </p>
              </div>
            ))}

            {/*Conclusion*/}
            <h3 className="mt-5 -mb-3 font-Blinker font-bold text-xl ">
              Conclusion
            </h3>
            <p className="text-[#828282] font-Blinker font-normal">
              Starting a new business is a challenging yet rewarding journey. By recognizing the key reasons why many startups fail and implementing strategies to prevent these issues, you can significantly improve your odds of success. Careful planning, customer engagement, and a willingness to adapt are crucial components in building a thriving business.
            </p>
          </div>
        </div>

        {/* second div */}
        <div ref={rightSectionRef} className={`flex flex-col mt-[130px] ml-12 gap-y-32 ${isSticky ? 'sticky top-[100px]' : ''}`}>
          {/* Information */}
          <div className="border-[#D9D9D9] w-72 h-[505px] border-[2px] flex flex-col items-center justify-center">
            <img src={author} alt="" className="rounded-full h-32 w-32" />
            <h1 className="text-black font-Blinker font-normal mt-3">Ashutosh K Pandey</h1>
            <h1 className="text-black font-Blinker font-normal">Growth Marketing Consultant</h1>
            <div className="bg-[#828282] h-[1px] w-[12rem] mt-7 mb-3"></div>
            <h1 className="text-black font-Blinker font-normal md:text-[14px] w-56 text-center">
              With 17 years in demand generation and sales, I’ve helped tech startups grow by identifying markets and understanding customer needs. On this blog, I share insights to help founders and marketers scale their businesses.
            </h1>
          </div>

          {/* Categories */}
          <div className="flex flex-col mt-6">
            <h1 className="text-white bg-black font-Blinker font-semibold pl-6 h-10 pt-2">Categories</h1>
            <div className="flex flex-col">
              {categories.map((item, index) => (
                <div key={index} className="flex justify-between border-[#828282] border-[1px] h-10">
                  <h3 className="font-Blinker font-normal text-black ml-3 mt-2">{item.title}</h3>
                  <h4 className="font-Blinker font-normal text-black mr-3 mt-2">{item.page}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Latest post */}
          <div className="flex flex-col mt-[65px]">
            <h1 className="text-white bg-black font-Blinker font-semibold pl-6 h-10 pt-2">Latest Post</h1>
            <div className="flex flex-col">
              {latepost.map((item, index) => (
                <div key={index} className="flex border-[#7E7E7E] border-[1px] h-20 items-center">
                  <div className="bg-[#D9D9D9] w-12 h-12 ml-6"></div>
                  <div className="flex flex-col ml-3">
                    <h5 className="font-Blinker font-normal text-[#828282] text-[13px]">{item.date}</h5>
                    <h6 className="font-Blinker font-normal text-black text-[13px]">{item.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col mt-[65px] mb-6">
            <div className="bg-black text-white font-Blinker font-semibold h-10 pt-2 pl-6">Subscribe Newsletter</div>
            <div className="bg-white border-[#7E7E7E] border-[1px] h-44 flex flex-col w-72 items-start pl-6">
              <p className="font-Blinker font-normal text-black text-[13px] w-56 mt-5">
                Sign up to receive notifications about the latest news and events from us!
              </p>
              <input className="border-black border-[1px] rounded-full text-[#828282] w-48 text-[12px] p-1 pl-3 mt-4" placeholder="Email Address" />
              <button className="font-Blinker font-normal text-white bg-black p-1 w-48 rounded-full mt-3 text-[13px]">Subscribe Now !!!</button>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Blog_section;
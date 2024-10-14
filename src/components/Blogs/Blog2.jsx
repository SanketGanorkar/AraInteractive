import arrow from "../../../public/assets/arrow.png"
import Footer from "../Footer.jsx";
import { FaRegCalendarAlt, FaTag } from "react-icons/fa";
import author from "../../../public/assets/author.png";
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
      title: "Define Your Target Audience",
      content: "Identify who your ideal customers are. Develop a detailed buyer persona that includes demographics such as age, gender, location, income, and interests. This clarity will help you tailor your marketing efforts more effectively."
    },
    {
      id: 2,
      title: "Uncover Pain Points",
      content: "Discover the challenges your potential customers face. Engaging with your audience through surveys or direct conversations can reveal their pain points. Understanding these issues will enable you to position your product as a solution."
    },
    {
      id: 3,
      title: "Identify the Outcome or Experience",
      content: "Envision what your customer’s experience will be like after using your product. What emotions will they feel, and what tangible results will they achieve? This insight helps you market your product as the ideal solution."
    },
    {
      id: 4,
      title: "Research Competitive Alternatives",
      content: "Analyze your competitors to understand their strengths and weaknesses. Look beyond direct competitors to include brands that offer alternative solutions to the same target audience. This research will help you find your niche."
    },
    {
      id: 5,
      title: "Differentiate and Find Your Competitive Edge",
      content: "Identify what sets your brand apart. Effective differentiation is crucial for capturing the attention of your target audience. Focus on the unique benefits that your product offers compared to competitors."
    },
    {
      id: 6,
      title: "Evaluate for Clarity and Credibility",
      content: "Ensure your positioning statement is clear, concise, and impactful. A well-crafted statement should serve as a guiding principle for your marketing strategies and should evolve as your business grows"
    }
  ];

  const examples = [
    {
      id: 1,
      title: "Starbucks",
      tagline: "Authentic coffee, great experience, and quick delivery.",
      whyitworks: "Evolved from focusing solely on coffee to creating a customer-centric experience."
    },
    {
      id: 2,
      title: "Tesla",
      tagline: "The only stylish car that can go from 0 to 100 in 3 seconds without a drop of oil.",
      whyitworks: "Engaging language fosters brand loyalty and highlights eco-friendliness."
    },
    {
      id: 3,
      title: "Amazon",
      tagline: "Our vision is to be the earth’s most customer-centric company, to build a place where people can find and discover anything they might want to buy online.",
      whyitworks: "Unique selling points emphasize customer satisfaction and product diversity."
    },
    {
      id: 4,
      title: "Nestle",
      tagline: "Produce affordable, safe, and high-quality nutrition for everyone, regardless of their income level.",
      whyitworks: "Communicates core values while targeting a broad audience."
    },
    {
      id: 5,
      title: "Airbnb",
      tagline: "For local and international travelers, Airbnb connects you to unique experiences worldwide",
      whyitworks: " Targets a specific niche by promoting unique, personalized travel experiences."
    },
    {
      id: 6,
      title: "Nike",
      tagline: "For athletes needing high-quality, fashionable athletic wear, Nike provides top-performing sports apparel.",
      whyitworks: "Clear and comprehensive, covering who, what, why, and how."
    },
    {
      id: 7,
      title: "Disney",
      tagline: "For the young and young-at-heart, Walt Disney World is the theme park that best delivers an immersive, magical experience",
      whyitworks: "Clearly defines the target market and desired brand perception."
    },
    {
      id: 8,
      title: "Spotify",
      tagline: "Unlocking the potential of human creativity by allowing a million creative artists to live off their art and billions of fans to enjoy and be inspired.",
      whyitworks: "Addresses the needs of both artists and listeners in the music streaming landscape."
    },
    {
      id: 9,
      title: "Slack",
      tagline: "Slack is the collaboration hub that brings together the right people, information, and tools to get work done.",
      whyitworks: "Clearly communicates core benefits and targets a wide range of businesses."
    },
    {
      id: 10,
      title: "Apple",
      tagline: "To bring the best user experience to its customers through innovative hardware, software, and services.",
      whyitworks: "Focuses on product impact and customer trust, solidifying brand identity."
    },
  ]
  return (
    <div className="flex flex-col items-center justify-center font-Blinker">
      <div className="bg-pos_elem w-screen md:w-[100vw] 2xl:w-[99.2vw] bg-no-repeat bg-cover relative overflow-x-hidden flex flex-col justify-center items-center res-width2 max-sm:h-[430px] md:h-96">
        <div className="flex flex-col justify-center items-start h-full res-width3">
          <h1 className="text-white font-Blinker text-4xl leading-10 font-normal w-[30rem] mr-[38rem]">
            How to Write a Positioning Statement
          </h1>
          <div className="flex pt-12">
            <h2 className="text-white text-xl -mt-1 cursor-pointer" onClick={() => navigate('/')}>Home</h2>
            <img src={arrow} alt="arrow" className="w-10 h-6 ml-3" />
            <h4 className="text-white -mt-1 ml-3 text-xl cursor-pointer" onClick={() => navigate('/blogs/Starting a Business: How to Go Prepared')}>Starting a Business: How to Go Prepared</h4>
          </div>
        </div>
      </div>
      <div className="bg-white flex res-width3 pt-[6rem] mb-48 max-md:flex-col max-sm:mt-3">
        {/* first div */}
        <div className="flex flex-col items-center justify-center w-full md:w-[70%]">
          {/* Basic Info */}
          <div className="flex w-full flex-wrap gap-4 justify-between md:pr-[2rem] lg:pr-[4rem] md:pl-[0.2rem]">
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
            <p className="md:w-[92%] font-Blinker font-normal text-[#828282] max-sm:text-[14px] md:text-[18px]">
              Creating a compelling positioning statement is essential for defining your brand's place in the market. Here’s a step-by-step guide to help you craft an effective positioning statement:
            </p>
          </div>

          {/* Contents - 2 */}
          <div className="w-[100%] flex flex-col gap-y-2  mt-[20px] max-sm:text-[14px]">
            {content.map((item, index) => (
              <div key={index} className="md:w-[92%] flex flex-col md:text-[18px] mb-4">
                <h1 className="font-Blinker font-bold">
                  {item.id}. {item.title}
                </h1>
                <p className="font-Blinker font-normal text-black">
                  <span className="font-normal text-[#828282] ">
                    {item.content}
                  </span>
                </p>
              </div>
            ))}
            <div>
              <h3 className="font-Blinker font-bold md:text-xl max-sm:text-[15px] ">Successful Examples of Positioning Statements</h3>

              <h4 className="text-[#828282] md:text-[18px]">Here are ten examples of iconic brands and their effective positioning statements:</h4>

              <div className="flex flex-col">
                {examples.map((item, index) => (
                  <div className="flex flex-col" key={index}>
                    <h2 className="font-bold md:text-[18px]">{item.id}. {item.title}</h2>
                      <p className="mt-2 text-[#828282] md:w-[45rem] md:text-[18px]">" {item.tagline} "</p>
                    <li className="ml-6 text-[#828282] md:text-[18px] md:w-[42rem]"><b>Why it Works</b> : {item.whyitworks}
                    </li>
                  </div>
                ))}
              </div>
            </div>

            <div>

            </div>

            {/*Conclusion*/}
            <h3 className="md:w-[92%] mt-5 -mb-3 font-Blinker font-bold md:text-xl max-sm:text-[15px]">
              Conclusion
            </h3>
            <p className="md:w-[92%] text-[#828282] font-Blinker font-normal text-[18px] max-sm:text-[14px]">
              By following these steps and using these examples as inspiration, you can create a positioning statement that effectively communicates your brand's unique value and resonates with your target audience.
            </p>
          </div>
        </div>

        {/* second div */}
        <div className="max-md:mt-[5rem] relative lg:w-[28%]">
          <div className="sticky top-[40px] flex flex-col items-center max-md:gap-10">
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
            <div className="flex flex-col mt-[65px] mb-6 w-[20rem] md:w-[100%] max-sm:mt-6">
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

import arrow from "../../../public/assets/arrow.png"
import Footer from "../Footer.jsx";
import { FaRegCalendarAlt, FaTag } from "react-icons/fa";
import author from "../../../public/assets/author.png"
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
            content: "2 Oct 2024",
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

    const subscription = [
        {
            title: "Identify Service Offerings",
            desc: "Determine which of your services can be offered on a subscription basis. This could include monthly consultations, access to exclusive content, or continuous support."
        },
        {
            title: "Create Tiered Packages",
            desc: "Develop tiered subscription packages that cater to different customer needs. For example, you might offer basic, standard, and premium tiers, each with varying levels of service and benefits."
        },
        {
            title: "Market Your Subscription Model",
            desc: "Highlight the advantages of your subscription service in your marketing efforts. Focus on the convenience, cost savings, and additional value customers receive by subscribing rather than opting for one-off services."
        },
        {
            title: "Offer Trials or Discounts",
            desc: "Encourage new customers to try your subscription model by offering a free trial period or introductory discounts. This lowers the barrier to entry and allows potential clients to experience the value of your services firsthand."
        }
    ];

    const pricingModels = [
        {
            title: "Hourly Rates",
            desc: "Charge clients based on the number of hours worked. This is often used in consulting, legal, and creative services."
        },
        {
            title: "Flat Fees",
            desc: "Offer a fixed price for specific services or projects. This approach is transparent and can be more appealing to clients."
        },
        {
            title: "Value-Based Pricing",
            desc: "Set prices based on the perceived value of your services to customers rather than just the cost to deliver them. This requires a deep understanding of customer needs and the benefits they seek."
        },
        {
            title: "Subscription Pricing",
            desc: "As discussed earlier, this involves charging customers a recurring fee for access to your services over time. This model fosters loyalty and provides stable revenue."
        }
    ];

    const pricingSubscription = [
        {
            title: "Tiered Pricing",
            desc: "Offer different subscription levels with varying features and benefits. This allows customers to choose the plan that best fits their needs and budget."
        },
        {
            title: "Freemium Model",
            desc: "Provide basic services for free while charging for premium features. This can attract a larger audience and convert free users into paying customers over time."
        },
        {
            title: "Annual Discounts",
            desc: "Encourage long-term commitment by offering discounts for customers who pay for a full year upfront. This secures revenue and enhances customer retention."
        },
        {
            title: "Loyalty Rewards",
            desc: "Implement a loyalty program that offers discounts or additional services for long-term subscribers. This incentivizes clients to stay with your service longer."
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-serv_busi_bg w-full xl:w-[99.2vw] bg-no-repeat bg-cover relative overflow-x-hidden flex flex-col justify-center items-center res-width2 max-sm:h-[430px] md:h-96">
                {/* Intro */}
                <div className="res-width3 flex flex-col justify-center items-start h-full">
                    <h1 className="text-white font-Blinker text-4xl leading-10 font-normal md:w-[30rem] md:mr-[38rem] max-sm:ml-6">
                        How to Run a Services Business Successfully: Strategies for Growth and Sustainability
                    </h1>
                    <div className="flex pt-12">
                        <h2 className="text-white text-xl -mt-1 cursor-pointer max-sm:text-[15px] max-sm:ml-7" onClick={() => navigate('/')}>Home</h2>
                        <img src={arrow} alt="arrow" className="md:w-10 md:h-6 md:ml-3 max-sm:w-6 max-sm:h-3 max-sm:mt-1 max-sm:ml-2" />
                        <h4 className="text-white -mt-1  max-sm:ml-2 md:ml-3 text-xl cursor-pointer max-sm:text-[15px]" onClick={() => navigate('/blogs/Understanding Outbound Sales')}>How to Run a Services Business <span className="hidden max-sm:inline">
                            <br />
                        </span>Successfully </h4>
                    </div>
                </div>
            </div>
            <div className="bg-white flex max-md:flex-col justify-between res-width3 mt-[5rem] mb-52">
                {/* first div */}
                <div className="flex flex-col items-center justify-center md:w-[70%]">
                    {/* Basic Info */}
                    <div className="flex w-full flex-wrap gap-4 justify-between md:pr-[2rem] lg:pr-[4rem] md:pl-[0.2rem]">
                        {info.map((item, index) => (
                            <div key={index} className="flex items-center gap-x-4">
                                <div className="border-[#828282] h-12 w-12 rounded-full border-[1px] flex items-center justify-center max-sm:h-9 max-sm:w-9">
                                    {item.icon}
                                </div>
                                {/* Content to the right of the icon */}
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
                        <p className="md:w-[92%] font-Blinker font-normal text-[#828282] max-sm:text-[14px]">
                            Running a services business can be both fulfilling and demanding. Unlike traditional product-based companies, service-oriented businesses depend heavily on customer relationships, expertise, and the ability to adapt to changing market conditions. To succeed, you must focus on various aspects, including understanding your target market, delivering exceptional service, and creating sustainable business models. This blog will explore essential strategies for running a successful services business, emphasizing crafting a compelling positioning statement, incorporating a subscription model, and developing effective pricing strategies.
                        </p>
                    </div>

                    {/* Contents - 2 */}
                    <div className="w-[100%] flex flex-col gap-y-2  mt-[20px] max-sm:text-[14px]">
                        {/* Understanding Target Market */}
                        <div className="md:w-[92%] flex flex-col md:text-[18px] mb-4">
                            <h2 className="font-bold md:text-2xl max-sm:text-[16px]">Understanding Your Target Market</h2>
                            <section className="flex flex-col md:mt-3 max-sm:mt-1">
                                <h2 className="font-semibold max-sm:text-[14px] md:text-xl">Define Your Audience</h2>
                                <p className="text-[#828282] font-Blinker font-normal">The cornerstone of a successful services business is a deep understanding of your target market. Start by defining your ideal customers based on demographics, psychographics, and behaviors. Who are they? What are their pain points? What solutions can you provide that meet their needs? Conduct market research through surveys, interviews, or focus groups to gather valuable insights.
                                </p>
                            </section>
                            <section className="flex flex-col">
                                <h2 className="font-semibold max-sm:text-[14px] md:text-xl mt-2">Create Customer Personas</h2>
                                <p className="text-[#828282] font-Blinker font-normal">Once you have defined your audience, create customer personas. These semi-fictional characters embody your target customers and help you visualize their motivations and challenges. By keeping these personas in mind, you can tailor your services and marketing efforts more effectively.
                                </p>
                            </section>
                        </div>
                        {/* Positioning Statement */}
                        <div className="md:w-[92%] flex flex-col md:text-[18px] mb-4">
                            <h2 className="font-bold md:text-2xl max-sm:text-[16px]">Crafting a Strong Positioning Statement</h2>
                            <section className="flex flex-col md:mt-3 max-sm:mt-1">
                                <h2 className="font-semibold md:text-xl max-sm:text-[14px]">What is a Positioning Statement?</h2>
                                <p className="text-[#828282] font-Blinker font-normal max-sm:text-[14px]">A positioning statement is a concise description of your business's unique value proposition. It outlines what you do, for whom, and how you stand out from the competition. A well-crafted positioning statement serves as a guiding star for your marketing and operational strategies.
                                </p>
                            </section>
                            {/* How to Write a Positioning Statement */}
                            <section className="flex flex-col max-sm:mt-1">
                                <h2 className="font-semibold md:text-xl max-sm:text-[14px]">
                                    How to Write a Positioning Statement
                                </h2>
                                <p className="text-[#828282] font-Blinker font-normal max-sm:text-[14px] ">A positioning statement is a concise description of your business's unique value proposition. It outlines what you do, for whom, and how you stand out from the competition. A well-crafted positioning statement serves as a guiding star for your marketing and operational strategies.
                                </p>
                            </section>
                            {/* Benefits of a Positioning Statement */}
                            <section className="flex flex-col">
                                <h2 className="font-semibold text-xl">
                                    Benefits of a Positioning Statement
                                </h2>
                                <p className="text-[#828282] font-Blinker font-normal max-sm:text-[14px] ">A strong positioning statement clarifies your brand identity, aligns your team around a common goal, and communicates your value to customers. It helps differentiate your business in a crowded market, allowing you to carve out a niche and attract the right audience.
                                </p>
                            </section>
                        </div>
                        {/* Delivering Exceptional Customer Service */}
                        <div className="md:w-[92%] flex flex-col md:text-[18px] mb-4">
                            <h2 className="font-bold md:text-2xl max-sm:text-[16px]">Delivering Exceptional Customer Service</h2>
                            <section className="flex flex-col">
                                <h2 className="font-semibold md:text-xl max-sm:text-[14px]">Customer-Centric Approach
                                </h2>
                                <p className="text-[#828282] font-Blinker font-normal max-sm:text-[14px]">Exceptional customer service is crucial for retaining clients and generating referrals. Train your team to be responsive, empathetic, and proactive. Encourage them to listen to customer feedback actively and resolve issues promptly. Remember, a positive customer experience often leads to loyalty and repeat business.
                                </p>
                            </section>

                            {/* Create a Feedback Loop */}
                            <section className="flex flex-col">
                                <h2 className="font-semibold md:text-xl max-sm:text-[14px]">Create a Feedback Loop
                                </h2>
                                <p className="text-[#828282] font-Blinker font-normal max-sm:text-[14px]">Implement regular check-ins with your customers to gauge satisfaction levels. Use surveys or follow-up calls to gather insights and make adjustments based on feedback. Demonstrating that you value customer input can significantly enhance loyalty and strengthen relationships.
                                </p>
                            </section>
                        </div>

                        {/* Subscription Model */}
                        <h2 className="font-bold md:text-2xl max-sm:ml-[185px] max-sm:text-[16px]">Incorporating a Subscription Model
                        </h2>

                        {/* Benefits of a Subscription Model */}
                        <section className="md:w-[92%] flex flex-col md:text-[18px] mb-4">
                            <h2 className="font-semibold md:text-xl max-sm:text-[16px]">Benefits of a Subscription Model
                            </h2>
                            <p className="text-[#828282] font-Blinker font-normal">A subscription model offers a predictable revenue stream, enhances customer retention, and allows for more streamlined service delivery. By offering services on a subscription basis, you create ongoing relationships with customers, encouraging them to return for more.
                            </p>
                        </section>

                        {/* How to Implement a Subscription Model */}
                        <div className="md:w-[92%] flex flex-col md:text-[18px] mb-4">
                            <h2 className="font-semibold">How to Implement a Subscription Model
                            </h2>
                            <div className="flex flex-col mt-1"> 
                                {subscription.map((item, index) => (
                                    <div key={index} className="flex flex-col items-start mb-2 "> 
                                        <h5 className="font-semibold">{index + 1}. {item.title}</h5> 
                                        <p className="text-[#828282] font-Blinker font-normal">{item.desc}</p> 
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pricing Strategies */}
                        <div className="md:w-[92%] flex flex-col md:text-[18px] mb-4">
                            <section>
                                <h2 className="font-bold md:text-2xl max-sm:text-[18px]">Effective Pricing Strategies
                                </h2>
                            </section>

                            {/* Effective Strategies Model */}
                            <section className="max-sm:mt-2">
                                <h2 className="font-semibold md:text-xl max-sm:text-[14px]">Understanding Pricing Models</h2>
                                <p className="text-[#828282] max-sm:w-[335px]">Pricing is a critical component of your business strategy. It impacts profitability, customer perception, and competitive positioning. For service businesses, common pricing strategies include:                            </p>
                                <div className="flex flex-col mt-4"> {/* Added margin-top for spacing */}
                                    {pricingModels.map((item, index) => (
                                        <div key={index} className="flex flex-col items-start mb-2 max-sm:w-[335px]"> {/* Added items-start and margin-bottom for spacing */}
                                            <h5 className="font-semibold">{index + 1}. {item.title}</h5> {/* Added font-semibold for consistent styling */}
                                            <p className="text-[#828282] font-Blinker font-normal">{item.desc}</p> {/* Added margin-left for spacing */}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="font-semibold md:text-xl">Pricing Strategies for Subscription Models
                                </h2>
                                <p className="text-[#828282] max-sm:w-[335px]">Pricing is a critical component of your business strategy. It impacts profitability, customer perception, and competitive positioning. For service businesses, common pricing strategies include:                            </p>
                                <div className="flex flex-col mt-4"> {/* Added margin-top for spacing */}
                                    {pricingSubscription.map((item, index) => (
                                        <div key={index} className="flex flex-col items-start mb-2 max-sm:w-[335px]"> {/* Added items-start and margin-bottom for spacing */}
                                            <h5 className="font-semibold">{index + 1}. {item.title}</h5> {/* Added font-semibold for consistent styling */}
                                            <p className="text-[#828282] font-Blinker font-normal">{item.desc}</p> {/* Added margin-left for spacing */}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Streamlining Operations */}
                        <div className="md:w-[92%] flex flex-col md:text-[18px] mb-4">
                            <h2 className="font-bold md:text-2xl max-sm:text-[16px] ">Streamlining Operations</h2>
                            <section className="flex flex-col md:mt-3">
                                <h2 className="font-semibold md:text-xl">Optimize Processes</h2>
                                <p className="text-[#828282] font-Blinker font-normal">Efficiency is key in a service-based business. Streamline your operations by implementing systems that enhance productivity. Use project management tools to track tasks and deadlines, and consider automation for repetitive processes.
                                </p>
                            </section>
                            <section className="flex flex-col">
                                <h2 className="font-semibold md:text-xl mt-2">Monitor Performance
                                </h2>
                                <p className="text-[#828282] font-Blinker font-normal">Regularly evaluate your operational processes for areas of improvement. Collect data on performance metrics, such as customer satisfaction, response times, and service delivery timelines. Use this information to make informed adjustments and improve service quality.
                                </p>
                            </section>
                        </div>

                        {/* Investing in Your Team */}
                        <div className="md:w-[92%] flex flex-col md:text-[18px] mb-4">
                            <h2 className="font-bold md:text-2xl max-sm:text-[16px]">Investing in Your Team</h2>
                            <section className="flex flex-col md:mt-3">
                                <h2 className="font-semibold md:text-xl ">Hire the Right People
                                </h2>
                                <p className="text-[#828282] font-Blinker font-normal">Your team is the backbone of your services business. Hire skilled professionals who align with your company culture and values. Look for individuals who not only possess the necessary skills but also demonstrate a commitment to customer service.

                                </p>
                            </section>
                            <section className="flex flex-col">
                                <h2 className="font-semibold md:text-xl mt-2">Provide Ongoing Training

                                </h2>
                                <p className="text-[#828282] font-Blinker font-normal">Invest in ongoing training and development opportunities to enhance your team’s skills and knowledge. A motivated and well-trained workforce is essential for delivering high-quality service and maintaining customer satisfaction.

                                </p>
                            </section>
                        </div>

                        {/* Leveraging Technology */}
                        <div className="md:w-[92%] flex flex-col md:text-[18px] mb-4">
                            <h2 className="font-bold md:text-2xl max-sm:text-[16px]">Leveraging Technology</h2>
                            <section className="flex flex-col md:mt-3">
                                <h2 className="font-semibold md:text-xl">Embrace Digital Solutions
                                </h2>
                                <p className="text-[#828282] font-Blinker font-normal">In today’s digital world, leveraging technology can give your services business a competitive edge. Invest in software tools for scheduling, invoicing, customer relationship management (CRM), and communication. These tools can enhance operational efficiency and improve customer interactions.

                                </p>
                            </section>
                            <section className="flex flex-col max-sm:text-[14px] max-sm:mt-1">
                                <h2 className="font-semibold md:text-xl mt-2">Utilize Online Marketing Strategies</h2>
                                <p className="text-[#828282] font-Blinker font-normal">Develop a comprehensive online marketing strategy to attract and retain customers. Use content marketing, social media, and email campaigns to reach a broader audience. Consistently promote your services and share success stories to demonstrate value.

                                </p>
                            </section>
                        </div>

                        {/* Monitoring Financial Health */}
                        <div className="md:w-[92%] flex flex-col md:text-[18px] mb-4">
                            <h2 className="font-bold text-2xl  max-sm:text-[16px]">Monitoring Financial Health
                            </h2>
                            <section className="flex flex-col md:mt-3 max-sm:text-[14px]">
                                <h2 className="font-semibold md:text-xl">Keep Track of Your Finances
                                </h2>
                                <p className="text-[#828282] font-Blinker font-normal">Maintaining a close eye on your financial health is vital for sustainable growth. Implement robust accounting practices to track income, expenses, and profitability. Regularly review financial statements to understand your cash flow and overall performance.
                                </p>
                            </section>
                            <section className="flex flex-col max-sm:text-[14px]">
                                <h2 className="font-semibold md:text-xl mt-2">Plan for Future Growth
                                </h2>
                                <p className="text-[#828282] font-Blinker font-normal">Create a financial plan that outlines your business goals and strategies for achieving them. Consider setting aside funds for emergencies, marketing initiatives, or future expansions. Being financially prepared can help your business navigate uncertainties and capitalize on opportunities.
                                </p>
                            </section>
                        </div>
                        {/*Conclusion*/}
                        <h3 className="mt-5 -mb-3 font-Blinker font-bold md:text-xl max-sm:ml-[185px] max-sm:text-[15px] ">Conclusion</h3>
                        <p className="md:w-[95%] text-[#828282] font-Blinker font-normal text-[18px] max-sm:text-[14px]">
                            Running a successful services business requires a multi-faceted approach that encompasses understanding your market, delivering exceptional service, crafting a compelling positioning statement, and implementing sustainable business models like subscriptions. By developing effective pricing strategies, investing in your team, leveraging technology, and continuously seeking feedback, you can build a robust foundation for growth and sustainability. Stay adaptable and committed to your customers, and your services business will not only thrive but also stand out in a competitive landscape.
                        </p>
                    </div>
                </div>

                {/* second div */}
                <div className="max-md:mt-[5rem] relative lg:w-[30%]">
                    <div className="sticky top-[40px] flex flex-col items-center max-md:gap-10 gap-5 w-full">
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
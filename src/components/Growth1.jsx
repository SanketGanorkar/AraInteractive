import growth1 from "/assets/pic.png";

const Growth1 = () => {
  const faqs = [
    {
      id: 1,
      question: "How do you help achieve product-market fit?",
      desc: "We refine the product by analyzing market trends, competitors, & customer feedback. Testing ensures the product aligns with market needs for success.",
    },
    {
      id: 2,
      question: "What’s your GTM strategy process?",
      desc: "We develop a custom plan for your launch, focusing on the right channels, clear messaging, and performance metrics to boost visibility and impact.",
    },
    {
      id: 3,
      question: "How do you support business scaling?",
      desc: "We review your operations, find growth areas, and implement strategies for long-term success, while offering ongoing support to adapt to the market.",
    },
  ];

  return (
    <div className="bg-[#F1EEEE] w-full h-[40rem]" id="growth">
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-start gap-x-1 md:pt-[1px] res-width overflow-hidden">
          <div className="relative w-[40rem] hidden md:block">
            <img
              src={growth1}
              alt=""
              className="absolute left-0 bottom-0 h-[40rem] object-contain"
            />
          </div>
          <div className="flex flex-col pb-12 px-4 md:px-0">
            <h1 className="font-Blinker font-normal md:w-[380px] md:mt-2 md:text-[42px] max-sm:w-[318px] max-sm:mt-9 max-sm:text-[32px]">
              From Market Fit to Outbound Outreach, We Optimize Every Step
            </h1>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col">
                <h2 className="font-Blinker font-normal md:w-[380px] mt-12 text-2xl">
                  “ Sales can be overwhelming, with many unknowns and uncertainties. That’s why we simplify the go-to-market process, removing the guesswork. “
                </h2>
                <h3 className="font-Blinker font-normal text-2xl mt-7">
                  Ashutosh K Pandey
                </h3>
                <h4 className="font-Blinker font-light text-[#8E8E8E]">
                  Growth Marketing Consultant
                </h4>
              </div>

              {/* Vertical divider */}
              <div className="bg-[#000000A3] h-[200px] w-[1px] mx-0 md:ml-12 md:mx-12 max-sm:hidden"></div>

              {/* FAQ Section */}
              <div className="flex flex-col gap-y-2 max-sm:mt-12 md:-mt-[120px]">
                <h4 className="font-Blinker font-normal text-2xl ml-0 md:ml-2">
                  FAQs
                </h4>
                {faqs.map((item, index) => (
                  <details
                    key={index}
                    className="flex flex-col bg-[#E7E7E7] p-3 my-2 rounded-md w-[33rem]"
                    name="accordian"
                  >
                    <summary className="font-Blinker font-normal text-lg cursor-pointer">
                      {item.question}
                    </summary>
                    <p className="font-Blinker font-light ml-4 mt-2 ">
                      {item.desc}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth1;


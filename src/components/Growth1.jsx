import { useState } from "react";
import growth1 from "../../public/assets/pic.png";

const Growth1 = () => {
  const faqs = [
    {
      id: 1,
      question:
        "What is the process for determining product-market fit, and how can your team assist with it?",
      desc: "Our team conducts thorough market research to identify your target audience's needs and pain points. We analyze customer feedback, competitor offerings, and market trends to refine your product's features and value proposition. Through iterative testing and validation, we ensure that your product aligns perfectly with market demands, enhancing its appeal and likelihood of success.",
    },
    {
      id: 2,
      question: "How does your go-to-market (GTM) strategy work?",
      desc: "Our GTM strategy involves a comprehensive approach that includes market research, positioning, messaging, and distribution planning. We work closely with you to create a tailored strategy that maximizes visibility and impact during your product launch. This includes identifying the right channels, crafting compelling messaging, and establishing metrics to measure success, ensuring your product gains traction in the market.",
    },
    {
      id: 3,
      question: "What support do we provide for scaling your business?",
      desc: "We offer customized scaling strategies that focus on optimizing your current operations, expanding your market reach, and driving sustainable growth. Our team analyzes your existing processes, identifies growth opportunities, and implements actionable solutions. We also provide ongoing support to ensure that your business can adapt to changing market conditions and continue to thrive.",
    },
  ];

  // Track if any FAQ is open
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (index) => {
    setIsOpen((prev) => (prev === index ? null : index)); // Toggle open/close state
  };

  return (
    <div className="bg-[#F1EEEE] w-full" id="growth">
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-start gap-x-1 md:pt-[1px] res-width">
          <img
            src={growth1}
            alt=""
            className="h-[35rem] -ml-[70px] hidden md:block"
          />
          <div className="flex flex-col pb-12 px-4 md:px-0">
            <h1 className="font-Blinker font-normal md:w-[380px] mt-2 text-[42px] max-sm:w-[318px]">
              From Market Fit to Outbound Reach, We Optimize Every Step
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
              <div
                className={`bg-[#000000A3] ${isOpen !== false ? "h-[400px]" : "h-[270px]"
                  } w-[1px] mx-0 md:ml-12 md:mx-12 max-sm:hidden transition-all duration-300`}
              ></div>

              {/* FAQ Section */}
              <div className="flex flex-col gap-y-2 max-sm:mt-12 md:-mt-[170px]">
                <h4 className="font-Blinker font-normal text-2xl ml-0 md:ml-2">
                  FAQs
                </h4>
                {faqs.map((item, index) => (
                  <details
                    key={index}
                    open={isOpen === index}
                    onClick={() => handleToggle(index)}
                    className="flex flex-col bg-[#E7E7E7] p-3 my-2 rounded-md transition-all"
                  >
                    <summary className="font-Blinker font-normal text-lg cursor-pointer">
                      {item.id}. {item.question}
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

// import growth1 from "../../public/assets/pic.png";

// const Growth1 = () => {
//   const faqs = [
//     {
//       id: 1,
//       question: "What is the process for determining product-market fit, and how can your team assist with it?",
//       desc: "We conduct market research to identify your audience's needs, analyze feedback and competitors, and refine your product. Through testing and validation, we ensure your product aligns with market demands for greater success.",
//     },
//     {
//       id: 2,
//       question: "How does your go-to-market (GTM) strategy work?",
//       desc: "We’ve designed a culture that allows our stewards to assimilate with our clients and bring the best of who we are to your business.",
//     },
//     {
//       id: 3,
//       question: "What support do we provide for scaling your business?",
//       desc: "We’ve designed a culture that allows our stewards to assimilate with our clients and bring the best of who we are to your business.",
//     },
//   ];

//   return (
//     <div className="bg-[#F1EEEE]">
//       <div className="flex justify-center items-center">
//         <div className="flex flex-col md:flex-row justify-start gap-x-1 md:pt-[70px] res-width">
//           <img
//             src={growth1}
//             alt=""
//             className="h-[35rem] -ml-[70px] hidden md:block"
//           />
//           <div className="flex flex-col pb-12 px-4 md:px-0">
//             <h1 className="font-Blinker font-normal md:w-[580px] mt-12 text-[42px] max-sm:w-[318px]">
//               Scale, Growth and Optimizing as Fast as you need to.
//             </h1>
//             <div className="flex flex-col md:flex-row">
//               <div className="flex flex-col">
//                 <h2 className="font-Blinker font-normal md:w-[380px] mt-12 text-2xl">
//                 “ Sales can be overwhelming, with many unknowns and uncertainties. That’s why we simplify the go-to-market process, removing the guesswork. “
//                 </h2>
//                 <h3 className="font-Blinker font-normal text-2xl mt-7">
//                   Ashutosh K Pandey
//                 </h3>
//                 <h4 className="font-Blinker font-light text-[#8E8E8E]">
//                   Growth Marketing Consultant
//                 </h4>
//               </div>

//               {/* Vertical divider */}
//               <div className="bg-[#000000A3] h-[270px] w-[1px] mt-5 mx-0 md:ml-12 md:mx-12 max-sm:hidden"></div>

//               {/* FAQ Section */}
//               <div className="flex flex-col gap-y-2 max-sm:mt-12">
//                 <h4 className="font-Blinker font-normal text-2xl ml-0 md:ml-12">
//                   Some FAQ here
//                 </h4>
//                 {faqs.map((item, index) => (
//                   <details
//                     key={index}
//                     className="flex flex-col bg-[#E7E7E7] p-3 my-2 rounded-md"
//                   >
//                     <summary className="font-Blinker font-normal text-lg cursor-pointer">
//                       {item.id}. {item.question}
//                     </summary>
//                     <p className="font-Blinker font-light ml-4 mt-2 ">
//                       {item.desc}
//                     </p>
//                   </details>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Growth1;


function Ashutosh() {

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
        <div className="bg-[#F1EEEE] w-full h-auto md:h-[35rem] flex justify-center items-center" id="growth">
            <div className='res-width4 h-full flex max-lg:gap-10 max-md:flex-col'>
                <div className='md:w-[60%] h-full relative flex lg:max-xl:-ml-10'>
                    <img
                        src="/assets/pic.png"
                        alt=""
                        className="absolute left-[-24px] bottom-0 xl:h-full h-[90%] max-lg:hidden"
                    />
                    <div className='max-md:w-full lg:w-[60%] h-full pt-8 pb-10 flex flex-col justify-center xl:justify-end lg:ml-[45%]'>
                        <h1 className='font-Blinker font-normal md:mt-2 2xl:text-[42px] max-2xl:text-[30px] max-sm:w-[318px] max-sm:mt-9 max-sm:text-[32px]'>
                            From Market Fit to Outbound Outreach, We Optimize Every Step
                        </h1>
                        <p className='font-Blinker font-normal xl:w-[380px] mt-6 xl:mt-12 text-xl xl:text-2xl'>
                            “ Sales can be overwhelming, with many unknowns and uncertainties. That’s why we simplify the go-to-market process, removing the guesswork. “
                        </p>
                        <p className="font-Blinker font-normal text-xl xl:text-2xl mt-7">
                            Ashutosh K Pandey
                        </p>
                        <p className="font-Blinker font-light text-[#8E8E8E]">
                            Growth Marketing Consultant
                        </p>
                    </div>
                </div>
                <div className='h-full flex justify-center items-center'>
                    <div className='h-[1px] w-[80%] md:w-[1px] bg-black md:h-[50%]' />
                </div>
                <div className='md:w-1/2 lg:w-[40%]'>
                    <div className="flex flex-col gap-y-2 lg:ml-10 justify-center md:mt-[25%]">
                        <h4 className="font-Blinker font-normal text-2xl ml-0 md:ml-2">
                            FAQs
                        </h4>
                        {faqs.map((item, index) => (
                            <details
                                key={index}
                                className="flex flex-col bg-[#E7E7E7] p-3 my-2 rounded-md w-full"
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
    )
}

export default Ashutosh
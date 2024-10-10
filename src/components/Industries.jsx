import automotive from "../../public/assets/automotive.png";
import consumer from "../../public/assets/consumer.png";
import ecom from "../../public/assets/ecom.png";
import edu_health from "../../public/assets/edu_health.png";
import energy from "../../public/assets/energy.png";
import indus from "../../public/assets/indus.png";
import real_estate from "../../public/assets/real_estate.png";
import travel from "../../public/assets/travel.png";
import tech_saas from "../../public/assets/tech_saas.png";
const Industries = () => {
  const info1 = [
    {
      id: 1,
      logo: tech_saas,
      title: "Technology and SaaS",
    },
    { id: 2, logo: indus, title: "Manufacturing and Industrial Technology" },
    { id: 3, logo: ecom, title: "E-commerce and Retail" },
    { id: 4, logo: edu_health, title: "Education and EdTech" },
    { id: 5, logo: travel, title: "Travel, Hospitality, and Tourism" },
  ];
  const info2 = [
    {
      id: 1,
      logo: consumer,
      title: "Consumer Goods and CPG",
    },
    { id: 2, logo: energy, title: "Energy and Sustainability" },
    { id: 3, logo: real_estate, title: "Real Estate and PropTech" },
    { id: 4, logo: automotive, title: "Automotive and Mobility" },
  ];
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <div className="flex flex-col justify-start items-start res-width sm:ml-[150px] max-sm:ml-12">
        <h1 className="font-Blinker font-semibold text-3xl">
          Industries We Help
        </h1>

        <div className="flex sm:flex-row mt-12 gap-x-[180px] justify-around max-sm:flex-col md:justify-start max-sm:gap-y-16">
          {/* First row */}
          <div className="flex flex-col gap-y-5">
            {info1.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <div className="flex flex-row">
                  <img src={item.logo} alt="" />
                  <h2 className="font-Blinker font-normal ml-3 text-[#4C4C4C] max-sm:text-[14px]">
                    {item.title}
                  </h2>
                </div>
                {item.id != 5 && (
                  <div className="bg-[#A2A2A2] h-[1px] w-80 mt-2"></div>
                )}
              </div>
            ))}
          </div>

          {/* Second row */}
          <div className="flex flex-col gap-y-5">
            {info2.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <div className="flex flex-row">
                  <img src={item.logo} alt="" />
                  <h2 className="font-Blinker font-normal ml-3 text-[#4C4C4C] max-sm:text-[14px] mt-1">
                    {item.title}
                  </h2>
                </div>
                {item.id != 4 && (
                  <div className="bg-[#A2A2A2] h-[1px] w-[390px] mt-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Booster from "../../public/img/porto/booster.svg";
import Renaci from "../../public/img/porto/renaci.svg";
import Momotor from "../../public/img/porto/momotor.svg";
import Indosat from "../../public/img/porto/indosat.svg";
import EurekaCampus from "../../public/img/porto/eureka_campus.svg";
import EurekaEdutech from "../../public/img/porto/eureka-edutech.svg";
import { describe } from "node:test";

const ListCard = () => {
  useEffect(() => {
    AOS.init({
      // offset (in px) from the original trigger point
      // values from 0 to 3000, with step 50ms
      duration: 2000, // values from 0 to 3000, with step 50ms
    });
  }, []);

  const dataList = [
    {
      id: 1,
      name: "Life Booster",
      image: Booster,
      describe:
        "life booster is an e-commerce that sells various coffee beverage products, including light roast, medium roast, dark roast, decaf",
    },
    {
      id: 2,
      name: "Renaci",
      image: Renaci,
      describe:
        "Renewable Academy Indonesia is a leading initiative that aims to address the knowledge gap in the field of renewable energy by providing a comprehensive and easily accessible learning platform",
    },
    {
      id: 3,
      name: "Momotor.id & Momobil.id",
      image: Momotor,
      describe:
        "momotor.id & momobil.id are Adira Finance's latest digital innovations to answer consumer needs for e-commerce sites for buying and selling quality used motorcycles and car. Not only that, momotor.id is also a platform that we provide for dealers and sellers of used motorbikes and cars",
    },
    {
      id: 4,
      name: "MyRisk Management",
      image: Indosat,
      describe:
        "Indosat's internal website for risk management analysis and reporting. This system carries out monitoring for production cost management in the field, division heads can directly monitor financial reports and losses interpreted by the company",
    },
    {
      id: 5,
      name: "Eureka Campus",
      image: EurekaCampus,
      describe:
        "Eureka is an educational technology ecosystem in Indonesia. The main mission of Eureka Campus is to continue to synergize and support educational transformation in various concentrations that continue to change and keep up with the times. Starting from one small goal, it eventually developed to achieve something bigger for the development of modern Indonesian education.",
    },
    {
      id: 5,
      name: "Eureka Edutech",
      image: EurekaEdutech,
      describe:
        "An application that can help students to learn material about literacy, numeracy, and science easily. The curriculum in this application refers to the main indicators tested in the 2022 national assessment to support the improvement of Indonesia's PISA ranking.",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4">
      {dataList.map((data, index) => (
        <div
          className="w-auto h-auto hover:z-10"
          key={index}
          data-aos="fade-right"
        >
          <div
            className={`w-full bg-transparent h-auto flex ${
              data.id % 2 == 0 ? "flex-row-reverse" : "flex"
            } justify-around items-center max-[1094px]:flex-col max-[1094px]:gap-8 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-5`}
          >
            <div className="flex flex-col gap-2 w-[30%] max-[1094px]:w-[80%] max-[500px]:w-full">
              <span className="text-blue-300 text-[2.5rem] font-bold max-[792px]:text-[1.5rem] leading-normal">
                {data.name}
              </span>
              <span className="text-[1rem] text-white">{data.describe}</span>
            </div>
            <Image
              src={data.image}
              alt=""
              className="w-[50%] h-full max-[1094px]:w-[80%] max-[500px]:w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCard;

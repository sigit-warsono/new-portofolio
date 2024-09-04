import React from "react";
import Image from "next/image";
import Userf from "../../public/img/userf.svg";
import Guarantee from "../../public/img/guarantee.svg";
import Consult from "../../public/img/discussion.svg";
import OD from "../../public/img/real-time.svg";
const Service = () => {
  return (
    <div
      className="flex flex-col gap-4 px-6 mt-32 justify-center mb-12"
      id="service"
    >
      <span
        data-aos="fade-left"
        className="font-bold text-white text-[3rem] flex justify-center items-center max-[792px]:text-[1.5rem]"
      >
        Service
      </span>
      <div className="flex flex-col gap-10">
        <div className="w-full flex justify-around max-[659px]:flex-col max-[659px]:gap-7">
          <div className="flex flex-col items-center gap-1">
            <span className="p-4 rounded-3xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
              <Image src={Userf} alt="" className="w-[8rem] h-[8rem]" />
            </span>
            <span className="text-white text-[2rem] font-bold max-[659px]:text-[1.3rem]">
              User friendly
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="p-4 rounded-3xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
              <Image src={Guarantee} alt="" className="w-[8rem] h-[8rem]" />
            </span>
            <span className="text-white text-[2rem] font-bold max-[659px]:text-[1.3rem]">
              Guarantee
            </span>
          </div>
        </div>
        <div className="w-full flex justify-around mt-6 max-[659px]:flex-col max-[659px]:gap-7">
          <div className="flex flex-col items-center gap-1">
            <span className="p-4 rounded-3xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
              <Image src={Consult} alt="" className="w-[8rem] h-[8rem]" />
            </span>
            <span className="text-white text-[2rem] font-bold max-[659px]:text-[1.3rem]">
              Free Consultant
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="p-4 rounded-3xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
              <Image src={OD} alt="" className="w-[8rem] h-[8rem]" />
            </span>
            <span className="text-white text-[2rem] font-bold max-[659px]:text-[1.3rem]">
              On Time Delivery
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

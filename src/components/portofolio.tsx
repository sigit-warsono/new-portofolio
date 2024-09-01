import React, { useEffect } from "react";
import ListCard from "./listCard";
import sigit from "../../public/img/sigit.svg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Portofolio = () => {
  useEffect(() => {
    AOS.init({
      // offset (in px) from the original trigger point
      // values from 0 to 3000, with step 50ms
      duration: 2000, // values from 0 to 3000, with step 50ms
    });
  }, []);

  return (
    <div className="flex flex-col gap-4 px-6 mt-12 justify-center">
      <span
        data-aos="fade-left"
        className="font-bold text-white text-[3rem] flex justify-center items-center"
      >
        Portofolio
      </span>
      <ListCard />
    </div>
  );
};

export default Portofolio;

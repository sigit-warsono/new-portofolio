import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdHome } from "react-icons/io";
import { GrDocumentImage } from "react-icons/gr";
import { SiMockserviceworker } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const Sidebar = ({
  setOpenSidebar,
}: {
  setOpenSidebar: (value: boolean) => void;
}) => {
  useEffect(() => {
    AOS.init({
      // offset (in px) from the original trigger point
      // values from 0 to 3000, with step 50ms
      duration: 2000, // values from 0 to 3000, with step 50ms
    });
  }, []);

  return (
    <div className="absolute bg-blue-900 w-full h-screen z-50 p-3">
      <IoMdClose
        className="text-white text-[2rem] cursor-pointer"
        onClick={() => setOpenSidebar(false)}
      />
      <div className="flex w-full justify-center">
        <div className="flex flex-col gap-6 text-white text-[1.8rem] mt-4">
          <div className="flex items-center gap-2" data-aos="fade-left">
            <IoMdHome className="text-[1.6rem]" />
            <span>Home</span>
          </div>
          <div className="flex items-center gap-2" data-aos="fade-right">
            <CgProfile className="text-[1.6rem]" />
            <span>Profile</span>
          </div>
          <div className="flex items-center gap-2" data-aos="fade-left">
            <GrDocumentImage className="text-[1.5rem]" />
            <span>Portofolio</span>
          </div>
          <div className="flex items-center gap-2" data-aos="fade-right">
            <SiMockserviceworker className="text-[1.6rem]" />
            <span>Service</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

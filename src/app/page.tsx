"use client";
import Image from "next/image";
import Sigit from "../../public/img/sigit.svg";
import { ReactTyped } from "react-typed";
import ListCard from "@/components/listCard";
import Portofolio from "@/components/portofolio";
import { CgProfile } from "react-icons/cg";
import { IoMdHome } from "react-icons/io";
import { GrDocumentImage } from "react-icons/gr";
import { SiMockserviceworker } from "react-icons/si";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Sidebar from "@/components/modal/sidebar";
import { useState } from "react";
import Link from "next/link";
import Profile from "@/components/profile";
import Service from "@/components/service";

export default function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      {openSidebar && <Sidebar setOpenSidebar={setOpenSidebar} />}
      <div className="flex flex-col bg-[#28436E]">
        <div
          className="flex bg-[#28436E] max-[1114px]:flex-col-reverse"
          id="home"
        >
          <div className="h-screen w-[75%] max-[1114px]:w-full bg-[url('/img/Vector.svg')] bg-no-repeat bg-cover flex justify-start items-center  max-[773px]:items-start  gap-28">
            <div className="flex flex-col gap-1 fixed z-40 max-[773px]:hidden">
              <Link
                href={"/#home"}
                className="w-[5rem] h-[5rem] rounded-r-xl bg-blue-400 flex justify-center gap-1 items-center group hover:w-[7rem] transition-all duration-500 ease-out cursor-pointer"
              >
                <IoMdHome className="text-[1.5rem] text-blue-900 group-hover:text-white" />
                <span className="text-white hidden group-hover:block">
                  Home
                </span>
              </Link>
              <Link
                href={"/#profile"}
                className="w-[5rem] h-[5rem] rounded-r-xl bg-blue-400 flex justify-center gap-1 items-center group hover:w-[7rem] transition-all duration-500 ease-out"
              >
                <CgProfile className="text-[1.5rem] text-blue-900 group-hover:text-white" />
                <span className="text-white hidden group-hover:block">
                  Profile
                </span>
              </Link>

              <Link
                href={"/#portfolio"}
                className="w-[5rem] h-[5rem] rounded-r-xl bg-blue-400 flex justify-center gap-1 items-center group hover:w-[7rem] transition-all duration-500 ease-out"
              >
                <GrDocumentImage className="text-[1.5rem] text-blue-900 group-hover:text-white" />
                <span className="text-white hidden group-hover:block">
                  Portfolio
                </span>
              </Link>
              <Link
                href={"/#service"}
                className="w-[5rem] h-[5rem] rounded-r-xl bg-blue-400 flex justify-center gap-1 items-center group hover:w-[7rem] transition-all duration-500 ease-out"
              >
                <SiMockserviceworker className="text-[1.5rem] text-blue-900 group-hover:text-white" />
                <span className="text-white hidden group-hover:block">
                  Service
                </span>
              </Link>
            </div>
            <div className="flex flex-col w-full max-[880px]:gap-7 pl-36 max-[773px]:pl-10">
              <HiOutlineMenuAlt2
                className="text-[2rem] min-[773px]:hidden block mb-28 mt-4 text-blue-300 cursor-pointer"
                onClick={() => setOpenSidebar(true)}
              />

              <div className="flex w-[200px] h-[200px] justify-center items-center bg-[url('/img/sigit_poto.png')] bg-cover bg-black rounded-full relative shadow-2xl -ml-36 min-[1114px]:hidden max-[1114px]:-ml-0">
                <div className="w-[110%] h-[110%] shadow-lg shadow-blue-900 bg-transparent rounded-full absolute animate-spin_right"></div>
                <div className="w-[108%] h-[108%] shadow-lg shadow-violet-500 bg-transparent rounded-full absolute animate-spin_left"></div>
                <div className="w-[106%] h-[106%] shadow-lg shadow-cyan-500 bg-transparent rounded-full absolute animate-spin_right_fast"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[4rem] font-bold text-white max-[880px]:text-[2rem]">
                  Sigit warsono
                </span>
                <ReactTyped
                  strings={[
                    "I'am Software Engineer",
                    "I'am Frontend Developer",
                    "I'am Designer",
                  ]}
                  typeSpeed={40}
                  className="text-blue-200"
                  loop
                />
              </div>
            </div>
          </div>
          <div className="w-[30%] h-screen flex justify-center items-center max-[1114px]:hidden">
            <div className="flex w-[200px] h-[200px] justify-center items-center bg-[url('/img/sigit_poto.png')] bg-cover bg-black rounded-full relative shadow-2xl -ml-36">
              <div className="w-[110%] h-[110%] shadow-lg shadow-blue-900 bg-transparent rounded-full absolute animate-spin_right"></div>
              <div className="w-[108%] h-[108%] shadow-lg shadow-violet-500 bg-transparent rounded-full absolute animate-spin_left"></div>
              <div className="w-[106%] h-[106%] shadow-lg shadow-cyan-500 bg-transparent rounded-full absolute animate-spin_right_fast"></div>
            </div>
          </div>
        </div>
        <Profile />
        <Portofolio />
        <Service />
        sigit
      </div>
    </>
  );
}

"use client";
import Image from "next/image";
import Sigit from "../../public/img/sigit.svg";
import { ReactTyped } from "react-typed";
import ListCard from "@/components/listCard";
import Portofolio from "@/components/portofolio";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#28436E]">
      <div className="flex bg-[#28436E] max-[1114px]:flex-col-reverse">
        <div className="h-screen w-[75%] max-[1114px]:w-full bg-[url('/img/Vector.svg')] bg-no-repeat bg-cover flex justify-start items-center pl-20">
          <div className="flex flex-col w-full max-[880px]:gap-7">
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
          {/* <Image
            src={Sigit}
            alt=""
            className="w-[15rem] h-[15rem] rounded-full bg-[#061e41] shadow-[0_20px_50px_#061e41] animate-border from-pink-500 via-cyan-500 to-violet-500 -ml-28"
          /> */}
          <div className="flex w-[200px] h-[200px] justify-center items-center bg-[url('/img/sigit_poto.png')] bg-cover bg-black rounded-full relative shadow-2xl -ml-36">
            <div className="w-[110%] h-[110%] shadow-lg shadow-blue-900 bg-transparent rounded-full absolute animate-spin_right"></div>
            <div className="w-[108%] h-[108%] shadow-lg shadow-violet-500 bg-transparent rounded-full absolute animate-spin_left"></div>
            <div className="w-[106%] h-[106%] shadow-lg shadow-cyan-500 bg-transparent rounded-full absolute animate-spin_right_fast"></div>
          </div>
        </div>
      </div>
      <Portofolio />
    </div>
  );
}

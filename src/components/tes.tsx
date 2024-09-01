"use client";
import React from "react";
import Image from "next/image";
import { useCookies } from "next-client-cookies";

const Tes = () => {
  const cookies = useCookies();
  const image = cookies.get("key");
  return (
    <div>
      <Image
        src={`${image}`}
        alt=""
        width={120}
        height={120}
        className="w-[10rem] h-[10rem] rounded-full"
      />
    </div>
  );
};

export default Tes;

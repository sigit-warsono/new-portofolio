import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      image:
        "https://cdn.pixabay.com/photo/2017/09/03/00/44/png-2709031_640.png",
    },
    {
      id: 2,
      name: "Life Booster",
      image:
        "https://cdn.pixabay.com/photo/2017/09/03/00/44/png-2709031_640.png",
    },
    {
      id: 3,
      name: "Life Booster",
      image:
        "https://cdn.pixabay.com/photo/2017/09/03/00/44/png-2709031_640.png",
    },
    {
      id: 4,
      name: "Life Booster",
      image:
        "https://cdn.pixabay.com/photo/2017/09/03/00/44/png-2709031_640.png",
    },
    {
      id: 5,
      name: "Life Booster",
      image:
        "https://cdn.pixabay.com/photo/2017/09/03/00/44/png-2709031_640.png",
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
          <div className="w-full bg-blue-400 h-[30rem] transform transition duration-500 hover:scale-110 hover:bg-green-400">
            {data.id}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCard;

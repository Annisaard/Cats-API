import React from "react";
import cat from "../assets/cat.png";
import cat2 from "../assets/cat2.png";
const Hero = () => {
  return (
    <div className="container md:flex flex-row-reverse justify-between pt-[4rem] md:pt-[7rem] ">
      <div className="flex">
        <img
          src={cat}
          alt="Cat"
          className="h-[12rem]  md:h-[20rem] lg:w-[22rem] relative left-4"
        />
      </div>
      <div className="w-[15rem] md:w-1/2 pt-5  ">
        <h1 className=" text-3xl md:text-4xl lg:text-5xl font-fraun font-bold text-Oren ">
          Find Your Best Friend <br />
          <span className="text-Biru">and Smart Pets to Play With You</span>
        </h1>

        <p className="text-Birumuda text-sm font-normal my-4 ">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
        </p>
        <button className="px-6 py-2 rounded-xl bg-Putih border-2 border-Oren text-Oren mt-5">
          Get more
        </button>
      </div>
    </div>
  );
};

export default Hero;

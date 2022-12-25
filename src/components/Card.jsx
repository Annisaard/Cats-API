import axios from "axios";
import React, { useEffect, useState } from "react";
import { request } from "../utils/request";
import cat2 from "../assets/cat2.png";

const Card = (props) => {
  const [isDetail, setDetail] = useState(true);

  const toggleBtn = () => {
    setDetail((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col w-[15rem] p-2 relative rounded-lg z-10 backdrop-blur-3xl shadow-xl bg-white">
      {/* {data.map((item, key) => ( */}
      <div className="flex justify-center items-center px-2 pt-2 cursor-pointer ">
        <img
          className="h-[170px] object-contain md:h-[12rem] lg:h-[10rem] w-full rounded-lg "
          src={props.img}
          alt="halo"
        />
      </div>
      {/* ))} */}

      <div className=" px-4 mt-3 ">
        {isDetail ? (
          <div>
            <h2 className="mb-1 text-xs md:text-base font-semibold cursor-pointer text-Biru capitalize">
              {props.name}
            </h2>
            <p className="text-xs text-gray-400">{props.temperament}</p>
          </div>
        ) : (
          <div>
            <h2 className="mb-2 text-xs md:text-base font-semibold cursor-pointer text-Biru capitalize">
              {props.name}
            </h2>
            <p className="font-light text-[12px] md:text-xs">{props.desc}</p>
          </div>
        )}
        <div className=" flex justify-start mt-5 items-end">
          <label
            htmlFor="my-modal-3"
            onClick={toggleBtn}
            className="px-3 py-2 bg-Oren text-sm rounded-md text-Putih cursor-pointer "
          >
            Details
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card;

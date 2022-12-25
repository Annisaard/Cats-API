import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
const Input = () => {
  const [text, setText] = useState("");
  const [cat, setCat] = useState("");

  useEffect(() => {
    searchData();
  });
  const searchData = () => {
    axios
      .get(`https://api.thecatapi.com/v1/breeds/search?q=${text}`)
      .then((res) => {
        setCat(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  return (
    <div className=" py-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search Cats"
        className=" rounded-md w-[20rem] px-3 py-[0.6rem] text-black text-sm focus:outline-none focus:border-white bg-gray-200"
      />
      <button
        onClick={() => searchData()}
        className="relative right-10 ml-3 text-gray-400 "
      >
        <FiSearch />
      </button>
    </div>
  );
};

export default Input;

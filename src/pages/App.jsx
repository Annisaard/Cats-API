import Hero from "../components/Hero";
import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import Card from "../components/Card";
import axios from "axios";
import { request } from "../utils/request";
import { FiSearch } from "react-icons/fi";
function App() {
  const [dataCat, setDataCat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [text, setText] = useState("");

  const searchData = () => {
    axios
      .get(`https://api.thecatapi.com/v1/breeds/search?q=${text}`)
      .then((res) => {
        setDataCat(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };
  useEffect(() => {
    searchData();
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`https://api.thecatapi.com/v1/breeds?limit=10&page=${page}`, request)
      .then((res) => {
        // setDataCat((prev) => [...prev, ...res.data]);
        const results = res.data;
        const newPage = page + 1;
        const temp = [...dataCat];
        temp.push(...results);
        setDataCat(temp);
        setPage(newPage);
      })
      .catch((err) => console.log("error during fetching"));
  };

  return (
    <div className="App mb-7 ">
      <Header />
      <Hero />
      <section className="container pt-[7rem]">
        <div className=" md:flex justify-between">
          <div className="w-[15rem]">
            <h1 className="font-fraun font-bold text-2xl text-Oren pb-2 word-break">
              Cutiest Cat
            </h1>
            <p className="text-sm text-Birumuda word-break">
              Lorem Ipsum has been the industry's standard
            </p>
          </div>
          <div className=" py-2">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Search Cats"
              className=" rounded-md w-[15rem] md:w-[20rem] px-3 py-[0.6rem] text-black text-sm focus:outline-none focus:border-white bg-gray-200"
            />
            <button
              onClick={() => searchData()}
              className="relative right-10 ml-3 text-gray-400 "
            >
              <FiSearch />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-7">
          {loading ? (
            <p>loading..</p>
          ) : (
            dataCat &&
            dataCat?.map((item) => (
              <Card
                id_breeds={item.id}
                name={item.name}
                desc={item.description}
                temperament={item.temperament}
                life={item.life_span}
                img={item.image.url}
              />
            ))
          )}
        </div>
      </section>
      <section className="container pt-[3rem] flex justify-center items-center ">
        <button
          onClick={() => fetchData()}
          className="px-5 py-2 bg-Putih border-2 border-Biru rounded-md text-Biru hover:bg-Biru hover:text-Putih"
        >
          Load More
        </button>
      </section>
    </div>
  );
}

export default App;

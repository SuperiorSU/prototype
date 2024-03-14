"use client"

import React, { useState } from "react";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ironman from "@/assets/3-2-iron-man-png.png";
import wan from "@/assets/wandabg.jpg";
import iron from "@/assets/ironmanbg.jpg";
import natasha from "@/assets/natasha.png"
import captain from"@/assets/pngimg.com_captain_america_PNG64.png"
import thor from "@/assets/thorbg.jpg";
import hulk from "@/assets/hulkbg.jpg";
import hulk1 from "@/assets/hulk.png";
import hawk from "@/assets/hawkeyebg.jpg";
import spider from "@/assets/spidermanbg.jpg";
import cap from "@/assets/captainamericabg.jpg";
import vis from "@/assets/visionbg.jpg";
import agent1 from "@/assets/agent1.png"
import black from "@/assets/black.png"
import natashabg from "@/assets/natashag.jpg"
import blackbg from "@/assets/blackbg.jpg"
const page = () => {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    Team_Leader: "",
    Avenger1: "",
    Avenger2: "",
    Avenger3: "",
    Location: "",
    Enemy: "",
    Weather: "",
    Time_of_Day: "",
    Duration: null,
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Console log the collected data
  };

  const leader = [
    {
        id: 1,
        name: "Tony Stark",
        alias: "IRON MAN",
        image: ironman,
      },
      {
        id: 2,
        name: "Thor",
        alias: "God Of Thunder",
        image: thor,
      },
      {
        id: 3,
        name: "Captain America",
        alias: "The First Avenger",
        image: cap,
      },
      {
        id: 1,
        name: "Hulk",
        alias: "Smasher",
        image: hulk,
      },
      {
        id: 4,
        name: "Black Panther",
        alias: "T'Chala",
        image: blackbg,
      },
      {
        id: 5,
        name: "Spider Man",
        alias: "Peter Parker",
        image: spider,
      },
      {
        id: 6,
        name: "Vision",
        alias: "Vision",
        image: vis,
      },
    
  ];

  return (
    <div className="bg-black">
      <div className="w-full h-[60vh] bg-red-500 ">
        {/* Existing JSX content */}
      </div>
      <div>
        <div className="flex gap-3 justify-center items-center">
          <div className="border-l-[.5px] border-white p-5">
            <h2 className="text-[64px] font-extrabold text-white">
              CHOOSE TEAM LEADER
            </h2>
            <div className="h-[.5px] bg-white"></div>
            <br></br>
            <br></br>
            <p className="text-white">
              A good team leader ensures each member performs at their best and
              thus leads the team to victory.
            </p>
          </div>
          <div className="w-[50%] flex justify-center items-center">
            <div className="w-[43%] p-4">
              <div>
                <Slider {...settings}>
                  {leader.map((nam) => {
                    return (
                      <div
                        key={nam.id}
                        className="group hover:border-red-500 border-[1px] p-4 rounded-md"
                      >
                        <div className="w-320px h-[480px]">
                          <Image
                            src={nam.image}
                            className="w-full group-hover:scale-[1.1] transition-all duration-150 h-[330px] border-b-2 border-white"
                          />
                          <p className="text-red-500 text-[24px] text-center p-3 font-bold">
                            {nam.alias} -({nam.name})
                          </p>
                          <div className="text-center">
                            <input
                              type="checkbox"
                              id={`checkbox${nam.id}`}
                              className="peer hidden"
                            />
                            <label
                              htmlFor={`checkbox${nam.id}`}
                              className="text-[20px] peer:bg-red-500 peer-checked:bg-red-500 peer-checked rounded-md text-white p-2 "
                            >
                              Select
                            </label>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-[min-content] text-center">
        <h2 className="text-[64px] font-extrabold text-white">
          CHOOSE YOUR SPECIFICATION
        </h2>
        <div className="flex w-screen justify-center items-center ">
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto flex w-screen justify-between">
            {/* Select fields for avengers */}
            <div className="w-[400px]">
              <label
                htmlFor="avenger1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select your Teammate
              </label>
              <select
                id="avenger1"
                name="Avenger1"
                value={formData.Avenger1}
                onChange={handleSelectChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">SELECT TEAMMATE - 1</option>
                <option>Hulk</option>
                <option>Black Widow</option>
                <option>Spiderman</option>
                
              </select>
            </div>
            {/* Add more select fields for teammates */}
            <div className="w-[400px]">
              <label
                htmlFor="enemy"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select your Enemy
              </label>
              <select
                id="enemy"
                name="Enemy"
                value={formData.Enemy}
                onChange={handleSelectChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">SELECT ENEMY</option>
                <option>AIM</option>
                <option>Hydra</option>
              </select>
            </div>
            {/* Add more select fields for other specifications */}
            <div className="w-full">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;



"use client";

import React, { useState,useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ironman from "@/assets/3-2-iron-man-png.png";
import wan from "@/assets/wandabg.jpg";
import iron from "@/assets/ironmanbg.jpg";
import natasha from "@/assets/natasha.png";
import captain from "@/assets/pngimg.com_captain_america_PNG64.png";
import thor from "@/assets/thorbg.jpg";
import hulk from "@/assets/hulkbg.jpg";
import hulk1 from "@/assets/hulk.png";
import hawk from "@/assets/hawkeyebg.jpg";
import spider from "@/assets/spidermanbg.jpg";
import cap from "@/assets/captainamericabg.jpg";
import vis from "@/assets/visionbg.jpg";
import agent1 from "@/assets/agent1.png";
import black from "@/assets/black.png";
import natashabg from "@/assets/natashag.jpg";
import blackbg from "@/assets/blackbg.jpg";
import Success from "../../components/success";
const page = () => {
    const [user] = useAuthState(auth);
    const [success, setSuccess] = useState('');
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
  
    useEffect(() => {
      console.log(success);
    }, [success]);
  
    const getSuccess = async () => {
      try {
        const result = await axios.post("http://localhost:5002", formData);
        const output = result.data.outcome;
        setSuccess(output);
        console.log(output); // Log the output directly instead of 'success'
      } catch (error) {
        console.error("Error fetching success:", error);
      }
    };
  
    // Define your 'settings' object here
  
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
          <form
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto w-screen justify-between"
          >
            {/* Select fields for avengers */}
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
                required
                value={formData.Enemy}
                onChange={handleSelectChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">SELECT ENEMY</option>
                <option>AIM</option>
                <option>Hydra</option>
                <option>Thanos</option>
                <option>Ultron</option>
                <option>Chitauri</option>
                <option>Abomination</option>
                <option>Erik Killmonger (N'Jadaka)</option>
                <option>Vulture</option>
                <option>The Mandarin</option>
                <option>Red Skull</option>
                <option>Magneto</option>
              </select>
            </div>
            <div className="w-[400px]">
              <label
                htmlFor="avenger1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select your Teammate -1
              </label>
              <select
                id="avenger1"
                name="Avenger1"
                required
                value={formData.Avenger1}
                onChange={handleSelectChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">SELECT TEAMMATE - 1</option>
                <option>Captain America (Steve Rogers)</option>
                <option>Soldier (Bucky Barnes)</option>
                <option>Widow (Natasha Romanoff)</option>
                <option>Black Panther (T'Challa)</option>
                <option>Thor (Thor Odinson)</option>
                <option>Hawkeye (Clint Barton)</option>
                <option>Valkyrie (Brunnhilde)</option>
                <option>Nick Fury (Nick Fury)</option>
                <option>Iron Man (Tony Stark)</option>
                <option>Scarlet Witch (Wanda Maximoff)</option>
              </select>
            </div>
            {/* Add more select fields for teammates */}

            <div className="w-[400px]">
              <label
                htmlFor="avenger2"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select your Teammate 2
              </label>
              <select
                id="avenger2"
                name="Avenger2"
                required
                value={formData.Avenger2}
                onChange={handleSelectChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">SELECT Teammate 2</option>
                <option>Thor (Thor Odinson)</option>
                <option>Hulk (Bruce Banner)</option>
                <option>Black Panther (T'Challa)</option>
                <option>Falcon (Sam Wilson)</option>
                <option>Okoye (Okoye)</option>
                <option>Maria Hill (Maria Hill)</option>
                <option>Doctor Strange (Stephen Strange)</option>
                <option>Ant-Man (Scott Lang)</option>
                <option>Maria Hill (Maria Hill)</option>
                <option>Quicksilver (Pietro Maximoff)</option>
              </select>
            </div>
            <div className="w-[400px]">
              <label
                htmlFor="avenger3"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select your Teammate 3
              </label>
              <select
                id="avenger3"
                name="Avenger3"
                required
                value={formData.Avenger3}
                onChange={handleSelectChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">SELECT Teammate 3</option>
                <option>Hela (Hela)</option>
                <option>Winter Soldier (Bucky Barnes)</option>
                <option>Heimdall (Heimdall)</option>
                <option>Black Panther (T'Challa)</option>
                <option>Vision (Vision)</option>
                <option>Agent Coulson (Phil Coulson)</option>
                <option>Scarlet Witch (Wanda Maximoff)</option>
                <option>Heimdall (Heimdall)</option>
                <option>M'Baku (M'Baku)</option>
                <option>Black Widow (Natasha Romanoff)</option>
              </select>
            </div>
            <div className="w-[400px]">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select your Location
              </label>
              <select
                id="location"
                name="Location"
                required
                value={formData.Location}
                onChange={handleSelectChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">SELECT Location</option>
                <option>New York City</option>
                <option>Washington D.C.</option>
                <option>Wakanda</option>
                <option>Sokovia</option>
                <option>Seoul</option>
                <option>London</option>
                <option>Berlin</option>
                <option>Tokyo</option>
                <option>Asgard</option>
                <option>Siberia</option>
              </select>
            </div>
            <div className="w-[400px]">
              <label
                htmlFor="time_of_Day"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select your Time_of_Day
              </label>
              <select
                id="time_of_Day"
                name="Time_of_Day"
                required
                value={formData.Time_of_Day}
                onChange={handleSelectChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">SELECT Time_of_Day</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Night</option>
              </select>
            </div>
            <div className="w-[400px]">
              <label
                htmlFor="Weather"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select your Weather
              </label>
              <select
                id="weather"
                required
                name="Weather"
                value={formData.Weather}
                onChange={handleSelectChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">SELECT Weather</option>
                <option>Clear</option>
                <option>Overcast</option>
                <option>Sunny</option>
                <option>Stormy</option>
                <option>Foggy</option>
                <option>Rainy</option>
                <option>Snowy</option>
                <option>Cloudy</option>
              </select>
            </div>
            <div className="w-[400px] mt-5">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="number"

                  name="Duration"
                  id="Duration"
                  value={formData.Duration}
                  maxlength="1"
                  onChange={handleSelectChange}
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="Duration"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Duration in Hours
                </label>
              </div>
            </div>
            {/* Add more select fields for other specifications */}
            <div className="w-full mb-2 ">
              <button
                type="submit"
                onClick={getSuccess}
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      {
        (success === '') ? (<div/>):( <Success result={success} />)
      }
    </div>
  );
};

export default page;

"use client"
import React from 'react'
import Image from 'next/image';
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TeamLeader = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    const leader = [
        {
            id:1,
            name: "Tony Stark",
            alias: "IRON MAN",
            image: ironman,
        },
        {
            id:2,
            name: "Thor",
            alias: "God Of Thunder",
            image: thor,
        },
        {
            id:3,
            name: "Captain America",
            alias: "The First Avenger",
            image: cap,
        },
        {
            id:1,
            name: "Hulk",
            alias: "Smasher",
            image: hulk,
        },
        {
            id:4,
            name: "Black Panther",
            alias: "T'Chala",
            image: blackbg,
        },
        {
            id:5,
            name: "Spider Man",
            alias: "Peter Parker",
            image: spider,
        },
        {
            id:6,
            name: "Vision",
            alias: "Vision",
            image: vis,
        },
    ]
  return (
    <div >
        <Slider {...settings} >
            {
                leader.map((nam)=>{
                    return (
                        <div key={nam.id} className='group hover:border-red-500 border-[1px] p-4 rounded-md'>
                            <div className='w-320px h-[480px]'>
                                <Image src={nam.image}  className="w-full group-hover:scale-[1.1] transition-all duration-150 h-[330px] border-b-2 border-white"/>
                                <p className='text-red-500 text-[24px] text-center p-3 font-bold'>{nam.alias} -({nam.name})</p>
                                <div className='text-center'>
                                     <input type='checkbox' id={`checkbox${nam.id}`} className='peer hidden'/><label htmlFor={`checkbox${nam.id}`} className='text-[20px] peer:bg-red-500 peer-checked:bg-red-500 peer-checked rounded-md text-white p-2 '>Select</label>
                                </div>
                               
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}

export default TeamLeader
"use client"
import React from 'react'
import Image from "next/image";
// import Card from "../components/Card"
import Button from "../../components/Button"
import event1 from '../../assets/latesteventsimg1.jpg'
import event2 from '../../assets/latesteventsimg2.jpg'
import event3 from '../../assets/latesteventsimg3.jpg'
import weare from '../../assets/weareavengers.jpg'
import thorncaptain from '../../assets/thorncaptain.png'
import helo from  "../../assets/try.png"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import { useState } from "react";
import headerimg from "../../assets/wholeavengers.png"
import Aos from "aos";
import immm from "@/assets/lol.png"
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Link from "next/link";
const page = () => {
    useEffect(()=>{
        Aos.init()
      }) 
    const [ user] = useAuthState(auth)
  return (
    <div className='bg-black'>
        <div>
        <div className="w-full  flex-row gap-5 bg-red-500 h-[max-content] flex " 
     data-aos="fade-in"
     data-aos-duration="800"
     data-aos-easing="ease-in-out"
     data-aos-mirror="true"

     style={{backgroundImage:`url(${helo.src})` , backgroundRepeat:'no-repeat',backgroundPosition:'center center' , backgroundSize:'cover', width:'full', height:'max-content'}}
    >
      <div className="flex flex-row justify-evenly">
        <div className="w-[1px] bg-white/50 ms-[30px]"
  data-aos="slide-down"
  data-aos-delay="50"
  data-aos-duration="800"
  data-aos-easing="ease-in-out"
  data-aos-mirror="true"
        ></div>
        <div className=" p-4 ps-20 w-[45%]">
          <div className="mt-[30%]">
            <h1 className="text-white text-[32px] text-start font-bold" 
  data-aos="fade-right"
  data-aos-delay="20"
  data-aos-duration="800"
  data-aos-easing="ease-in-out"
  data-aos-mirror="true"
  data-aos-offset="5"
  data-aos-anchor-placement="top-left">THE TEAM BEHIND THE PLATFORM</h1>
              <h2 className="text-black text-[72px] w-[40rem] mt-[-20px] font-bold"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              >TEAM DOT</h2>
                   <div className="h-[.5px] bg-white "
    data-aos="slide-right"
    data-aos-delay="40"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-anchor-placement="top-left"
    data-offset="200"
              
              ></div>
              <div className="mt-5"
    data-aos="zoom-in-right"
    data-aos-delay="40"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-anchor-placement="top-left"
    data-offset="200"
              >
              <button className="text-red hover:before:bg-redborder-red-500 relative h-[60px] w-[180px] overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:shadow-black/50 hover:before:left-0 hover:before:w-full hover:before:skewX(35)"><span className="relative z-10">Explore More</span></button>
              </div>
             
              
            </div>
            
          </div>
          <div> <Image src={headerimg} className="object-center drop-shadow-md hover:drop-shadow-xl 	" alt="" loading="lazy"/></div>
          {/* <VideoBackground /> */}
        </div>
        
      </div>
        </div>
        <div className='bg-white p-10'>
            <div className='text-black flex flex-wrap'>
                <div className='border-l-[.5px] border-black'>
                    <h2 className='text-[72px] font-bold'>MEET THE TEAM</h2>
                    <p className='border-b-[1px] border-black'>THE FUTURE AVENGERS(DEVELOPERS)</p>
                </div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default page
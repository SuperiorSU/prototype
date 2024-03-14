"use client"
import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import { useState } from "react";
import TeamLeader from "@/components/TeamLeader"
const page = () => {
    const [ user] = useAuthState(auth)
  return (
    <div className='bg-black'>
        <div className="w-full h-[60vh] bg-red-500 ">
        <div className="flex flex-row flex-wrap gap-3">
          <div className="w-[1px] bg-white/50 ms-[30px]"></div>
          <div className=" p-4 ps-20 w-[45%]">
            <div className="mt-[30%]">
              <h1 className="text-white text-[32px] text-start font-bold">CREATE YOUR TEAM</h1>
              <h2 className="text-black text-[72px] mt-[-20px] font-bold">{user == null ? 'User' : user?.displayName}</h2>
              <div className="h-[.5px] bg-white "></div>
              <div className="mt-5">
              <button className="text-red hover:before:bg-redborder-red-500 relative h-[60px] w-[180px] overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:shadow-black/50 hover:before:left-0 hover:before:w-full"><span className="relative z-10">Explore More</span></button>
              </div>
              
            </div>
            
          </div>
          <div>
          
          </div>
        </div>
      </div>
      <div>
        <div className='flex gap-3'>
            <div className='border-l-[.5px] border-white p-5'>
                <h2 className='text-[64px] font-extrabold text-white'>CHOOSE TEAM LEADER</h2>
                <div className='h-[.5px] bg-white'></div>
                <br></br>
                <br></br>
                <p className='text-white'>A good team leader ensures each member performs at their best and thus leads the team to victory.</p>
            </div>
            <div>
                <TeamLeader/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
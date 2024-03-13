import React from 'react'
import test from "../assets/testimg.webp"
import Image from 'next/image'
const Card = () => {
  return (
    <div>
        <div  className="md:ms-[50px]  h-[320px]">
            <div className="w-[280px] slid relative h-[320px] mx-auto flex justify-center items-center border overflow-hidden border-[#32184b]">
              <div className="w-[280px] slide absolute h-[320px] translate-x-[-270px] hover:translate-x-[-10px] transition-all ease-in flex justify-center items-center bg-[#cb23525c]">
                  <div className="flex flex-col flex-wrap ">
                        <p className="text-white ms-5 text-[20px] font-bold mt-2 ">Event 1</p>
                  </div>
              </div>  
              <div className="text-center">
              <div className="mx-auto"><Image src={test} alt=""/></div>
              <h2 className="text-xl font-semibold text-white mt-2">
                EVENT HEADING HERE
              </h2>
              <br></br>
              <p className='text-white/65 text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, tempore.</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Card
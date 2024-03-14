import React from 'react'
import test from "../assets/testimg.webp"
import Image from 'next/image'
const Card = ({img,EventHeading,desc}) => {
  return (
    <div 
    data-aos="fade-up"
    data-aos-delay="100"
    data-aos-duration="800"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"  
    
    >
        <div  className="md:ms-[50px] group h-[320px]">
            <div className="w-[280px] slide relative h-[320px] mx-auto flex justify-center items-center border overflow-hidden border-[#32184b]">
              <div className="w-[280px] slide absolute h-[100px] translate-x-[-270px] group-hover:translate-x-[-10px] transition-all ease-in-out duration-[0.8s]  flex justify-center items-center bg-[#cb23525c]">
                  <div className="flex flex-col flex-wrap ">
                        {/* <p className="text-white ms-5 text-[20px] font-bold mt-2 ">Event 1</p>
                        <p className='text-end text-white'>Read More<span></span></p> */}
                  </div>
              </div>  
              <div className="text-center">
              <div className="mx-auto"><Image src={img} alt=""/></div>
              <h2 className="text-xl font-semibold text-white mt-2">
               {EventHeading}
              </h2>
              <br></br>
              <p className='text-white/65 text-[12px]'>{desc}</p>
              
              </div>
            </div>
          </div>
    </div>
  )
}

export default Card
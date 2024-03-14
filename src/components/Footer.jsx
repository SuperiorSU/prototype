import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from 'next/image';
import logo from "@/assets/ALogo.png"
const Footer = () => {
  return (
    <div>
        <div className='bg-black/35'>
            <p className='text-center p-4 text-[22px]'>JOIN US TO AVENGE WITH THE AVENGERS</p>
            <div className='bg-black text-center flex justify-center gap-5 p-4'>
                <div className='p-5 flex gap-5'>
                    
                    <FaDiscord className='text-white text-[32px]'/>
                    <FaFacebook className='text-white text-[32px]' />
                    <FaInstagramSquare className='text-white text-[32px]'/>
                    <FaYoutube className='text-white text-[32px]'/>
                </div>
            
            </div>
            <div className='bg-black text-center flex justify-center gap-3 items-center'>
                <div className='h-[.5px] w-full bg-white/65'></div>
                <Image src={logo} className='w-[64px] h-[64px] object-center my-auto' alt=""/>
                <div className='h-[.5px] w-full bg-white/65'></div>
            </div>
            <div className='bg-black text-white flex flex-wrap gap-2 justify-evenly pb-5'>
                
                <p className='text-white/45 p-4 border-b-[.5px] border-white/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita nisi inventore ullam explicabo iure, voluptas minus iste beatae doloribus facilis voluptates hic illum fuga, reprehenderit alias dolore impedit minima.</p>
                </div>
        </div>
    </div>
  )
}

export default Footer
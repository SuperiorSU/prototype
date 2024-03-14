"use client"
import Image from "next/image";
import Card from "../components/Card"
import Button from "../components/Button"
<<<<<<< HEAD
import event1 from '../assets/latesteventsimg1.jpg'
import event2 from '../assets/latesteventsimg2.jpg'
import event3 from '../assets/latesteventsimg3.jpg'
import weare from '../assets/weareavengers.jpg'
import thorncaptain from '../assets/thorncaptain.png'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Home() {
  useEffect(()=>{
    Aos.init()
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between border- bg-black">
      {/* header */}
      <div className="w-full h-[60vh] flex bg-red-500">
=======
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import { useState } from "react";


// const raleway = Raleway({
//   subsets:['latin'],
//   weight:['900'],
// })
export default function Home() {
  const [ user] = useAuthState(auth)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between border- bg-black">
      {/* header */}
      <div className="w-full h-[60vh] bg-red-500 ">
>>>>>>> 97399d6966a2f22ac1a8904a6a9fa9b8b967074e
        <div className="flex flex-row flex-wrap gap-3">
          <div className="w-[1px] bg-white/50 ms-[30px]"></div>
          <div className=" p-4 ps-20 w-[45%]">
            <div className="mt-[30%]">
<<<<<<< HEAD
              <h1 className="text-white text-[32px] text-start font-bold" >Welcome</h1>
              <h2 className="text-black text-[72px] mt-[-20px] font-bold">SUJAL</h2>
=======
              <h1 className="text-white text-[32px] text-start font-bold">Welcome</h1>
              <h2 className="text-black text-[72px] mt-[-20px] font-bold">{user == null ? 'User' : user?.displayName}</h2>
>>>>>>> 97399d6966a2f22ac1a8904a6a9fa9b8b967074e
              <div className="h-[.5px] bg-white "></div>
              <div className="mt-5">
              <button className="text-red hover:before:bg-redborder-red-500 relative h-[60px] w-[180px] overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:shadow-black/50 hover:before:left-0 hover:before:w-full hover:before:skewX(35)"><span className="relative z-10">Explore More</span></button>
              </div>
             
              
            </div>
            
          </div>
          <div>
          
          </div>
        </div>
      </div>
      {/* latest events vala div */}
      <div className="p-5 mt-5">
        <div className="h-[1px] w-[90%] bg-white/50"></div>
        <h2 className="font-bold text-white text-[72px]">LATEST EVENTS</h2>
        <div className="flex gap-10 justify-evenly">
        <div className="w-[1px] bg-white/50"></div>
        <Card img={event1} EventHeading="The Final Showdown: Thanos Returns" desc="In the Avengers' last stand, Thanos returns with the Infinity Gauntlet, prompting a perilous mission to reverse the Snap's devastation and save the universe."/>
        <Card img={event2} EventHeading="Ultron Unleashed: The AI Apocalypse" desc= "The Avengers face their greatest threat as Ultron, an AI gone rogue, launches a relentless assault to annihilate humanity."/>
        <Card img={event3} EventHeading="Rise of Doc Ock: The Octopus Strikes" desc="Doctor Octavius unleashes chaos with his mechanical tentacles, and the Avengers race to stop his sinister plans."/>
      </div>

      </div>
      {/*ye vo We are avengers vala div  */}
      <div className="p-5 mt-5 text-white">
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-2 border-[.5px] border-white/50 p-5 ">
            <h3 className="font-bold text-white text-[64px] border-t-[.4px] border-white/65">We're <span className="text-red-500 [text-shadow:_0_6px_0_rgb(255_255_255_/_40%)]">AVENGERS</span> </h3>
            <br/>
            <div className="my-auto">
              <h5>If we can't protect the earth</h5>
              <p className="text-justify pe-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem similique ea veritatis animi temporibus nostrum nam, sunt illum consequatur, quae ut, qui sequi? Architecto ut sapiente praesentium dolorem aspernatur consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga optio animi eligendi ducimus eius, ab delectus velit et voluptas officiis?</p>
              <div className="mt-5 pb-4 border-b-[.5px] border-white/65 max-w-[max-content]">
                <Button text="Know More"/>
              </div>
              
            </div>
          </div>
          <div className="col-span-3 border-[.5px] border-white">
            <Image src={weare} alt="" className=""/>
          </div>
        </div>
      </div>
      
      {/* choose your agent or hero */}
      <div className="p-5 mt-5 bg-red-500 w-full">
        {/* div for image */}
        <div className="grid grid-cols-5">
          <div className="col-span-3">
            <Image src={thorncaptain} alt="hello hello "></Image>
          </div>
          <div className="col-span-2 p-5 border-l-[.5px] border-white/65">
            <h2 className="text-[86px] text-white leading-[92px] font-extrabold border-b-[.5px] border-white/65">YOUR <br />AGENTS</h2>
            <p className="text-white font-medium uppercase mt-8 text-[24px]">Create your own team and test your skills</p>
            <br/>
            <p className="text-white text-justify pe-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi rem ipsa cupiditate earum magnam fuga soluta similique debitis. Excepturi praesentium assumenda quo repellendus doloremque repellat odit culpa quos autem itaque pariatur iusto deleniti, placeat incidunt mollitia? Excepturi nulla maiores reprehenderit exercitationem aperiam repellendus quas, modi reiciendis cupiditate. Esse, quia vitae.</p>
            <br/>
            <button className="text-red hover:before:bg-redborder-red-500 relative h-[60px] w-[180px] overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:shadow-black/50 hover:before:left-0 hover:before:w-full"><span className="relative z-10">Explore More</span></button>
          </div>
        </div>

      
        
      
      </div>
      <div className="bg-white p-5 w-full">
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-2 p-4"></div>
          <div className="col-span-3"></div>
        </div>
      </div>
      
    </main>
  );
}

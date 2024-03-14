"use client"
import Image from "next/image";
import Card from "../components/Card"
import Button from "../components/Button"
import event1 from '../assets/latesteventsimg1.jpg'
import event2 from '../assets/latesteventsimg2.jpg'
import event3 from '../assets/latesteventsimg3.jpg'
import weare from '../assets/weareavengers.jpg'
import thorncaptain from '../assets/thorncaptain.png'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import { useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Home() {
  useEffect(()=>{
    Aos.init()
  })

  const [ user] = useAuthState(auth)



  // style={{backgroundImage:`url(${headerbg.src})` , backgroundRepeat:'no-repeat',backgroundPosition:'center center' , backgroundSize:'contain'}}
  return (
    <main className="flex min-h-screen flex-col items-center justify-between border- bg-black overflow-hidden border-box">
    {/* header */}
    <div className="w-full h-[60vh] flex bg-red-500 " 
     data-aos="fade-in"
     data-aos-duration="800"
     data-aos-easing="ease-in-out"
     data-aos-mirror="true"
    >
      <div className="flex flex-row flex-wrap gap-3">
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
  data-aos-anchor-placement="top-left">Welcome</h1>
              <h2 className="text-black text-[72px] w-[40rem] mt-[-20px] font-bold"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              >{user == null ? 'User' : user?.displayName}</h2>
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
          <div></div>
          {/* <VideoBackground /> */}
        </div>
        
      </div>
    
      {/* latest events vala div */}
      <div className="p-5 mt-5">
        <div className="h-[1px] w-[90%] bg-white/50" 
       data-aos="slide-left"
       data-aos-delay="100"
       data-aos-duration="800"
       data-aos-easing="ease-in-out"
       data-aos-mirror="true" 
        ></div>
        <h2 className="font-bold text-white text-[72px]"
     data-aos="fade-up"
     data-aos-delay="100"
     data-aos-duration="800"
     data-aos-easing="ease-in-out"
     data-aos-mirror="true"    
      data-aos-offset="5"  
        
        >LATEST EVENTS</h2>
        <div className="flex gap-10 justify-evenly">
        <div className="w-[1px] bg-white/50"
         data-aos="slide-up"
         data-aos-delay="140"
         data-aos-duration="1700"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"        
        
         
        
        ></div>
        <Card img={event1} EventHeading="The Final Showdown: Thanos Returns" desc="In the Avengers' last stand, Thanos returns with the Infinity Gauntlet, prompting a perilous mission to reverse the Snap's devastation and save the universe."
        />
        <Card img={event2} EventHeading="Ultron Unleashed: The AI Apocalypse" desc= "The Avengers face their greatest threat as Ultron, an AI gone rogue, launches a relentless assault to annihilate humanity."/>

        <Card img={event3} EventHeading="Rise of Doc Ock: The Octopus Strikes" desc="Doctor Octavius unleashes chaos with his mechanical tentacles, and the Avengers race to stop his sinister plans." />
      </div>

      </div>
      {/*ye vo We are avengers vala div  */}
      <div className="p-5 mt-5 text-white">
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-2 border-[.5px] border-white/50 p-5 "
          >
            <h3 className="font-bold text-white text-[64px] border-t-[.4px] border-white/65"
       data-aos="fade-right"
       data-aos-delay="80"
       data-aos-duration="800"
       data-aos-easing="ease-in-out"
       data-aos-mirror="true"
       data-aos-anchor-placement="top-left"      
            
            >We're <span className="text-red-500 [text-shadow:_0_6px_0_rgb(255_255_255_/_40%)]"     
            >AVENGERS</span> </h3>
            <br/>
            <div className="my-auto"
        
            
            >
              <div 
              data-aos="zoom-out-up"
              data-aos-delay="80"     
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              >

              <h5>If we can't protect the earth</h5>
              <p className="text-justify pe-5"
                
                >Thanos will surely prevail, with his relentless quest to gather the Infinity Stones. Each Avenger, from Iron Man to Captain America, must rise to the challenge, rallying their strength and resolve to thwart his destructive ambitions. Together, they face perilous battles and personal sacrifices, driven by a shared mission to safeguard the very essence of humanity."</p>
                </div>
              <div className="mt-5 pb-4 border-b-[.5px] border-white/65 max-w-[max-content]">
              <button className="text-red hover:before:bg-redborder-red-500 relative h-[60px] w-[180px] overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full "
               data-aos="zoom-in-right"
               data-aos-delay="80"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-anchor-placement="top-left"
               data-offset="200"
              ><span className="relative z-10">Know More</span></button>
              </div>
              
            </div>
          </div>
          <div className="col-span-3 border-[.5px] border-white"
           data-aos="slide-right"
           data-aos-delay="40"
           data-aos-duration="1200"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-anchor-placement="top-left"
          >
            <Image src={weare} alt="" className=""/>
          </div>
        </div>
      </div>
      
      {/* choose your agent or hero */}
      <div className="p-5 mt-5 bg-red-500 w-full">
        {/* div for image */}
        <div className="grid grid-cols-5">
          <div className="col-span-3">
            <Image src={thorncaptain} alt="hello hello "
             data-aos="fade-up"
             data-aos-delay="40"
             data-aos-duration="800"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-anchor-placement="bottom"
             data-aos-offset="40"
            ></Image>
          </div>
          <div className="col-span-2 p-5 border-l-[.5px] border-white/65">
            <h2 className="text-[86px] text-white leading-[92px] font-extrabold border-b-[.5px] border-white/65"
         data-aos="slide-left"
         data-aos-delay="40"
         data-aos-duration="1200"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-anchor-placement="bottom"
         data-aos-offset="40"    
            
            
            >YOUR <br />AGENTS</h2>

          <div 
           data-aos="fade-up"
           data-aos-delay="40"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-anchor-placement="bottom"
           data-aos-offset="40"
          >
            <p className="text-white font-medium uppercase mt-8 text-[24px]">Choose your own character and test your skills</p>
            <br/>
            <p className="text-white text-justify pe-4">The Avengers, Earth's mightiest heroes, assemble to protect the planet from threats too great for any one individual to handle. This diverse team includes iconic figures such as Iron Man, Captain America, Thor, Black Widow, Hulk, and others, each bringing their unique abilities and strengths to the table. Together, they face off against formidable foes ranging from intergalactic conquerors to rogue artificial intelligences, demonstrating the power of teamwork and sacrifice in the face of overwhelming odds. With their unwavering commitment to justice and the greater good, the Avengers stand as a beacon of hope for humanity in a world constantly under threat.</p>
          </div>  
            <br/>
            <button className="text-red hover:before:bg-redborder-red-500 relative h-[60px] w-[180px] overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:shadow-black/50 hover:before:left-0 hover:before:w-full"

data-aos="fade-up"
data-aos-easing="linear"
data-aos-duration="1500" 

            ><span className="relative z-10"
          
            
            >VIEW ALL AGENTS</span></button>
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

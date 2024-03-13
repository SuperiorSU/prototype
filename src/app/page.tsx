"use client"
import Image from "next/image";
import Card from "../components/Card"
import VideoBackground from "../components/VideoBackground"
import hulk from "../assets/hulkbg.jpg"
import iron from "../assets/ironmanbg.jpg"
import spider from "../assets/spidermanbg.jpg"
// const raleway = Raleway({
//   subsets:['latin'],
//   weight:['900'],
// })
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between border- bg-black">
      <div className="w-full h-[60vh] bg-red-500">
        <div className="flex flex-row flex-wrap gap-3">
          <div className="h-[100%] w-[1px] bg-white"></div>
          <div className=" p-4 ps-20 w-[45%]">
            <div className="mt-[30%]">
              <h1 className="text-white text-[32px] text-start font-bold">Welcome</h1>
              <h2 className="text-black text-[72px] mt-[-20px] font-bold">SUJAL</h2>
              <div className="h-[.5px] bg-white "></div>
            </div>
            
          </div>
          <div></div>
        </div>
      </div>
      <div className="p-5 mt-5">
        <div className="h-[1px] w-[90%] bg-white/50"></div>
        <h2 className="font-bold text-white text-[72px]">LATEST EVENTS</h2>
        <div className="flex gap-10 justify-evenly">
        <div className="w-[1px] bg-white/50"></div>
        <Card img={iron}/>
        <Card img={hulk}/>
        <Card img={spider}/>
      </div>

      </div>
      
      
    </main>
  );
}

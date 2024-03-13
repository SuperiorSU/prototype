"use client"
import Image from "next/image";
import Card from "../components/Card"
import VideoBackground from "../components/VideoBackground"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between border- bg-black">
      <div className="w-full h-[50vh] bg-white/50">
        <VideoBackground/>
      </div>
      <div className="">
        <Card/>
      </div>
      
    </main>
  );
}

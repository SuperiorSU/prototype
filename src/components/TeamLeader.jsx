import React from 'react'
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
const TeamLeader = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
            name: "Tony Stark",
            alias: "IRON MAN",
            image: ironman,
        },
    ]
  return (
    <div>

    </div>
  )
}

export default TeamLeader
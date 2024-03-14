"use client"
import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
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

// for aos
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const page = () => {
  useEffect(()=>{
    Aos.init()
  })

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const settings = {
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    className: "center",
    dots: true,
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    swipeToSlide: true,
    autoplay: true,
    slidesToScroll: 1,
  };

  const data = [
    {
      id: 1,
      name: "Wanda Maximoff",
      desc: "lorem ipsum doler ememt.",
      descHead: "Wanda Maximoff, also known as Scarlet Witch, is a powerful mutant with the ability to manipulate reality and chaos magic. Alongside her brother Pietro (Quicksilver), she initially joined the villainous Brotherhood of Mutants before later becoming a member of the Avengers. Scarlet Witch possesses formidable powers that can alter the fabric of reality, creating energy blasts, force fields, and manipulating probability. She struggles with controlling her abilities and has faced numerous personal challenges, including loss and grief",
      image: wan,
      image2: wan,
    },
    { id: 2, name: "Hulk", desc: "lorem ipsum doler ememt.", image: hulk, image2: hulk1, descHead:"Hulk, also known as Bruce Banner, is a brilliant scientist who transforms into a raging green behemoth whenever he experiences intense emotions, particularly anger. As the Hulk, Banner possesses immense superhuman strength and durability, making him one of the most powerful beings in the Marvel Universe. Despite his incredible power, Hulk struggles with controlling his temper and often finds himself torn between his desire for peace and the destructive force within him." },
    {
      id: 3,
      name: "Iron Man",
      desc: "lorem ipsum doler ememt.",
      image: iron,
      image2: ironman,
      descHead:
        "Iron Man has been a founding member of the Avengers and has played a significant role in numerous major story arcs within the Marvel Universe. He is known for his charismatic personality, flawed humanity, and ongoing struggles with personal demons and moral dilemmas.",
    },
    {
      id: 4,
      name: "Captain America",
      desc: "lorem ipsum doler ememt.",
      image: cap,
      image2: captain,
      descHead:"Captain America, also known as Steve Rogers, is a symbol of heroism and patriotism. Enhanced to the peak of human perfection by the Super-Soldier Serum during World War II, Captain America fights for justice and freedom as the leader of the Avengers. He wields a vibranium shield, which he uses for both offense and defense, and is highly skilled in hand-to-hand combat and tactical warfare. Captain America embodies the values of courage, honor, and selflessness, serving as a beacon of hope for humanity."
    },
    { id: 5, name: "Vision", desc: "lorem ipsum doler ememt.", image: vis, image2:vis,descHead:"Vision is an android created by the villain Ultron, using the brain patterns of Tony Stark (Iron Man) and the artificial intelligence J.A.R.V.I.S. He possesses superhuman strength, durability, and the ability to alter his density, allowing him to phase through objects. Vision is equipped with a synthetic vibranium body and possesses a Mind Stone embedded in his forehead, granting him energy projection and enhanced mental abilities. He is known for his stoic demeanor and noble ideals, serving as a key member of the Avengers." },
    { id: 6, name: "Thor", desc: "lorem ipsum doler ememt.", image: thor, image2: agent1, descHead:"Thor is the Norse god of thunder and a founding member of the Avengers. Possessing superhuman strength, durability, and the ability to control lightning, Thor wields the enchanted hammer Mjolnir, which grants him the power of flight and the ability to summon storms. As the crown prince of Asgard, Thor is a noble warrior who values honor and duty. Throughout his adventures with the Avengers, Thor has faced formidable foes and embarked on epic quests to protect both Earth and the Nine Realms." },
    {
      id: 7,
      name: "Spider Man",
      desc: "lorem ipsum doler ememt.",
      image: spider,
      image2: spider,
      descHead:"Spider-Man, also known as Peter Parker, is a teenage superhero with extraordinary powers gained from a radioactive spider bite. Possessing superhuman strength, agility, and the ability to cling to walls, Spider-Man uses his newfound abilities to protect New York City from crime and supervillains. He is known for his quick wit, acrobatic fighting style, and iconic web-slinging abilities. Despite facing personal challenges and balancing his responsibilities as both a superhero and a student, Spider-Man remains committed to using his powers for good and upholding the motto, -With great power comes great responsibility."
    },
    { id: 8, name: "Hawk Eye", desc: "lorem ipsum doler ememt.", image: hawk, image2:hawk, descHead:"Hawkeye, also known as Clint Barton, is a skilled marksman and master archer who fights alongside the Avengers using his exceptional accuracy and proficiency with a bow and arrow. Despite lacking superhuman abilities, Hawkeye is a formidable combatant and tactician, often serving as the team's sharpshooter and strategist. He is known for his wit, resourcefulness, and loyalty to his fellow Avengers." },
    {
        id: 8,
        name: "Black Panther",
        desc: "T'Challa, aka Black Panther, is the king and protector of Wakanda.",
        image: blackbg, // Image of Black Panther
        image2: black, // Another image of Black Panther
        descHead: "T'Challa, also known as Black Panther, is the king and protector of the fictional African nation of Wakanda. As the Black Panther, he possesses enhanced strength, agility, and senses, augmented by the mystical properties of the heart-shaped herb. Clad in the Vibranium suit, Black Panther is virtually indestructible and wields advanced Wakandan technology. He is a skilled warrior and strategist, dedicated to defending Wakanda and upholding its traditions."
      },
      {
        id: 9,
        name: "Black Widow",
        desc: "Natasha Romanoff, aka Black Widow, is a highly skilled spy.",
        image: natashabg, // Image of Black Widow
        image2: natasha, // Another image of Black Widow
        descHead: "Natasha Romanoff, also known as Black Widow, is a highly skilled spy, martial artist, and former assassin. Trained from a young age in the Red Room, she possesses exceptional combat abilities, agility, and proficiency in espionage tactics. As a founding member of the Avengers, Black Widow brings strategic expertise and resourcefulness to the team. She is known for her cunning, versatility, and unwavering dedication to protecting the innocent."
      }
  ];

  return (
    <div className="bg-[#000000]">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-3">
          <Slider {...settings} className="h-full overflow-hidden ">
            {data.map((dat,key) => (
                <Link href="#" onClick={() => handleCharacterClick(dat)} className="my-[5px]">
              <div
                key={key}
                className="w-full p-4 h-[210px] border-2 border-red-500"
                style={{
                  backgroundImage: `url(${dat.image.src})`,
                  backgroundSize: "contain",
                  
                }}
              >
                  <div>
                    <div className="pt-[120px]">
                      <p className="text-white font-bold text-[24px]">
                        {dat.name}
                      </p>
                      <p className="text-white text-[14px]">{dat.desc}</p>
                      <div className="h-[10px] w-full bg-black opacity-20 blur-2xl "></div>
                    </div>
                  </div>
              </div>
                </Link>
            ))}
          </Slider>
        </div>
        <div
          className="col-span-8 bg-[#1c0b29] ps-20 pt-56 "
          style={{
            backgroundImage: `url(${selectedCharacter ? selectedCharacter.image2.src : ""})`,
            backgroundSize: "contain",
            backgroundRepeat:"no-repeat"
          }}

         
        >
          <h2 className="text-white font-bold text-[64px] border-b-[.5px] border-white"
           data-aos="slide-left"
           data-aos-delay="40"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-anchor-placement="bottom"
           data-aos-offset="40"
          >
            {selectedCharacter ? selectedCharacter.name : "WELCOME TO THE GALLERY"}
          </h2>
          <p className="text-white uppercase pe-40" 
           data-aos="slide-left"
           data-aos-delay="40"
           data-aos-duration="1400"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-anchor-placement="bottom"
           data-aos-offset="40"
          >{selectedCharacter ? selectedCharacter.descHead : "KNOW MORE ABOUT THE AVENGERS AND CHANGE THE GAME"}</p>
        </div>
        <div className="col-span-1 bg-black">
          <div className="flex flex-col">
            <div className="bg-yellow-400 w-full "></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

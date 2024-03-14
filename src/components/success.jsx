import React from "react";

const success = ({result}) => {
  return (
    <div className="p-5 mt-5 bg-red-500 w-full">
      {/* div for image */}
      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <Image
            src={thorncaptain}
            alt="hello hello "
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
          <h2
            className="text-[86px] text-white leading-[92px] font-extrabold border-b-[.5px] border-white/65"
            data-aos="slide-left"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-anchor-placement="bottom"
            data-aos-offset="40"
          >
            {result}
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-anchor-placement="bottom"
            data-aos-offset="40"
          >
            <p className="text-white font-medium uppercase mt-8 text-[24px]">
              Choose your own character and test your skills
            </p>
            <br />
            <p className="text-white text-justify pe-4">
              The Avengers, Earth's mightiest heroes, assemble to protect the
              planet from threats too great for any one individual to handle.
              This diverse team includes iconic figures such as Iron Man,
              Captain America, Thor, Black Widow, Hulk, and others, each
              bringing their unique abilities and strengths to the table.
              Together, they face off against formidable foes ranging from
              intergalactic conquerors to rogue artificial intelligences,
              demonstrating the power of teamwork and sacrifice in the face of
              overwhelming odds. With their unwavering commitment to justice and
              the greater good, the Avengers stand as a beacon of hope for
              humanity in a world constantly under threat.
            </p>
          </div>
          <br />
          <button
            className="text-red hover:before:bg-redborder-red-500 relative h-[60px] w-[180px] overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:shadow-black/50 hover:before:left-0 hover:before:w-full"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <span className="relative z-10">VIEW ALL AGENTS</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default success;

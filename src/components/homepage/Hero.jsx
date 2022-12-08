import React from "react";
import Demo from "../Common/Demo";

const Hero = ({data}) => {
  return (
    <div className=" h-auto hero-bg  pt-28 text-white">
      <div className="container">
        <div className="flex h-[100%] md:h-auto items-center gap-3 lg:flex-row flex-col justify-between mt-10">
          <div className="z-20">
            <h3 className=" text-[18px] md:text-[30px] font-poppins font-semibold">
              Welcome To <span className="text-brand">Cyborg</span>
            </h3>
            <h2 className="text-[30px] md:text-[50px] font-poppins font-semibold">
              BROWSE OUR <br />
              POPULAR <span className=" text-brand">GAMES</span> HERE
            </h2>
            <div className="mt-20">
            <button className=" bg-brand py-3 px-10 text-[20px] font-poppins font-semibold text-white rounded-md hover:bg-green-700 duration-300 transition-all">
              Browse Now
            </button>
            </div>
          </div>
          <div className="h-[350px] md:h-[480px] mb-10">
              <Demo data={data}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Badge from "./Badge";
import Button from "./Button";
import Stats from "./Stats";
import Character from "./Character";
import buddy2 from "../assets/buddy2.png"


export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row poppins items-center justify-around px-20 py-5 bg-white">
      <div className="relative flex flex-col md:flex-row items-center justify-around w-full">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${buddy2})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: 0.04,
          }}
        />
        
        <div className="relative z-10 max-w-xl space-y-5">
          <Badge text="LAUNCHING SOON IN YOUR CITY" />
          <img src={buddy2} alt="" width={180} />
          <h1 className="text-5xl md:text-5xl font-black text-[#6A2AFF] poppins italic leading-tight">
            Your Friend <br /> in Every City
          </h1>
          <p className="text-black-700 text-[24px] leading-7 font-medium poppins">
            Ever ready to help you with your task. From <br /> delivering goods, 
            to standing in queue,  <br />buddies do it all.
          </p>
          <div className="flex items-center gap-10">
            <div>
            <Button text="JOIN THE PROJECT"/>
          <p className="text-sm mt-2.5 poppins font-semibold text-[#6A2AFF]">
            Want to help improve Buddy? Click  <br /> above and contribute.✨
          </p>
            </div>
            <Stats number="3+" label="PEOPLE ALREADY DID" />
          </div>
        </div>
        
        <div className="relative z-10">
          <Character />
        </div>
      </div>
    </section>
  );
}
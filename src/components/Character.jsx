import React from "react";
import buddy from "../assets/buddy.png"

export default function Character() {
  return (
    <div className="relative">
      <img src={buddy} alt="Buddy Character" className=" md:w-[550px]" />
    </div>
  );
}

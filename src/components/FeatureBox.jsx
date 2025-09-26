import React from 'react'
import { MdAccessTimeFilled } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaIndianRupeeSign } from "react-icons/fa6";

function FeatureBox() {
     const features = [
    {
      icon: <VscWorkspaceTrusted/>,
      title: "Trusted Buddies",
      description: "All buddies are verified and background checked"
    },
    {
      icon: <MdAccessTimeFilled/>,
      title: "On Demand",
      description: "Buddies available on demand"
    },
    {
      icon: <FaIndianRupeeSign/>,
      title: "Earn Money",
      description: "Earning opportunities for locals and students"
    }
  ];
  return (
        <div className="flex flex-col md:flex-row gap-25 p-6 max-w-265 mx-auto">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col w-full items-center bg-white border-2 border-[#6A2AFF] rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div className="text-6xl mb-4 text-[#6A2AFF]">
            {feature.icon}
          </div>
          <h3 className="text-[26px] font-semibold poppins text-[#6A2AFF] mb-3">
            {feature.title}
          </h3>
          <p className="text-black-700 text-[17px] poppins font-medium leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>

  )
}

export default FeatureBox
import React, { useEffect, useRef, useState } from 'react';
import { IoShieldHalfSharp } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { FaTruck, FaAmbulance, FaHandsHelping  } from "react-icons/fa";
import { GiByzantinTemple } from "react-icons/gi";
import { TbProgressAlert } from "react-icons/tb";
import { Stethoscope, Church, AlertCircle, FileText, DollarSign } from "lucide-react";


const InfiniteMovingCards = ({ items, direction = "left", speed = "slow", pauseOnHover = true }) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration = speed === "fast" ? "30s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative z-20 max-w-7xl overflow-hidden"
      style={{
        maskImage: "linear-gradient(to left, transparent, white 10%, white 75%, transparent)"
      }}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap ${
          start ? "animate-scroll" : ""
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[320px] flex-shrink-0 bg-white border-2 border-[#7C3AED] rounded-2xl p-8 flex flex-col items-center text-center"
          >
            <div className="text-[#7C3AED] mb-4">
              {item.icon}
            </div>
            <h3 className="text-[22px] font-semibold text-[#7C3AED] mb-3 poppins">
              {item.title}
            </h3>
            <p className="text-black leading-relaxed poppins">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

function FeatureBox() {
  const features = [
    {
      icon: <IoShieldHalfSharp size={70} strokeWidth={2} />,
      title: "Trusted Buddies",
      description: "All buddies are verified and background checked and trained"
    },
    {
      icon: <IoTime  size={70} strokeWidth={2} />,
      title: "On Demand",
      description: "Buddies are available on demand to help your parents at the time of need"
    },
    {
      icon: <FaTruck  size={70} strokeWidth={2} />,
      title: "Delivery",
      description: "Buddies do home delivery of grocery, medicine or any other thing your parents want"
    },
    {
      icon: <Stethoscope size={70} strokeWidth={2} />,
      title: "Health Check-up",
      description: "We ensure weekly/monthly health checkups as well"
    },
    {
      icon: <GiByzantinTemple size={70} strokeWidth={2} />,
      title: "Visit to religious places",
      description: "Buddies take your parents to local religious places as well"
    },
    {
      icon: <FaAmbulance  size={70} strokeWidth={2} />,
      title: "Medical Help",
      description: "Buddies take your parents for doctor visit, medical tests and also collect reports"
    },
    {
      icon: <TbProgressAlert size={70} strokeWidth={2} />,
      title: "Emergency Assistance",
      description: "Our buddies are always available 24x7 for emergency needs"
    },
    {
      icon: <FileText size={70} strokeWidth={2} />,
      title: "Documentation",
      description: "Trusted Buddies help your parents with visit to banks, govt. office and paper works"
    },
    {
      icon: <FaHandsHelping  size={70} strokeWidth={2} />,
      title: "Anything else",
      description: "Our buddies are always available for anything else that your parents wish"
    }
  ];

  return (
    <div className="w-full py-16 bg-gray-50">
      <InfiniteMovingCards 
        items={features} 
        direction="left" 
        speed="slow" 
        pauseOnHover={true}
      />
    </div>
  );
}

export default FeatureBox;
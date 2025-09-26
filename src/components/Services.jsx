import React from "react";
import buddy4 from "../assets/image.png"
import emoji1 from "../assets/emoji1.svg"

function Services() {
  const services = [
    { text: "Submit/Collect Document", emoji: "📃" },
    { text: "Need a bank KYC form", emoji: "🏦" },
    { text: "Medicine Delivery", emoji: "💊" },
    { text: "Post/Courier a package", emoji: "📦" },
    { text: "Stand in queue", emoji: "👫" },
    { text: "Anything else you want...", emoji: "📄" },
  ];

  return (
    <section className="bg-[#6A2AFF] min-h-screen flex items-center poppins justify-center px-12 py-15 mt-20">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <div className="flex flex-col gap-6 w-1/2">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white px-6 py-5 rounded-2xl shadow-md flex items-center gap-1 poppins text-2xl font-semibold text-[#6A2AFF] hover:scale-105 transition-transform cursor-pointer"
            >
              <span className="text-2xl">{service.emoji}</span>
              <span>{service.text}</span>
            </div>
          ))}
        </div>
        <div className="relative w-1/2 flex justify-center m-1">
          <img
            src={buddy4}
            alt="Buddy Mascot"
            className="w-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;

import React from "react";

export default function Stats({ number, label }) {
  return (
    <div className="text-center">
      <h3 className="text-[#6A2AFF] font-bold text-4xl">{number}</h3>
      <p className="text-xs poppins font-bold text-[#D314A6]">{label}</p>
    </div>
  );
}

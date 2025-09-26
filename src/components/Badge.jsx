import React from "react";

import "../Style.css"
export default function Badge({ text }) {
  return (
    <button 
  className="inline-block text-[15px] text-center text-white rounded font-medium poppins px-6 py-2 shadow-md shadow-comic"
  style={{
    background: 'linear-gradient(to right, #8457fc, #D314A6)'
  }}
>
  {text}
</button>
  );
}

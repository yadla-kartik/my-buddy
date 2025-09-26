import React from "react";

export default function Button({ text }) {
  return (
    <button className="bg-[#6A2AFF] text-white px-8 py-5 rounded-lg font-semibold shadow-lg transition">
      {text}
    </button>
  );
}

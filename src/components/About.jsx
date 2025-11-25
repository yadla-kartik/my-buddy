import React from "react";
import Quote from "./Quote";
import buddy3 from "../assets/budyy3.png";
import buddy2 from "../assets/buddy2.png";
import buddy4 from "../assets/buddy4.png";


function About() {
  return (
    <section className="w-full py-12 relative">
      <Quote />

      <h1 className="text-[#6A2AFF] font-bold tracking-tight text-center mt-12 text-[40px] poppins">
        Who are buddies?
      </h1>

      <div className="w-full flex flex-col items-center mt-16">

        <div className="flex gap-16 justify-center items-center w-full max-w-6xl relative">

          <img
            src={buddy4}
            alt="Buddy Mascot"
            width={470}
            className="rounded-lg"
          />

          <div className="max-w-xl text-center flex flex-col justify-center">
            <p className="text-xl  text-left leading-8 text-gray-900 font-normal poppins">
              Buddies act as friends of your parents. A friend just like you.
              Someone to listen, to help, and to care, when you can’t be there
              yourself.
            </p>
          </div>

        </div>

        <div className="flex gap-20 justify-center items-center w-full max-w-6xl relative mt-40">

          <div className="max-w-xl text-center flex flex-col justify-center">
            <p className="text-xl text-left leading-8 text-gray-900 font-normal poppins">
              Buddies are your friends, who help you with your tasks. Be it
              getting medicines, food or collecting a document. Be it delivering
              a package or doing courier, they do all.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute pointer-events-none"
              style={{
                backgroundImage: `url(${buddy2})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                opacity: 0.5,
                width: "580px",
                height: "270px",
                top: "-48px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1
              }}
            />

            <img
              src={buddy3}
              alt="Buddy Mascot"
              width={470}
              className="rounded-lg relative z-10"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;

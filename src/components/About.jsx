import React from 'react'
import Quote from './Quote'
import buddy3 from "../assets/budyy3.png"
import buddy2 from "../assets/buddy2.png"

function About() {
  return (
    <section className="w-full py-12 relative">
      <Quote />
      <div className="w-full">
        <div className="flex gap-30 justify-center items-center w-full relative top-15">
          
          <div className="relative z-10">
            <div 
              className="absolute pointer-events-none"
              style={{
                backgroundImage: `url(${buddy2})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                opacity: 0.5,
                width: '580px',
                height: '270px',
                top: '-48px',
                left: '50%',
                transform: 'translateX(-50%)',
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
          
          <div className='w-110 relative z-10'>
            <h1 className="text-[#6A2AFF] font-bold tracking-tighter text-[40px] poppins">
              Who are buddies?
            </h1>
            <p className="text-xl leading-8 text-gray-900 font-normal mt-4 poppins">
              Buddies are your friends, who help you with your task. 
              Be it getting medicines, food or collecting a document. 
              Be it delivering a package or doing courier, they do all.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
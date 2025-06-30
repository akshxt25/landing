import React from "react";

export default function About() {
  return (
    <div className="bg-[#CDEA68] w-full text-black rounded-tl-3xl rounded-tr-3xl">
      <div className="w-full p-20 text-black">
        <h1 className='font-["Neue_Montreal"] text-[4vw] font-medium leading-[4.5vw] tracking-tight'>
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to raise funds, sell products, explain complex
          ideas, and hire great people.
        </h1>
      </div>

      <hr className="border-[1px] border-[#b2c56d] "></hr>

      <div className="flex justify-between w-full  py-5 px-20 bg-[#CDEA68] text-black items-start gap-10 ">
        <div className=" font-['Neue_Montreal'] text-[1.2vw] font-light leading-none w-1/4 mr-50">
          What you can expect:
        </div>

        <div className="font-['Neue_Montreal'] text-[1.2vw] font-light leading-[1.8vw] w-2/4 mr-20">
          <p>
            We partner with the companies and startups who make the world go
            round — they drive the net-zero economy, revolutionize crypto
            treasury management, build photonic chips, and open Michelin-starred
            restaurants.
          </p>
          <br />
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>

        <div className="mt-30 flex flex-col items-start font-['Neue_Montreal'] text-[1.2vw] font-light leading-[2vw] w-1/4">
          <span className="mb-2">S:</span>

          <a href="#" className="underline">
            Instagram
          </a>
          <a href="#" className="underline">
            Behance
          </a>
          <a href="#" className="underline">
            Facebook
          </a>
          <a href="#" className="underline">
            LinkedIn
          </a>
        </div>
      </div>

      <hr className="w-full border-[1px] border-[#b2c56d] "></hr>

      <div className="w-full border-t-[1px] mt-5 px-20 border-[#CDEA68] ">
        <div className="w-1/2 text-black">
        
            <h1 className="text-6xl">Our approach :</h1>
            <button className="flex justify-center items-center gap-10 mt-5 px-10 py-6 bg-black text-white rounded-full text-lg">
                READ MORE
                <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
        </div>
      </div>
    </div>
  );
}

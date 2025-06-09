"use client";

import { SotialMedia } from "@/components/SotialMedia";
import { mediaList } from "@/data/mediaList";

const Page = () => {
  const name = 'Desenvolvedor de software';

  return (
    <div className="bg-black flex flex-col justify-between">
      
      <div className="container m-auto">

        <nav className="flex justify-between ">
          <div className="text-gray-600 flex items-center">{name}</div>
            <div className="">
              <img src="/assets/noob1.png" alt="logo" className="w-40 h-40"/>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 hover:opacity-70 cursor-pointer">Menu</span>
              <img src="/assets/burger.svg" alt="" className="w-12 h-12 cursor-pointer hover:opacity-70"/>
            </div>
        </nav>

      <div className="flex m-auto flex-col h-screen border">
        
        <div className="flex justify-end px-60 ">
          <div className="">
            <img src="/assets/eu.png" alt="photo" className="h-60 flex justify-center items-center"/>
          </div>
        </div>
        
        <div className="flex justify-between w-full ">
           <SotialMedia media={mediaList} />
          
          <div className="border relative w-full rounded-md">
              <div className="absolute -top-8 left-10 text-5xl text-[#3f3f3f]">
               <div className="">
                 <span className="text-white">Marlon Santos</span>
               </div>
                
              </div>
          </div>

          <div className=" rotate-90 tracking-tighter  text-[#390082] ">
            <img src="./assets/noob1.png" alt="logo" className="w-40 h-40"/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Page;
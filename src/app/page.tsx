"use client";

import { BannerInitial } from "@/components/BannerInitial";
import { PhotoAndBtn } from "@/components/PhotoAndBtn";
import { SotialMedia } from "@/components/SotialMedia";
import { bannerList } from "@/data/bannerList";
import { listBtnAndPhoto } from "@/data/listBtnAndPhoto";
import { mediaList } from "@/data/mediaList";


const Page = () => {
  const name = 'Marlon Santos';
  const profitional = 'Desenvolvedor de software';
  const logo = '/assets/noob1.png';
  const menuBurger = '/assets/burger.svg';

  return (
    <div className="bg-black flex flex-col justify-between">
      
      <div className="container m-auto">

        <nav className="flex justify-between ">
          <div className="text-gray-600 flex items-center font-display">{profitional}</div>
            <div className="">
              <img src={logo} alt="logo" className="w-40 h-40"/>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 hover:opacity-70 cursor-pointer font-display">Menu</span>
              <img src={menuBurger} alt="" className="w-12 h-12 cursor-pointer hover:opacity-70"/>
            </div>
        </nav>

      <div className="flex m-auto flex-col h-screen border ">
        
        <PhotoAndBtn btnPhoto={listBtnAndPhoto} />
        
        <div className="flex justify-between w-full">
           <SotialMedia media={mediaList} />
          
          <div className="border w-full relative rounded-md bg-white/80 border-gray-700 flex items-center shadow shadow-purple-700">
              <div className="absolute -top-12 left-10">
                <div className="">
                  <span className="text-white text-7xl  font-display">{name}</span>
                </div>  
              </div>

              <div className="px-10 ">
                <BannerInitial banner={bannerList} />
              </div>
              <img src="/assets/circuit.png" alt="" className="px-7 opacity-40"/>
          </div>
          
          <div className="h-16 flex items-center justify-center m-auto rotate-90 tracking-tighter  text-[#390082] ">
            <img src={logo} alt="logo" className="w-40 h-40"/>
          </div>

        </div>
      </div>
      </div>
    </div>
  );
};

export default Page;
"use client";

import { BannerInitial } from "@/components/BannerInitial";
import { MenuMobile } from "@/components/MenuMobile";
import { PhotoAndBtn } from "@/components/PhotoAndBtn";
import { SotialMedia } from "@/components/SotialMedia";
import { bannerList } from "@/data/bannerList";
import { listBtnAndPhoto } from "@/data/listBtnAndPhoto";
import { mediaList } from "@/data/mediaList";
import { menuList } from "@/data/menuList";


const Page = () => {
  const name = "Marlon Santos";
  const profitional = "Desenvolvedor de software";
  const logo = "/assets/noob1.png";
  const circcuit = "/assets/circuit.png";

  const onClick = () => {
    const menu = document.querySelector('#menu');
    menu?.classList.toggle('translate-x-full')
  };

  return (
    <div className="bg-black flex flex-col justify-between">
      <MenuMobile menu={menuList} onclick={onClick}/>

      <img
        src={circcuit}
        alt=""
        className="px-7 opacity-40 absolute -top-10 -left-10 max-w-80 w-full"
      />

      <div className="container m-auto font-display">
        <nav className="flex justify-between ">
          <div className="text-gray-600 flex items-center">{profitional}</div>
          <div className="">
            <img src={logo} alt="logo" className="w-40 h-40" />
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 hidden lg:block">{name}</span>
          </div>
        </nav>

        <img
          src={circcuit}
          alt=""
          className="px-7 opacity-40 absolute right-3/11 -top-20  max-w-80 w-full hidden md:block"
        />

        <div className="flex m-auto flex-col h-screen  ">
          <PhotoAndBtn btnPhoto={listBtnAndPhoto} />

          <div className="flex justify-between w-full">
            <SotialMedia media={mediaList} />

            <div className="border w-full relative rounded-md bg-white/80 border-gray-700 flex items-center shadow shadow-purple-700">
              <div className="absolute -top-12 left-10">
                <div className="">
                  <span className="text-white text-7xl font-semibold">
                    {name}
                  </span>
                </div>
              </div>

              <div className="px-10 ">
                <BannerInitial banner={bannerList} />
              </div>
              <img
                src={circcuit}
                alt=""
                className=" opacity-40 max-w-96 w-full"
              />
            </div>

            <div className="h-16 flex items-center justify-center m-auto rotate-90 tracking-tighter  text-[#390082] ">
              <img src={logo} alt="logo" className="w-40 h-40" />
            </div>
            <img
              src={circcuit}
              alt=""
              className=" opacity-40 absolute right-0 -bottom-30 max-w-72 w-full hidden lg:block"
            />
          </div>

          {/* <div className="border  relative rounded-md bg-white/80 border-gray-700 flex items-center shadow shadow-purple-700">
           ... 
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Page;

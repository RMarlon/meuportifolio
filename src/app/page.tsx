"use client";

const Page = () => {
  return (
    <div className="bg-black/90 m-auto flex flex-col justify-between ">
      
        <nav className="flex justify-between px-10 py-10">
          <div className="text-purple-900">Marlon Santos</div>
          <div className="">
            <img src="./assets/n1.png" alt="logo" className="w-40 h-40"/>
          </div>
          <div className="">
            <img src="/assets/burger.svg" alt="" className="w-12 h-12"/>
          </div>
        </nav>

      <div className="flex flex-col h-screen">
        
        <div className="flex justify-end px-70">
          <div className="">
            <img src="" alt="photo" className="w-60 h-60 rounded-full border flex justify-center items-center"/>
          </div>
        </div>
        
        <div className="flex justify-between">
          <div className="rotate-90">
            <ul className="flex gap-8">
              <li>Linkedi</li>
              <li>Instagram</li>
              <li>GitHub</li>
            </ul>
          </div>
          
          <div className="">
              <div className="border">------</div>
          </div>

          <p className="rotate-90 tracking-tighter">Desenvolver De Software</p>
        </div>
      </div>
    </div>
  );
};

export default Page;

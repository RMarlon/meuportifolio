import { Menu } from "@/types/Menu";

type Props = {
  menu: Menu[];
  onclick: () => void;
};

export const MenuMobile = ({ menu, onclick }: Props) => {

    
  return (
    <div>
      {menu.map((item) => (
        <>
          <button onClick={onclick} className="cursor-pointer hover:opacity-70 block lg:hidden  absolute right-30 top-15">
                <img src={item.burger} alt="menu burger" className="w-10 h-10"/>
          </button>

          <div id="menu" key={item.id} className="fixed top-0 right-0 z-10 bg-[#2b0063] w-60 h-screen font-display transition duration-150 ease-in-out translate-x-full">
            
            <div>
              <img onClick={onclick} src={item.cross} alt=""
                className="w-10 h-10 rounded-md cursor-pointer fixed top-12 right-5"/>

                <img src={item.logo} alt="" className="w-40 h-40 ml-10"/>    

              <div key={item.id} className="flex flex-col items-center mt-30">
                <div className="flex flex-col gap-8 text-3xl text-center">
                    
                    <a href="http://" target="_blank" 
                        className="p-2 cursor-pointer border-b border-gray-700  hover:border-white hover:text-[#8ab4f8] hover:rounded-md duration-500 ease-in-out"
                    >{item.button[0]}</a>

                    <a href="http://" target="_blank" 
                        className="p-2 cursor-pointer border-b border-gray-700 hover:border-white hover:text-[#8ab4f8] hover:rounded-md duration-500 ease-in-out"
                    >{item.button[1]}</a>

                    <a href="http://" target="_blank" 
                        className="p-2 cursor-pointer border-b border-gray-700 hover:border-white hover:text-[#8ab4f8]   hover:rounded-md duration-500 ease-in-out"
                    >{item.button[2]}</a>

                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

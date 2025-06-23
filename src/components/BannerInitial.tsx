import { Banner } from "@/types/Banner";

type Props = {
    banner: Banner[];
}

export const BannerInitial = ({banner}:Props) =>{
    return(
        <div className="font-display font-bold">
           {banner.map(item =>(
            <>
                <div key={item.id} className="py-10">
                    <span className="text-6xl text-[#390082]">{item.description[0]}</span>
                    <p className="text-6xl text-[#390082]">{item.description[1]}</p>
                    <p className="text-7xl uppercase py-10 text-gray-700"> {item.description[2]}</p>
                    
                    <a href="#" target="_blank" 
                    
                    className="w-2xs text-4xl border border-gray-600 bg-[#390082] 
                    py-2 px-10 rounded-md cursor-pointer shadow shadow-gray-700 
                    duration-400 ease-in-out hover:text-gray-700 hover:border-[#390082] 
                    hover:shadow-purple-500 hover:bg-white">

                    {item.button}</a>             
                </div>
            </>
           ))}
        </div>
    );
}
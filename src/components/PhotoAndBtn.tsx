import { PhotoBtn } from "@/types/PhotoBtn";

type Props = {
    btnPhoto: PhotoBtn[];
}

export const PhotoAndBtn = ({btnPhoto}: Props) =>{
    return(
      <div className="flex justify-around font-display">
             {btnPhoto.map(item =>(
                <>
                    <div key={item.id} className="lg:flex lg:items-center gap-8 hidden">
                        <a key={item.id} href="#" target="_blank" className="cursor-pointer text-2xl text-[#390082] border border-gray-600 p-3 rounded-md shadow shadow-gray-500 duration-300 hover:text-gray-600 hover:border-[#390082]  hover:shadow-purple-600">{item.buttons[0]}</a>
                        <a key={item.id} href="#" target="_blank" className="cursor-pointer text-2xl text-[#390082] border border-gray-600 p-3 rounded-md shadow shadow-gray-500 duration-300 hover:text-gray-600 hover:border-[#390082]  hover:shadow-purple-600">{item.buttons[1]}</a>
                        <a key={item.id} href="#" target="_blank" className="cursor-pointer text-2xl text-[#390082] border border-gray-600 p-3 rounded-md shadow shadow-gray-500 duration-300 hover:text-gray-600 hover:border-[#390082]  hover:shadow-purple-600">{item.buttons[2]}</a>
                    </div>
                    <div key={item.id}>
                        <img src={item.photo} alt="photo" className="h-60 flex justify-center items-center"/>
                    </div>
                </>
             ))}
       </div>
    );
}
import { Media } from "@/types/Media";

type Props = {
    media: Media[];
}

export const SotialMedia = ({media}: Props) =>{
    return(
        <div className="pr-14 flex items-center justify-center">
          <div className="">
            <ul> 
                <li>
                    <div className="">
                        {media.map(item => (
                            <a href={item.url} key={item.id} target="_blank">
                                <img src={item.img} className="w-6 ml-10 pt-7 duration-300 hover:opacity-70"/>
                            </a>
                        ))}
                    </div>
                </li>
            </ul>
          </div>
        </div>
    );
}
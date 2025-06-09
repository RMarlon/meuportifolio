import { Media } from "@/types/Media";

type Props = {
    media: Media[];
}

export const SotialMedia = ({media}: Props) =>{
    return(
        <div>
          <div className="px-4">
            <ul> 
                <li>
                    <div>
                        {media.map(item => (
                            <a href={item.url} key={item.id} target="_blank">
                                <img src={item.img} className="w-8 mt-4 hover:opacity-70"/>
                            </a>
                        ))}
                    </div>
                </li>
            </ul>
          </div>
        </div>
    );
}
import { Texticon } from "../icons/Texticon";
const defaultStyles = "bg-white shadow-lg rounded-lg p-6 border border-gray-200 max-w-72 transition-all duration-300 hover:shadow-xl hover:border-purple-200";

interface CardProps{
    title: string;
    link: string;
    type: 'twitter'| 'youtube';
}

export function Card(props: CardProps) {
    return (
    <div className={defaultStyles}>
        <div className="flex justify-between items-center mb-4">
            <div className="text-gray-600 pr-2 flex items-center text-md font-medium gap-2 hover:text-purple-600 transition-colors duration-200">
                <Texticon/>
                {props.title}
            </div>
            <div>
                <div className="text-gray-400 justify-between flex items-center">
                    <Texticon/>
                    <Texticon/>
                </div>
            </div>
        </div>
        <div className="py-4">
        {props.type==='twitter'?
                    <blockquote className="twitter-tweet">
                    <a href={props.link.replace("x.com", "twitter.com")}></a> 
                  </blockquote>:
                  <iframe src={props.link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true} className="relative left-0 w-full h-full"></iframe>
        }

            
        </div>
    </div>
    );
}
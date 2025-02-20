import { TwitterIcon } from "../icons/Twittericon";
import { Youtubeicon } from "../icons/Youtubeicon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return(
        <div className="h-screen bg-white border-r w-72 fixed left-0 top-0">
            <div className="pt-4 pl-2">
                <SidebarItem icon={<TwitterIcon />} text={"twitter"}></SidebarItem>
                <SidebarItem icon={<Youtubeicon/>} text={"Youtube"}></SidebarItem>
            </div>
        </div>
    );
}
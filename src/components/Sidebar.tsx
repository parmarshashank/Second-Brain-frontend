import { TwitterIcon } from "../icons/Twittericon";
import { Youtubeicon } from "../icons/Youtubeicon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return(
        <div className="h-screen bg-white border-r border-gray-200 w-72 fixed left-0 top-0 shadow-sm">
            <div className="pt-6 px-4">
                <h1 className="text-xl font-bold text-purple-600 mb-6 px-2">Dashboard</h1>
                <div className="space-y-2">
                    <SidebarItem icon={<TwitterIcon />} text={"Twitter"}></SidebarItem>
                    <SidebarItem icon={<Youtubeicon/>} text={"Youtube"}></SidebarItem>
                </div>
            </div>
        </div>
    );
}
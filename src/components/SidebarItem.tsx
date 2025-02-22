import { ReactElement } from "react";

interface SidebarItemProps {
    text:string;
    icon: ReactElement;
}

export const SidebarItem = (props: SidebarItemProps) => {
    return (
        <div className="flex text-gray-600 items-center p-3 hover:bg-purple-50 rounded-lg cursor-pointer transition-all duration-200 hover:text-purple-600 group">
            <div className="px-2 group-hover:scale-110 transition-transform duration-200"> {props.icon} </div>
            <div className="px-2 font-medium"> {props.text} </div>
        </div>
    );
};

import { ReactElement } from "react";

interface SidebarItemProps {
    text:string;
    icon: ReactElement;
}

export const SidebarItem= (props: SidebarItemProps) => {
    return (
        <div className="flex text-gray-600 items-center p-2">
            <div className="px-2"> {props.icon} </div>
            <div className="px-2"> {props.text} </div>
            
        </div>
    );
};

import { Crossicon } from "../icons/Crossicon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}

export const CreateContentModal = (props: CreateContentModalProps) => {
    return (
        <>
            {props.open && 
                <div className="w-screen h-screen bg-slate-700 fixed top-0 left-0 z-50 opacity-60 flex justify-center items-center">
                    <div className="flex flex-col justify-center">
                        <div className="bg-white p-4 rounded-md opacity-100">
                            <div className="flex justify-end pb-2">
                                <div onClick={props.onClose} className="cursor-pointer">
                                    <Crossicon/>
                                </div>
                            </div>
                                <InputBox placeholder="Link"/>
                                <InputBox placeholder="Type"/>
                            <Button variant="primary" text="Add Content"></Button>
                        </div>

                    </div>
                </div>
            }
        </>
    );
};


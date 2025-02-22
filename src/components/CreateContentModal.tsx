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
            {props.open && (
                <div className="w-screen h-screen fixed top-0 left-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center animate-fadeIn">
                    <div className="flex flex-col justify-center max-w-md w-full mx-4">
                        <div className="bg-white p-6 rounded-xl shadow-xl opacity-100 transform animate-slideIn">
                            <div className="flex justify-between items-center pb-4 border-b">
                                <h2 className="text-xl font-semibold text-gray-800">Add New Content</h2>
                                <div onClick={props.onClose} className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                                    <Crossicon/>
                                </div>
                            </div>
                            <div className="space-y-4 mt-4">
                                <InputBox placeholder="Link"/>
                                <InputBox placeholder="Type"/>
                                <div className="mt-6">
                                    <Button variant="primary" text="Add Content"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


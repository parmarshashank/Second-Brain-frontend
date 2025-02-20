import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { useRef } from "react";
import { BACKEND_URL } from "../../config.tsx";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export function Signup(){
    const usernameRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const navigate= useNavigate();

    async function signup(){
        const username= usernameRef.current?.value;
        const password= passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/signup`,{
                username,
                password,
        });
        navigate('/signin');
    }
    return(
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white p-4 rounded-md min-w-40">
                <InputBox placeholder="Username" reference={usernameRef}/>
                <InputBox placeholder="Password" reference={passwordRef}/>
                <Button variant="primary" text="Sign Up" onClick={signup}></Button>
            </div>
        </div>
    );
};
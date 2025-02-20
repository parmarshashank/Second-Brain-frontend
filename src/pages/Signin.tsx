import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { useRef } from "react";
import { BACKEND_URL } from "../../config.tsx";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export function Signin(){
    const usernameRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const navigate= useNavigate();
    async function signin(){
        const username= usernameRef.current?.value;
        const password= passwordRef.current?.value;
        const res= await axios.post(`${BACKEND_URL}/api/v1/signin`,{
                username,
                password,
        });
        const token=res.data.token;
        localStorage.setItem('token',token);
        navigate('/dashboard');
    }
    return(
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white p-4 rounded-md min-w-40">
                <InputBox placeholder="Username" reference={usernameRef}/>
                <InputBox placeholder="Password" reference={passwordRef}/>
                <Button variant="primary" text="Sign Up" onClick={signin}></Button>
            </div>
        </div>
    );
};
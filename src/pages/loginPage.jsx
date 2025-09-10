import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function login(){
        console.log(email, password)
        axios.post(import.meta.env.VITE_BACKEND_URL + "/users/login", {
            email: email,
            password: password
        }).then(
            (response)=>{
                console.log(response.data)
                localStorage.setItem("token", response.data.token)

                //const token = localStorage.getItem("token")

                toast.success("login successfully")
                if(response.data.role == "admin"){
                    //Go to Admin page
                    navigate("/admin")

                }else if(response.data.role == "user"){
                    //Go to home page
                    navigate("/")
                }
            }
        ).catch(
            (error)=>{
                console.log(error)
                toast.error("failed to login!")
            }
        )
    }

    return(
        <div className="w-full h-screen bg-[url(./loginbg.jpg)]  bg-cover bg-center flex justify-center items-center ">
            <div className="w-[500px] h-[500px] relative gap-[10px] border backdrop-blur-sm  bg-white/80 shadow-2xl rounded-2xl text-white flex flex-col items-center justify-center">
                <h1 className="text-4xl absolute top-15 font-bold text-center text-black text-shadow-white ">LOGIN</h1>
                <div className="w-[350px]   flex flex-col">
                    <span className="text-lg text-black">Email :</span>
                     <input onChange={
                        (e)=>{
                            setEmail(e.target.value)
                            
                        }
                     }
                      type="text" className="w-[350px] h-[40px] pl-2 text-black border border-black rounded-xl" />
                </div>
                 <div className="w-[350px]   flex flex-col">
                    <span className="text-lg text-black ">Password :</span>
                     <input onChange={
                        (e)=>{
                            setPassword(e.target.value)
                            
                        }
                     } type="password" className="w-[350px] h-[40px] pl-2 text-black border border-black rounded-xl" />
                </div>
               <button onClick={login} className="w-[350px] h-[40px] bg-black rounded-xl text-white text-lg mt-5 hover:bg-zinc-700 transition-all duration-300">Login</button>
               <p className="text-black">Don't have an account? <Link to="./register" className="text-zinc-700 underline">Sign up</Link> here</p>
            </div>
            
        </div>
    )
}
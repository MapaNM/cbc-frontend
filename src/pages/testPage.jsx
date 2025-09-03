import { useState } from "react"

export default function TestPage(){

    const[count, setCount] = useState(0)
    
    function increment(){
        setCount(count +1)
        
    }

    function decrement(){
        setCount(count -1)
       
    }

    return(
        <div className="w-full h-screen bg-amber-200 flex justify-center items-center">
            <div className="w-[400px] h-[400px] bg-amber-50 flex flex-col justify-center items-center">
                <h1 className="text-5xl font-bold">{count}</h1>
                <div className="w-full flex justify-center items-center h-[100px]">
                    <button onClick={decrement} className="w-[100px] bg-blue-500 mx-2 text-3xl rounded-3xl flex justify-center items-center text-white">
                        -
                    </button>
                    <button onClick={increment} className="w-[100px] bg-blue-500 mx-2 text-3xl rounded-3xl flex justify-center items-center text-white">
                        +
                    </button>
                </div>

            </div>
            
        </div>
    )
}
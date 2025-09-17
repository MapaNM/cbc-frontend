import toast from "react-hot-toast";
import { useState } from "react";
import uploadFile from "../utils/mediaUpload";


export default function TestPage(){

    const [file, setFile] = useState(null);

    function handleUpload(){
            uploadFile(file).then(
                (url)=>{
                     console.log("File available at:", url);
                     toast.success("File uploaded successfully!");
                }
            ).catch(
                (err)=>{
                    console.error("Error uploading file:", err);
                    toast.error("Error uploading file" + err);
                }
            )
        }

 return(    

        <div className="w-full h-screen flex justify-center items-center">
            <input type="file" onChange={
                (e)=>{
                    setFile(e.target.files[0]);
                }
            }/>

            <button onClick={handleUpload}  className="bg-blue-500 text-white p-2 rounded cursor-pointer">Upload</button>
        </div>

        )
    }

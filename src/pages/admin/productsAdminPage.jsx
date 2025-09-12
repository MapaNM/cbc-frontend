import { PiPlus } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function ProductAdminPage(){
    return(
        <div className="h-full w-full border-[3px]">
            <Link to={"/admin/newProduct"} className="fixed right-[60px] bottom-[60px] p-[20px] bg-black rounded-full cursor-pointer">
                <PiPlus className="text-3xl text-white"/>

            </Link>
            
        </div>
    )
}
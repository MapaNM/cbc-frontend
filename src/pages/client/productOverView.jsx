import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom"
import Loader from "../../components/loader";
import ImageSlider from "../../components/imageSlider";


export default function ProductOverView(){

    const params = useParams();
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState("loading"); // loading, error, success
    
    useEffect(
        () => {
            if(status === "loading"){
                axios.get(`${import.meta.env.VITE_BACKEND_URL}/products/${params.productId}`).then(
                    (res) => {
                        setProduct(res.data);
                        setStatus("success");
                    }
                ).catch(
                    (err) => {
                        setStatus("error");
                        toast.error("Error loading product");
                    }
                )
            }
        },[status]
    )

    return(
        <div className="w-full h-full">
            {
                status === "loading" && <Loader/>
            }
            {
                status === "success" && <div className="w-full h-full flex flex-row">
                    <div className="w-[49%] h-full flex flex-col justify-center items-center">
                        <ImageSlider images={product.images}/>
                    </div>
                    <div className="w-[49%] h-full bg-green-400">

                    </div>
                    
                </div>
            }
            {
                status === "error" && <h1 className="text-red-500">Error loading product</h1>
            }
            
        </div>
    )
}
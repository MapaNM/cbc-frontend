import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import uploadFile from "../../utils/mediaUpload"

export default function UpdateProductAdminPage(){

    const location = useLocation();
    const [productId, setProductId] = useState(location.state.productId);
    const [productName, setProductName] = useState(location.state.name);
    const [alternativeName, setAlternativeName] = useState(location.state.altNames.join(","));
    const [labelledPrice, setLabelledPrice] = useState(location.state.labelledPrice);
    const [price, setPrice] = useState(location.state.price);
    const [images, setImages] = useState([])
    const [description, setDescription] = useState(location.state.description);
    const [stock, setStock] = useState(location.state.stock);
    const [isAvailable, setIsAvailable] = useState(location.state.isAvailable);
    const [category, setCategory] = useState("cream")
    const navigate = useNavigate()


    async function handlesubmit(){ 
          
        const promisesArray = []

        for(let i=0; i<images.length; i++){
            
            const promise = uploadFile(images[i]);
            promisesArray[i] = promise;  

        }

        const responses = await Promise.all(promisesArray)
        console.log(responses)

       

        const altNamesInArray = alternativeName.split(",");
        const productdata = {
            productId: productId,
            name: productName,
            altNames: altNamesInArray,
            labelledPrice: labelledPrice,  
            price: price,
            images: responses,
            description: description,
            stock: stock,
            isAvailable: isAvailable,
            category: category
        }

        if(responses.length === 0){
            productdata.images = location.state.images;
        }

        const token = localStorage.getItem("token");

        if(token == null){
           navigate("/login");
           toast.error("Please login first");
            return;
        }

        axios.put(import.meta.env.VITE_BACKEND_URL + "/products/" + productId, productdata,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        } ).then(
            (res)=>{
                console.log("Product updated successfully");
                console.log(res.data);
               toast.success("Product updated successfully");
               navigate("/admin/products");

            }
        ).catch(
            (err)=>{
                console.log("Error updating product");
                toast.error("Error updating product");
            }
        )

       
    }

    return(
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[600px] h-[600px] border-[3px] rounded-[10px] flex flex-wrap justify-between p-[30px]   ">

                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="text-sm font-bold">Product ID</label>
                    <input disabled value={productId} onChange={(e)=>{
                        setProductId(e.target.value)
                    }} className="w-full h-[40px] border-[2px] border-black rounded-[5px]" type="text" />
                </div>
                 <div className="w-[300px] flex flex-col gap-[5px]">
                    <label className="text-sm font-bold">Product Name</label>
                    <input value={productName} onChange={(e)=>{
                        setProductName(e.target.value)
                    }} className="w-full h-[40px] border-[2px] border-black rounded-[5px]" type="text" />
                </div>
                <div className="w-[500px] flex flex-col gap-[5px]">
                    <label className="text-sm font-bold">Alternative Name</label>
                    <input value={alternativeName} onChange={(e)=>{
                        setAlternativeName(e.target.value)
                    }} className="w-full h-[40px] border-[2px] border-black rounded-[5px]" type="text" />
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="text-sm font-bold">Labelled Price</label>
                    <input value={labelledPrice} onChange={(e)=>{
                        setLabelledPrice(e.target.value)
                    }} className="w-full h-[40px] border-[2px] border-black rounded-[5px]" type="number" />
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="text-sm font-bold">Price</label>
                    <input value={price} onChange={(e)=>{
                        setPrice(e.target.value)
                    }} className="w-full h-[40px] border-[2px] border-black rounded-[5px]" type="number" />
                </div>
                <div className="w-[500px] flex flex-col gap-[5px]">
                    <label className="text-sm font-bold">Images</label>
                    <input multiple onChange={(e)=>{
                         setImages(e.target.files);
                    }} className="w-full h-[40px] border-[2px] border-black rounded-[5px]" type="file" />
                </div>
                <div className="w-[500px] flex flex-col gap-[5px]">
                    <label className="text-sm font-bold">Description</label>
                    <textarea value={description} onChange={(e)=>{
                        setDescription(e.target.value)
                    }} className="w-full h-[60px] border-[2px] border-black rounded-[5px]"></textarea>
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="text-sm font-bold">Stock</label>
                    <input value={stock} onChange={(e)=>{
                        setStock(e.target.value)
                    }} className="w-full h-[40px] border-[2px] border-black rounded-[5px]" type="number" />
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="text-sm font-bold">Is Available?</label>
                    <select value={isAvailable} onChange={(e)=>{
                        setIsAvailable(e.target.value)
                    }} className="w-full h-[40px] border-[2px] border-black rounded-[5px]">
                        <option value="true">Available</option>
                        <option value="false">Not Available</option>
                    </select>
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="text-sm font-bold">Category</label>
                    <select value={category} onChange={(e)=>{
                        setCategory(e.target.value)
                    }} className="w-full h-[40px] border-[2px] border-black rounded-[5px]">
                        <option value="Face Cream">Face Cream </option>
                        <option value="Body Lotion">Body Lotion</option>
                        <option value="Soap">Soap</option>
                        <option value="Fragrance">Fragrance</option>
                        
                    </select>
                </div>
                <div className="w-full flex flex-row gap-[20px] items-center justify-center pt-5">
                   <Link to={"/admin/products"} className="w-[100px] h-[40px] text-md font-bold text-black border-[2px] border-black rounded-[5px] flex justify-center items-center">Cancel</Link>
                    <button onClick={handlesubmit} className="w-[200px] h-[40px] text-md font-medium text-white border-[2px] bg-black rounded-[5px] flex justify-center items-center cursor-pointer">Update Product</button>
                </div> 
                </div> 

            </div>
     
    )
}
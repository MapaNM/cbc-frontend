import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";

export default function ClientPage(){
    return(
        <div className="w-full h-screen max-h-screen">
            <Header/>

            <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center bg-red-500">
                <Routes path="/">
                    <Route path="/" element={<h1 className="text-3xl font-bold">Home Page</h1>} />
                    <Route path="/products" element={<h1 className="text-3xl font-bold">Products Page</h1>} />
                    <Route path="/reviews" element={<h1 className="text-3xl font-bold">Reviews Page</h1>} />
                    <Route path="/about-us" element={<h1 className="text-3xl font-bold">About Us Page</h1>} />
                    <Route path="/contact-us" element={<h1 className="text-3xl font-bold">Contact Us Page</h1>} />
                    <Route path="/*" element={<h1 className="text-3xl font-bold">404 Not Found</h1>} />
                </Routes>
            </div>
        </div>
      
        
    )
}
import { Link } from "react-router-dom"

export default function Header(){
    return(
      <header className="h-[100px] bg-blue-600 flex justify-center items-center gap-10">
        <Link to="/" className="text-white text-xl">Home</Link>
        <Link to="/products" className="text-white text-xl">Products</Link>
        <Link to="/reviews" className="text-white text-xl">Reviews</Link>
        <Link to="/about-us" className="text-white text-xl">About Us</Link>
        <Link to="/contact-us" className="text-white text-xl">Contact Us</Link>
      </header>
    )
}
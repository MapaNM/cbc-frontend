import "./productCard.css"
import ProductCard from "./productCard";

export default function SuperProduct(){
    return(
        <>
        <div>
            <h1> Featured Products!!!</h1>
            <ProductCard name="Apple Silicon" price="$1200" image="https://picsum.photos/id/1/200/300" />
        </div>
        </>
    )
}
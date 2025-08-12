import "./productCard.css"
export default function ProductCard(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <img src={props.image} />
            <p>Price : {props.price}</p>
            <h2>{props.brand}</h2>
            <button>View More</button>
        </div>
    )


}
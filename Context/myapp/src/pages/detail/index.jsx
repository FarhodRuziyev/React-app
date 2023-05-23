import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



export default function Detail() {
    const {id} = useParams();
    const [ product, setProduct] = useState({});
    
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    },[id])
    
    return(
        <div>
            <h1>Detail pages</h1>
            <h2>
                {product?.price}
            </h2>
            <p><img src={product?.image} alt="imgbor" /></p>
        </div>
    );
}
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
    const [category, setCategory] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategory(json))
    }, []);
    // console.log(category);

    return(
        <div>
            <h1>About pages</h1>
            {category?.map((e)=>(
                <h1 key={e}>
                    <Link  to={e}>{e}</Link>
                </h1>
            ))}
        </div>
    );
   
}
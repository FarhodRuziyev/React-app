import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import navbar from './nav.module.scss';

export default function Navbar() {
    const [categ, setCateg] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCateg(json));
    },[]) 
    console.log(categ);
    return(
       <div className={navbar.navbar}>
            <div className={navbar.container}>
                <div className={navbar.logo}><h1><i>LoGo</i></h1></div>
                <input type="checkbox" id="ok" />
                <div className={navbar.ull}>
                <label for="ok" id="x">X</label>
                    {categ?.map((item) => ( 
                        <a className={navbar.a} href="#">
                            <Link to={`/${item}`}> {item} </Link> 
                        </a>
                    ))}
                </div> 
                <label for="ok" id="bars"><i class="fa-solid fa-bars"></i></label>
            </div>
       </div>
    )
}
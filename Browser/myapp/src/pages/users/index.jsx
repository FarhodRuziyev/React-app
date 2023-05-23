// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import userscss from './users.module.scss';

// export default function Users() {
//     const [categ, setCateg] = useState([]);

//     useEffect(()=>{
//         fetch('https://fakestoreapi.com/products/categories')
//             .then(res=>res.json())
//             .then(json=>setCateg(json));
//     },[]) 
//     console.log(categ);
//     return(
//        <div>
//             <div className={userscss.user}>
//                 {categ?.map((item) => ( 
//                     <h1>
//                         <Link to={`/${item}`}> {item} </Link> 
//                     </h1>
//                 ))}
//             </div> 
//        </div>
//     )
// }
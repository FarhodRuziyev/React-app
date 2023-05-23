import { useEffect } from "react";
import { useState } from "react";
import showscss from './show.module.scss';




function Showcase() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => setPosts(json));
    console.log("posts");
  }, []);
      
  return (
    <div className={showscss.Showcase}>
        {posts?.map((e)=>{
            console.log(e);
            return(
                <div key={e.id} className={showscss.card}>
                    <div className={showscss.img}>
                        <img src={e.image} alt="#" />
                    </div>
                    <div className={showscss.text}>
                        <h3 className={showscss.h3}>{e.title}</h3>
                        <p><b>price:</b> {e.price}$</p>
                        <i><b>rating:</b> rate:{e.rating.rate}, count:{e.rating.count}</i>
                    </div>
                </div>
            )
          })}
    </div>
  );
}

export default Showcase; 
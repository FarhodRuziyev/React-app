import './card.scss';


function Card({ptop,heding3, heding1, psentr, span}) {
    return(
        <>
        <div>
            <div className='cards'>
                <p> <a href="#">{ptop}</a></p>
                <h1>{heding1}</h1>
                <h3>{heding3}</h3>
                <p>{psentr}</p>
                <span>{span}</span>
            </div>
        </div>
        </>
    );
}

export default Card;
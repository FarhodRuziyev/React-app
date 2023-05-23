import './sarlav.scss'

function NewMatn({hikki, pikki, alink }){
    return(
        <>
        <div className='hedpi'>
            <h2 className='hikki'>{hikki}</h2>
            <p className='pikki'>{pikki}</p>
            <a href="#"><h5>{alink}</h5></a>
        </div>
        </>
    );
}

export default NewMatn;
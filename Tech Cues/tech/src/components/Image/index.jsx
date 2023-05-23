

function Image({rasm, ptext, hone}) {
    return(
        <>
        <div>
            <img src={`/assets/img/${rasm}`} alt="asad" />
            <br />
            <p>{ptext}</p>
            <h3>{hone}</h3>
        </div>
        </>
    );
    
}

export default Image;
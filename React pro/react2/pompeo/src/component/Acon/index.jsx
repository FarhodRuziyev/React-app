import './acon.scss';


function Acon({ nomi, adres}) {
    return(
        <>
        <div>
            <div className='ikon'>
                <a href="#"><h4>{nomi}</h4></a>
                <a href="#">{adres}</a>
            </div>
        </div>
        </>
    );
    
}

export default Acon;
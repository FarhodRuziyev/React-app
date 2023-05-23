import NewMatn from '../Sarlavha2';
import Acon from '../Acon';
import './footer.scss';


function Footer() {
    return(
        <> 
        <div>
            <div className="container5">
                <div className='namuna'>
                    <NewMatn hikki={"POMPEO"} pikki={"I have always striven to fix beauty in wood, stone,glass or pottery, that has been my creed."}/>
                </div>
                <div className="acons">
                    <div className='about'>
                        <a href="#"><i class="fa-solid fa-envelope"></i></a>
                        <Acon nomi={"EMAIL"} adres={"pompeopotery@gmail.com"} />
                    </div>
                    <div className='about'>
                        <a href="#"><i class="fa-solid fa-location-pin"></i></a>
                        <Acon nomi={"FIND"} adres={"Central Park, Manhattan New York, 1101"} />
                    </div>
                    <div className='about'>
                        <a href="#"><i class="fa-solid fa-phone"></i></a>
                        <Acon nomi={"CALL"} adres={"+1 292 345 678"} />
                    </div>
                </div>   
            </div>
            <div className='lasttext'>
                <p>Template design by Dorian Hoxha Image License Info Powered by Webflow</p>
            </div>
        </div>
        </>
    )  
}

export default Footer;
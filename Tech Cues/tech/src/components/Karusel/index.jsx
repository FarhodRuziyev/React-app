import Card from '../Card';
import Image from '../Image';
import './karusel.scss';

function Karusel() {
    return(
        <>
            <div className='main'>
                <div className='container1'>
                    <div className='kard'>
                        <div>
                            <Image rasm={"IMAGE4.png"}/>
                        </div>
                        <div classname="kardtext">
                            <Card ptop={"MOBILE TECHNOLOGY"} heding3={"Best Technology Podcast Episodes of 2020"} psentr={"Milford Smith"} />
                        </div>
                    </div>
                    <div className='kard'>
                        <div>
                            <Image rasm={"IMAGE5.png"}/>
                        </div>
                        <div classname="kardtext">
                            <Card  ptop={"MOBILE TECHNOLOGY"} heding3={"Drive Efficient Growth with Integrated Data"} psentr={"Milford Smith"} />
                        </div>
                    </div>
                    <div className='kard'>
                        <div>
                            <Image rasm={"IMAGE6.png"}/>
                        </div>
                        <div classname="kardtext">
                            <Card ptop={"MOBILE TECHNOLOGY"} heding3={"The Benefits of Data-Driven Storytelling with TechCues"} psentr={"Milford Smith"} />
                        </div> 
                    </div>
                </div>
            </div>
        </>
    );
    
}

export default Karusel;

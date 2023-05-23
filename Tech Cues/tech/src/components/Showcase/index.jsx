import Card from '../Card';
import Image from '../Image';
import './showcas.scss';


function Showcase(){
    return(
        <>
        <div className='showcase'>
            <div className='container'>
                <p className='poztop'><img src="/assets/img/IMAGE3.png" alt="#" /></p>
                <div className='cards'>
                    <div className='card'>
                        <div className='cardtext'>
                            <Card ptop={"MOBILE TECHNOLOGY"} heding1={"Technology in Sales: How Data is Powering Purchase Decisions"} psentr={"Milford Smith"} span={"February 12, 2021"}/>
                        </div>
                        <div className='cardimg'>
                            <Image rasm={"IMAGE2.png"}/>
                        </div>
                        <p className='pozbott'><img src="/assets/img/IMAGE3.png" alt="#" /></p>
                    </div>
                    
                </div>
                
            </div>
        </div>
        </>
    );
}

export default Showcase;
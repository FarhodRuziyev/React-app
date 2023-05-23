import './monitor.scss';
import Card from '../Card';
import Image from '../Image';


function Monitor() {
    return(
        <> 
         <div>
            <div className='container4'>
                <div className='imgmodal'>
                    <Image rasm={"IMAGE7.png"} ptext={"Adell Jacobi"} hone={"Drive Efficient Growth with Integrated Data"}/>
                </div>
                <div>
                    <Card ptop={"MOBILE TECHNOLOGY"} heding1={"The Benefits of Data-Driven Storytelling with TechCues"} psentr={"Milford Smith"} span={"February 12, 2021"}/>
                </div>
                <p className='pozbott'><img src="/assets/img/IMAGE3.png" alt="#" /></p>
            </div>
         </div>
        </>
    );
}

export default Monitor;
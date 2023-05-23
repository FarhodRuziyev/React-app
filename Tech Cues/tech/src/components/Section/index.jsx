import Textcom from '../Textcom';
import './section.scss';
import Madal2 from '../Madal2';
import Madalka from '../Madalka';



function Section() {
    return(
        <>
            <div className='container5'>
                <div>
                    <div className='slider'>
                        <h4>Mobile Technology</h4>
                        <a href="#">View All <i class="fa-solid fa-next"></i></a>
                    </div>
                    <div className='stext'>
                        <Textcom mypey={"Milford Smith"} myheding={"Technology in Sales: How Data is Powering Purchase Decisions"} mypey1={"Adell Jacobi"} myheding1={"Best Technology Podcast Episodes of 2020"} mypey2={"Lon Baumbach"}  myheding2={"Integrate Big Data to Drive Informed, Agile Solutions"}/>
                    </div>
                </div>
                <div className='lastmodal'>
                    <div className='modal'>
                        <Madalka pikki={"FREE EBOOK"} hikki={"5 Things You Can Do Right Now to Speed up Your Workflow"}/>
                    </div>
                    <div className='formm'>
                        <Madal2/>
                    </div>
                </div>
                <div>
                    <div className='slider'>
                        <h4>Mobile Technology</h4>
                        <a href="#">View All <i class="fa-solid fa-next"></i></a>
                    </div>
                    <div className='stext'>
                        <Textcom mypey={"Milford Smith"} myheding={"Technology in Sales: How Data is Powering Purchase Decisions"} mypey1={"Adell Jacobi"} myheding1={"Best Technology Podcast Episodes of 2020"} mypey2={"Lon Baumbach"}  myheding2={"Integrate Big Data to Drive Informed, Agile Solutions"}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section;
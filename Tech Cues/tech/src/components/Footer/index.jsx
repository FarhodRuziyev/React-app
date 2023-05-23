import './footer.scss';
import Madal2 from '../Madal2';
import Madalka from '../Madalka';



function Footer() {
    return(
        <>
            <div className='footerr'>
                <div className='container6'>
                    <div className='leftfoter'>
                        <div className='footlogo'>
                            <div className='logoimg'>
                                <a href="#"><img src="/assets/img/IMAGE1.png" alt="#" /></a>
                            </div>
                            <ul className='ul_icon'>
                                <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-slack"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        <div className='ullar'>
                            <ul className='ulbir'>
                                <h3><a href="#">CATIGORIES</a></h3>
                                <li><a href="#">Case Studies</a></li>
                                <li><a href="#">Mobile Technology</a></li>
                                <li><a href="#">Data Insights</a></li>
                            </ul>
                            <ul className='ulikki'>
                                <h3><a href="#">TEMPLATE</a></h3>
                                <li><a href="#">Style Guide</a></li>
                                <li><a href="#">License</a></li>
                                <li><a href="#">Change Log</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='register'>
                        <div className='modal'>
                            <Madalka pikki={"FREE EBOOK"} hikki={"5 Things You Can Do Right Now to Speed up Your Workflow"}/>
                        </div>
                        <div className='formm'>
                            <Madal2/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
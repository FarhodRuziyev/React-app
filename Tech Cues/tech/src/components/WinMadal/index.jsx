import Madal2 from '../Madal2';
import Madalka from '../Madalka';
import './wmadal.scss';


function WinMadal() {
    return(
        <>
            <div className='hommodal'>
                <div className='container3'>
                    <div className='modal'>
                        <Madalka pikki={"FREE EBOOK"} hikki={"5 Things You Can Do Right Now to Speed up Your Workflow"}/>
                    </div>
                    <div className='formm'>
                        <Madal2/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WinMadal;
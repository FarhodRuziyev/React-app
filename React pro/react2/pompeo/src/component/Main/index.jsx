import './main.scss';
import Shovmatn from '../Showmatn';
import NewMatn from '../Sarlavha2';

function Main({ptop,heding1,pikki,hikki}){
    return(
        <>
        <div className='mainone'>
            <div className='container'>

                <div className='sarlavha'>
                    <>
                    <Shovmatn ptop={"PRODUCT CATEGORIES"} heding1={"Porcelain & Pottery"}/>
                    </>
                </div>
                {/* <div className='sarlavha'>
                    <h5 className='ptop'>{ptop}</h5>
                    <h1 className='heding1'>{heding1}</h1>
                </div> */}
                <div className='kolleksiya'>
                    <div><img src="/assets/img/Frame.png" alt="#" /></div>
                    <div><img src="/assets/img/Frame1.png" alt="#" /></div>
                    <div><img src="/assets/img/Frame2.png" alt="#" /></div>
                </div>

                <div className='sarlavha2'>
                <div>
                    <>
                    <NewMatn  hikki={"Hand Grafted Pottery since 1990"} pikki={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere."}/>
                    </>
                </div>
                <div>
                    <>
                    <NewMatn  hikki={"Hand Grafted Pottery since 1990"} pikki={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere."}/>
                    </>
                </div>
                </div>

                {/* <div className='sarlavha2'>
                    <div className='hikki'><h2 className='heding2'>{heding2}</h2><p className='ptop2'> {ptop2}</p>
                    </div>
                    <div className='hikki'><h2 className='heding2'>{heding2}</h2><p className='ptop2'> {ptop2}</p>
                    </div>
                </div> */}
            </div>
        </div>
        </>
    );
}

export default Main;
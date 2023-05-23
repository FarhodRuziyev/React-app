import Shovmatn from '../Showmatn';
import Dollor from '../Dolllor';
import Btntop from '../Btntop' ;
import './sektion.scss';


function Sektion() {
    return(
        <>
            <div className='Sten'>
                <div className='container1'>
                    <div className='sarlavha'>
                        <Shovmatn ptop={"OUR ONLINE STORE"} heding1={"Pottery Collection"}/>
                    </div>
                    <div className='card'>
                    <div className='cards'>
                        <div>
                            <img src="/assets/img/IMAGE5.png" alt="#" />
                        </div>
                        <div>
                            <Dollor narx={"Decor Plate"} prays={"65.00"}/>
                        </div>
                    </div>
                    <div className='cards'>
                        <div>
                            <img src="/assets/img/IMAGE6.png" alt="#" />
                        </div>
                        <div>
                            <Dollor narx={"Decor Plate"} prays={"65.00"}/>
                        </div>
                    </div>
                    <div className='cards'>
                        <div>
                            <img src="/assets/img/IMAGE7.png" alt="#" />
                        </div>
                        <div>
                            <Dollor narx={"Decor Plate"} prays={"65.00"}/>
                        </div>
                    </div>
                    <div className='cards'>
                        <div>
                            <img src="/assets/img/IMAGE8.png" alt="#" />
                        </div>
                        <div>
                            <Dollor narx={"Decor Plate"} prays={"65.00"}/>
                        </div>
                    </div>
                    <div className='cards'>
                        <div>
                            <img src="/assets/img/IMAGE9.png" alt="#" />
                        </div>
                        <div>
                            <Dollor narx={"Decor Plate"} prays={"65.00"}/>
                        </div>
                    </div>
                    <div className='cards'>
                        <div>
                            <img src="/assets/img/IMAGE10.png" alt="#" />
                        </div>
                        <div>
                            <Dollor narx={"Decor Plate"} prays={"65.00"}/>
                        </div>
                    </div>
                    </div>
                    <div className='battin'>
                        <Btntop matn={"VIEV All PRODUCTS"}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sektion;
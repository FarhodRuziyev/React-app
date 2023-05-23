import './shows.scss';
import Battin from '../Btntop/index';   

function Bgk({toptext, heding1, pasttext}) {
    return(
        <>
        <div className='ekran'>
            <div className="container2">
                <div className='potery'>
                    <h5 className="ptext">{toptext}</h5>
                    <h1 className="hedingone">{heding1}</h1>
                    <p> {pasttext}</p>
                    <a href="#"><Battin matn={'Shop Collection'}/></a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Bgk;
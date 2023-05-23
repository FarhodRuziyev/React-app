import Battin from '../Btntop/index';
import "./Showcase.scss";

const Showcase = ({ toptext, heding1, pasttext,}) => {
  return (
    <>
      <div className="Showcase">
        <div className="container">
          <div className="showtext">
            <h5 className="ptext">{toptext}</h5>
            <h1 className="hedingone">{heding1}</h1>
            <p> {pasttext}</p>
            <a href="#"><Battin matn={'Shop Collection'}/></a>
          </div>
          <div className='showimg'>
            <img src="/assets/img/image4.png" alt="#" width="600px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;

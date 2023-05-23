import './user.scss';
import Shovmatn from '../Showmatn';
import Btntop from '../Btntop' ;

function User() {
    return(
        <>
        <div className='container4'>
            <div>
                <img src="/assets/img/IMAGE12.png" alt="#" />
            </div>
            <div className='sarlavha3'>
                <Shovmatn ptop={"LATEST NEWS"} heding1={"Latest news & New updates"}/>
            </div>
            <form className='formm' action="#">
                <div className='input'><input type="email" placeholder='Enter your email' /></div>
                <div className='button'>
                <Btntop matn={"SUBSCRIBE"}/>
                </div>
            </form>
            <div>
                    <input type="checkbox" /> Sign up for our newsletter    
                </div>
        </div>
        </>
    )
}

export default User;
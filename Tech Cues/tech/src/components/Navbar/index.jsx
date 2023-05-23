import './navbar.scss';


function Navbar() {
    return(
        <>
        <div className='navbar'>
            <div className='navleft'>
                <div className='logo'>
                    <a href="#"><img src="/assets/img/IMAGE1.png" alt="#" /></a>
                </div>
                <input type="checkbox" id='ok' />
                <ul className='ulla'>
                    <label htmlFor="ok" id='x'>X</label>
                    <li className='lii'><a href="#">Categories</a><a href="#"><i class="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">Authors</a></li>
                    <li className='lii'><a href="#">Template</a> <a href="#"><i class="fa-solid fa-chevron-down"></i></a></li>
                </ul>
                <label htmlFor="ok" id='menyu'><i class="fa-solid fa-bars"></i></label>
            </div>
            <div className='navright'>
                <form className='forma' action="#">
                    <div className='inpt'><input type="text"/> <i class="fa-solid fa-search lupa"></i></div>
                    <div className='batt'><button>SUBSCRIBE</button></div>
                </form>
            </div>
        </div>
        </>
    );
    
}

export default Navbar;
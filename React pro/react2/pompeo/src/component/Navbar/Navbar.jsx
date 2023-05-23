import './Navbar.scss';

const Navbar = () => {
    return(
        <>
        <div className='Header'>
            <div className="Navbar">
                <div className="logo">
                    <a href="#"><img src="/assets/img/Pompeo.png" alt="#" /></a>
                </div>
                <div className='navleft'>
                    <input type="checkbox" id='ok' />
                <ul className="ull">
                    <li><label htmlFor="ok" id='x'>X</label></li>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SHOP</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
                <label htmlFor="ok"><i class="fa-solid fa-bars"></i></label>
                <div className='icon'>
                    <p><a href="#"><i class="fa-solid fa-cart-shopping"></i></a> </p>   
                    <p><a href="#"> Cart</a> </p>   
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;
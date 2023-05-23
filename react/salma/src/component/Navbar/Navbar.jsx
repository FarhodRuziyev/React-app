 import '../Navbar/Navbar.scss'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="logo">
            <a href='#'> <h1>Salma</h1></a>
        </div>
        <input id='ok' type="checkbox" />
        <ul className='ulla'>
          <li><label htmlFor="ok" id='x'>X</label></li>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">SHOP</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">JOURNAL</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
           
            <span className="pufak"></span>
          </li>
        </ul>
        <label htmlFor="ok" id='menyu'> |||| </label>
      </div>
    </div>
  );
}

export default Navbar;


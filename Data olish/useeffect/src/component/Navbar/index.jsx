import navscss from "./nav.module.scss";
import Btn from "../BTN/index";


export default function Navbar() {
  return (
    <div className={navscss.nav}>
      <a href="#"> <h1>Zara Brend</h1></a>
      <input type="checkbox" id="ok" />
      <label htmlFor="ok" id="bars"><i class="fa-solid fa-bars"></i></label>
      <label htmlFor="ok" className={navscss.fon}></label>
      <div className={navscss.menyu}>
      <label htmlFor="ok" className={navscss.x}><i class="fa-solid fa-x"></i></label>      
      <Btn  text1="HOME"/>
      <Btn  text1="ABOUT"/> 
      <Btn  text1="CONTACT"/>
      <Btn  text1="PAGES" />
      </div>
    </div>
  );
}
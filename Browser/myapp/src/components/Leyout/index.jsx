import Footer from "../Fouter";
import Nav from "../Navbar";
import Ley from "./ley.module.scss"
import { Outlet } from 'react-router-dom';

export default function Leyout({children}) {
    return(
        <div className={Ley.leyout}>
            <Nav/>
            {children}
            <Outlet/>
            {/* <Footer/> */}
        </div>
    )
}
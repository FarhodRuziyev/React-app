import Fut from './foot.module.scss';
import { NavLink } from "react-router-dom"; 



export default function Footer() {
    return(
        <div className={Fut.footer}>
            <ul>
                <li><h3><NavLink to={'/'}>Home</NavLink></h3></li>
                <li><h3><NavLink to={'/About'}>About</NavLink></h3></li>
                <li><h3><NavLink to={'/Users'}>Users</NavLink></h3></li>
                <li></li>
                <li></li>
            </ul>
            
        </div>
    )
}
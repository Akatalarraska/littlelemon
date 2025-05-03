import { Link } from "react-router-dom";
import littlelemon_logo from "../styles/littlelemon_logo.png"

function Nav(){
    return(
        <nav className="navbar" >
            <img src={littlelemon_logo} alt="Little Lemon Logo" ></img>
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order-online">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
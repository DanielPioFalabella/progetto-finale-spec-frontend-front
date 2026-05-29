import { Link, NavLink } from "react-router-dom"
import { Star } from 'lucide-react';
import "./NavBar.css"
import logo from "../assets/logo.png"

const NavBar = () => {
    return(
        <div className="navbar-section">
            <Link to={"/"}>
                <img src={logo} alt="logo"/>
            </Link>
            
            <div>
                <Link to={"/wishlist"}> <Star fill="currentcolor"/></Link>
            </div>
        </div>
    )
}

export default NavBar
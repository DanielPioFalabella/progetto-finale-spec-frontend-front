import { Link, NavLink } from "react-router-dom"
import { Star } from 'lucide-react';
import "./NavBar.css"

const NavBar = () => {
    return(
        <div className="navbar-section">
            <h2>logo</h2>
            <div>
                <Link to={"/wishlist"}> <Star/></Link>
            </div>
        </div>
    )
}

export default NavBar
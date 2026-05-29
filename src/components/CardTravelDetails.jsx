import { useContext } from "react";
import "./CardTravelDetails.css"
import { Star } from 'lucide-react';
import WishlistContext from "../context/WishlistContext";
import { Link } from "react-router-dom";


const CardTravel = ({ travel }) => {
    const { wishlist, toggleWishlist, isInWishlist } = useContext(WishlistContext)

    return(
        <div className="card-travel">
            <div className="travel-img">
                <img src={travel.image} alt={travel.title} />
            </div>
            <div className="travel-text">
                <Link to={`/travels/${travel.id}`}><h3>{travel.title}</h3></Link>
                <p>{travel.category}</p>
                <p>{travel.description}</p>
                <p>{travel.days}</p>
                <p>{travel.price}</p>
                <p>{travel.rating}</p>
            </div>
            
            <button className=" btn-wishlist" onClick={() => toggleWishlist(travel)}>{isInWishlist(travel) ? <Star fill="currentcolor"/> : <Star />}</button>
        </div>
    )
}

export default CardTravel
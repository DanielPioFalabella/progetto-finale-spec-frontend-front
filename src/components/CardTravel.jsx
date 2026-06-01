import { useContext } from "react";
import "./CardTravel.css"
import { Star } from 'lucide-react';
import WishlistContext from "../context/WishlistContext";
import { Link } from "react-router-dom";
import { memo } from "react";


const CardTravel = memo(({ travel }) => {
    const { wishlist, toggleWishlist, isInWishlist } = useContext(WishlistContext)

    return(
        <div className="card-travel">
            {/* <div className="travel-img">
                <img src={travel.image} alt={travel.title} />
            </div> */}
            <div className="travel-text">
                <div className="text">
                    <Link to={`/travels/${travel.id}`}><h3>{travel.title}</h3></Link>
                    <p>{travel.category}</p>
                </div>
            </div>

            <div className="travel-action">
                    <button className=" btn-wishlist" onClick={() => toggleWishlist(travel)}>{isInWishlist(travel) ? <Star fill="currentcolor"/> : <Star />}</button>
                </div>
        </div>
    )
})

export default CardTravel
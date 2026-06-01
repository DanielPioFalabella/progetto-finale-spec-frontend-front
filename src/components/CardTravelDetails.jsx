import { useContext } from "react";
import "./CardTravelDetails.css"
import { Star } from 'lucide-react';
import WishlistContext from "../context/WishlistContext";
import { Link } from "react-router-dom";
import { memo } from "react";


const CardTravelDetails = memo(({ id, title, category, country, continent, description, days, price, rating, image }) => {
    const { wishlist, toggleWishlist, isInWishlist } = useContext(WishlistContext)

    return (
        <div className="card-travel">
            <div className="travel-img">
                <img src={image} alt={title} />
            </div>
            <div className="travel-text-details">
                <div className="card-text">
                    <Link to={`/travels/${id}`}><h3 className="title">{title}</h3></Link>
                    <p><i>{category}</i></p>
                    <p className="description">{description}</p>
                    <p>notti: {days}</p>
                    <p>prezzo: €{price}</p>
                    <p>rating: {rating} <Star size={12} fill="currentcolor" /></p>
                </div>

                <div className="card-action">
                    <button className=" btn-wishlist" onClick={() => toggleWishlist(
                        { id, title, category, country, continent, description, days, price, rating, image }
                    )}>{isInWishlist(
                        { id, title, category, country, continent, description, days, price, rating, image }
                    ) ? <Star fill="currentcolor" /> : <Star />}</button>
                </div>
            </div>


        </div>
    )
})

export default CardTravelDetails
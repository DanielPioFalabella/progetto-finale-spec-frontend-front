import { useContext } from "react"
import WishlistContext from "../context/WishlistContext"
import { Link } from "react-router-dom"
import "./WishList.css"
import CardTravel from "../components/CardTravel"

const Wishlist = () => {
    const { wishlist } = useContext(WishlistContext)

    if (wishlist.length === 0) {
        return <p>non ci sono viaggi salvati tra i tuoi preferiti</p>
    }

    return (
        <div className="card-travel-section">
            {wishlist.map(travel => (
                <CardTravel key={travel.id} travel={travel} />
            ))}
        </div>
    )
}

export default Wishlist
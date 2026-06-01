import { useContext } from "react"
import WishlistContext from "../context/WishlistContext"
import { Link } from "react-router-dom"
import "./WishList.css"
import CardTravelDetails from "../components/CardTravelDetails"

const Wishlist = () => {
    const { wishlist } = useContext(WishlistContext)

    if (wishlist.length === 0) {
        return <p>non ci sono viaggi salvati tra i tuoi preferiti</p>
    }

    return (
        <div className="card-travel-section">
            {wishlist.map(travel => (
                <CardTravelDetails
                key={travel.id}
                id={travel.id}
                image={travel.image}
                title={travel.title}
                category={travel.category}
                description={travel.description}
                days={travel.days}
                price={travel.price}
                rating={travel.rating} />
            ))}
        </div>
    )
}

export default Wishlist
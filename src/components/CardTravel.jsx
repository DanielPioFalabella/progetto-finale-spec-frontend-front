import "./CardTravel.css"
import { Star } from 'lucide-react';

const CardTravel = ({ title, category, image, description, days, price, rating }) => {
    return(
        <div className="card-travel">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{category}</p>
            <p>{description}</p>
            <p>{days}</p>
            <p>{price}</p>
            <p>{rating}</p>
            <Star />
        </div>
    )
}

export default CardTravel
import "./CardTravel.css"

const CardTravel = ({title, category, image}) => {
    return(
        <div className="card-travel">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{category}</p>
        </div>
    )
}

export default CardTravel
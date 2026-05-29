import { useParams } from "react-router-dom"
import CardTravelDetails from "../components/CardTravelDetails"
import { useEffect, useState } from "react"
import "./TravelDetails.css"

const TravelDetails = () => {
    const { id } = useParams()
    const [travel, setTravel] = useState(null)

    useEffect(() => {
        async function getTravel() {
            try {
                const response = await fetch(`http://localhost:3001/travels/${id}`)
                if (!response.ok) {
                    throw new Error(`località non trovata`)
                }
                const data = await response.json()
                console.log(data)
                setTravel(data.travel)
            } catch (err) {
                console.error(err)
            }
        }

        getTravel()
    }, [id])

    if(!travel) return <p>Loading...</p>

    return (
        <div className="travel-details-container">
            <CardTravelDetails travel={travel}/>
        </div>
    )
}

export default TravelDetails
import { useEffect, useState } from "react"
import CardTravel from "../components/CardTravel"
import "./HomePage.css"

const HomePage = () => {
    const [travels, setTravels] = useState([])
    const [searchTravel, setSearchTravel] = useState("")

    const searchFilter = travels.filter(t => t.title.toLowerCase().includes(searchTravel.toLowerCase()))

    useEffect(() => {
        async function getTravel() {
            try {
                const response = await fetch(`http://localhost:3001/travels`)
                if (!response.ok) {
                    throw new Error(`errore http ${response.status}`)
                }
                const data = await response.json()
                setTravels(data)
            } catch (err) {
                console.error(err)
            }
        }

        getTravel()
    }, [])

    return (
        <div className="home-page">
            <input 
            className="search-bar"
            type="text" 
            placeholder="Cerca la tua prossima destinazione..."
            value={searchTravel}
            onChange={(e) => setSearchTravel(e.target.value)}/>

            <div className="card-travel-section">
                {searchFilter.map(travel => {
                    console.log(travel.image)
                    return (
                        <CardTravel
                            key={travel.id}
                            image={travel.image}
                            title={travel.title}
                            category={travel.category} />
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage
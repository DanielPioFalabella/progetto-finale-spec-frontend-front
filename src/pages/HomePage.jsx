import { useContext, useEffect, useState } from "react"
import CardTravel from "../components/CardTravel"
import ContinentModal from "../components/ContinentModal"
import SortingModal from "../components/SortingModal"
import "./HomePage.css"
import { Link } from "react-router-dom"
import WishlistContext from "../context/WishlistContext"
import CompareModal from "../components/CompareModal"
import { Section } from "lucide-react"
import CardTravelDetails from "../components/CardTravelDetails"

const HomePage = () => {
    const [travels, setTravels] = useState([])
    const [searchTravel, setSearchTravel] = useState("")
    const [showContinentModal, setShowContinentModal] = useState(false)
    const [showSortingModal, setShowSortingModal] = useState(false)
    const [selectedContinent, setSelectedContinent] = useState()
    const [sorting, setSorting] = useState()
    const [showCompareModal, setShowCompareModal] = useState(false)
    const [compareTravels, setCompareTravels] = useState([])

    const searchFilter = travels.filter(travel => {
        const travelText = travel.title
            .toLowerCase()
            .includes(searchTravel.toLowerCase())

        const continentControl =
            !selectedContinent || selectedContinent === "Seleziona tutto" ?
                true : travel.category === selectedContinent

        return travelText && continentControl
    }).sort((a, b) => {
        if (sorting === "Luogo (A - Z)") {
            return a.title.localeCompare(b.title)
        } else if (sorting === "Luogo (Z - A)") {
            return b.title.localeCompare(a.title)
        } else if (sorting === "Continente (A - Z)") {
            return a.category.localeCompare(b.category)
        } else if (sorting === "Continente (Z - A)") {
            return b.category.localeCompare(a.category)
        }

        return 0
    })

    useEffect(() => {
        async function getTravels() {
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

        getTravels()
    }, [])

    const handleCompareTravels = async (travel) => {
        try {
            const response = await fetch(`http://localhost:3001/travels/${travel.id}`)

            if (!response.ok) {
                throw new Error(`HTTP Error ${response.status}`)
            }

            const data = await response.json()
            console.log(data)

            const fullTravel = data.travel

            setCompareTravels(prev => {
            const travelAlreadySelect = prev.find(t => t.id === fullTravel.id)

            if (travelAlreadySelect) {
                return prev.filter(t => t.id !== fullTravel.id)
            } if (prev.length >= 2) {
                return prev
            } else {
                return [...prev, fullTravel]
            }
        })
        } catch (err) {
            console.error(err)
        }
        
    }

    return (
        <div className="home-page">
            <div className="search-bar-section">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Cerca la tua prossima destinazione..."
                    value={searchTravel}
                    onChange={(e) => setSearchTravel(e.target.value)} />

                <button className="btn" onClick={() => setShowContinentModal(true)}>Continente</button>
                <button className="btn" onClick={() => setShowSortingModal(true)}>Ordina</button>
                <button className="btn" onClick={() => setShowCompareModal(true)}>Confronta</button>
                <button className="btn" onClick={() => setCompareTravels([])}>Reset</button>
            </div>

            <ContinentModal
                title="Scegli quale continente vuoi visitare"
                show={showContinentModal}
                onClose={() => setShowContinentModal(false)}
                onSelectCategory={(e) => setSelectedContinent(e.target.value)} />

            <SortingModal
                title="Ordina per"
                show={showSortingModal}
                onClose={() => setShowSortingModal(false)}
                onSelect={(e) => setSorting(e.target.value)} />

            <CompareModal
                travels={travels}
                title="Confronta quale viaggio fa al caso tuo!"
                show={showCompareModal}
                onClose={() => setShowCompareModal(false)}
                onCompare={() => setShowCompareModal(false)}
                onSelect={handleCompareTravels}
            />

            {compareTravels.length === 2 && (
                <div className="compare-travel-section">
                    {compareTravels.map(t => (
                        <div key={t.id} className="travel-details-container">
                            <CardTravelDetails
                                id={t.id}
                                image={t.image}
                                title={t.title}
                                category={t.category}
                                description={t.description}
                                days={t.days}
                                price={t.price}
                                rating={t.rating} />
                        </div>
                    ))}
                </div>
            )
            }

            <div className="card-travel-section">
                {searchFilter.map(travel => {
                    return (
                        <CardTravel
                            key={travel.id}
                            travel={travel} />
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage
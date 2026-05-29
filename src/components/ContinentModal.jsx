import { createPortal } from "react-dom"
import "./ContinentModal.css"

const ContinentModal = ({show, title, onClose, onSelectCategory}) => {
    if(!show) return null

    return createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <h3>{title}</h3>
                <select onChange={onSelectCategory}>
                    <option value="Seleziona tutto">Seleziona tutto</option>
                    <option value="Europa">Europa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Africa">Africa</option>
                </select>
                <button className="btn" onClick={onClose}>Chiudi</button>
            </div>
        </div>,
        document.body
    )
}

export default ContinentModal
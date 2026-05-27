import { createPortal } from "react-dom"

const SortingModal = ({ title, show, onClose, onSelect }) => {
    if (!show) return null

    return createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <h3>{title}</h3>
                <input onChange={onSelect}
                    type="radio"
                    name="sorting"
                    value="Luogo (A - Z)" />
                <label>Luogo (A - Z)</label>

                <input onChange={onSelect}
                    type="radio"
                    name="sorting"
                    value="Luogo (Z - A)" />
                <label>Luogo (Z - A)</label>

                <input onChange={onSelect}
                    type="radio"
                    name="sorting"
                    value="Continente (A - Z)" />
                <label>Continente (A - Z)</label>

                <input onChange={onSelect}
                    type="radio"
                    name="sorting"
                    value="Continente (Z - A)" />
                <label>Continente (Z - A)</label>
                
                <button className="btn" onClick={onClose}>x</button>
            </div>
        </div>,
        document.body
    )
}

export default SortingModal
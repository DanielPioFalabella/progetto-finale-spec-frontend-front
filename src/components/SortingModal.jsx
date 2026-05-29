import { createPortal } from "react-dom"
import "./SortingModal.css"

const SortingModal = ({ title, show, onClose, onSelect }) => {
    if (!show) return null

    return createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <h3>{title}</h3>

                <div className="sorting-option">
                    <input onChange={onSelect}
                        type="radio"
                        name="sorting"
                        value="Luogo (A - Z)" />
                    <label>Luogo (A-Z)</label>
                </div>

                <div className="sorting-option">
                    <input onChange={onSelect}
                        type="radio"
                        name="sorting"
                        value="Luogo (Z - A)" />
                    <label>Luogo (Z-A)</label>
                </div>

                <div className="sorting-option">
                    <input onChange={onSelect}
                        type="radio"
                        name="sorting"
                        value="Continente (A - Z)" />
                    <label>Continente (A-Z)</label>
                </div>

                <div className="sorting-option">
                    <input onChange={onSelect}
                        type="radio"
                        name="sorting"
                        value="Continente (Z - A)" />
                    <label>Continente (Z-A)</label>
                </div>

                <button className="btn btn-sorting" onClick={onClose}>Chiudi</button>
            </div>
        </div>,
        document.body
    )
}

export default SortingModal
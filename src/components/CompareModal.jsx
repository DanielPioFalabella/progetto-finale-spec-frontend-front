import { createPortal } from "react-dom"
import "./CompareModal.css"

const CompareModal = ({ title, show, onClose, onCompare, onSelect, travels }) => {
    if (!show) return null

    return createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <h3>{title}</h3>

                <div className="list-places-to-compare">
                    <ul>
                        {travels.map(t => (
                            <li key={t.id}>
                                <input onChange={() => onSelect(t)}
                                type="checkbox" 
                                value={t.title}/>
                                <label>{t.title}</label>
                            </li>
                        )    
                        )}
                    </ul>
                </div>

                <button className="btn btn-compare" onClick={onCompare}>Confronta</button>
                <button className="btn btn-compare" onClick={onClose}>Chiudi</button>
            </div>
        </div>,
        document.body
    )
}

export default CompareModal
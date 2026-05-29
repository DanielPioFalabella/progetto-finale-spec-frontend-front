import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        const stored = localStorage.getItem("wishlist")

        if (stored) {
            return JSON.parse(stored)
        } else {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }, [wishlist])

    const toggleWishlist = (travel) => {
        setWishlist(prev => {
            const exist = prev.find(t => t.id === travel.id)

            if(exist) {
                return prev.filter(t => t.id !== travel.id)
            } else {
                return [...prev, travel]
            }
        })
    }

    const isInWishlist = (travel) => {return wishlist.some(t => t.id === travel.id)}

    return (
        < WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }} >
            {children}
        </WishlistContext.Provider >
    )
}

export default WishlistContext
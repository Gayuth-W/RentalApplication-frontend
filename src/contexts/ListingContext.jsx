import {createContext, useState, useContext, useEffect} from "react"

const ListingContext = createContext()

export const useListingContext = () => useContext(ListingContext)

export const ListingProvider = ({children}) => {
    const [Favourites, setFavourites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("Favourites")

        if (storedFavs) setFavourites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('Favourites', JSON.stringify(Favourites))
    }, [Favourites])

    const addToFavourites = (Listing) => {
        setFavourites(prev => [...prev, Listing])
    }

    const removeFromFavourites = (ListingId) => {
        setFavourites(prev => prev.filter(Listing => Listing.id !== ListingId))
    }
    
    const isFavorite = (ListingId) => {
        return Favourites.some(Listing => Listing.id === ListingId)
    }

    const value = {
        Favourites,
        addToFavourites,
        removeFromFavourites,
        isFavorite
    }

    return <ListingContext.Provider value={value}>
        {children}
    </ListingContext.Provider>
}
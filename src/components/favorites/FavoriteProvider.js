import React, { useState, createContext } from "react"
import { apiSettings, apiHeaders } from '../Settings'

export const FavoriteContext = createContext()

export const FavoriteProvider = (props) => {

    const [favorites, setFavorites] = useState([])

    const getFavorites = () => {
        return fetch(`${apiSettings.baseUrl}/favorites`, {
            headers: apiHeaders()
        })
            .then(response => response.json())
            .then(setFavorites)
    }

    return (
        <FavoriteContext.Provider value={{ favorites, getFavorites }}>
            {props.children}
        </FavoriteContext.Provider>
    )
}
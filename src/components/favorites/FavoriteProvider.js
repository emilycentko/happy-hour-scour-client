import React, { useState, createContext } from "react"

export const FavoriteContext = createContext()

export const FavoriteProvider = (props) => {

    const [favorites, setFavorites] = useState([])

    const getFavorites = () => {
        return fetch("https://happy-hour-scour.herokuapp.com/favorites", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
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
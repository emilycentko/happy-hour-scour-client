import React, { useState, createContext } from "react"

export const FavoriteContext = createContext()

export const FavoriteProvider = (props) => {

    const [favorites, setFavorites] = useState([])

    const getFavorites = (weekday=null) => {
        let fetchURL = ""
        if (weekday != null) {
            fetchURL = `http://localhost:8000/favorites?day=${weekday}`
        } else {
            fetchURL = `http://localhost:8000/favorites`
        }
        return fetch(fetchURL, {
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
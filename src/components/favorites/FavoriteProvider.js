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

    const addFavorite = (favorite) => {
        return fetch("http://localhost:8000/favorites", {
            method: "POST",    
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "happy_hour": favorite
            })
        })
        .then(getFavorites)
    }

    const removeFavorite = favoriteId => {
        return fetch("http://localhost:8000//favorites", {
            method: "DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            .then(getFavorites)
    }

    return (
        <FavoriteContext.Provider value={{ favorites, getFavorites, addFavorite, removeFavorite }}>
            {props.children}
        </FavoriteContext.Provider>
    )
}
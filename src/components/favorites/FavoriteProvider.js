import React, { useState, createContext } from "react"

export const FavoriteContext = createContext()

export const FavoriteProvider = (props) => {

    const [favorites, setFavorites] = useState([])

    const getFavorites = () => {
        return fetch("http://localhost:8000/favorites", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            .then(response => response.json())
            .then(setFavorites)
    }

    // const addFavorite = (favorite) => {
        
    //     return fetch("http://localhost:8000/favorites", {
    //         method: "POST",    
    //         headers:{
    //             "Authorization": `Token ${localStorage.getItem("hhs_token")}`,
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             "happy_hour": favorite
    //         })
    //     })
    //     .then(getFavorites)
    // }

    // const removeFavorite = happyhourId => {
    //     return fetch(`http://localhost:8000/favorites/${happyhourId}`, {
    //         method: "DELETE",
    //         headers:{
    //             "Authorization": `Token ${localStorage.getItem("hhs_token")}`
    //         }
    //     })
    //         .then(getFavorites)
    // }

    return (
        <FavoriteContext.Provider value={{ favorites, getFavorites }}>
            {props.children}
        </FavoriteContext.Provider>
    )
}
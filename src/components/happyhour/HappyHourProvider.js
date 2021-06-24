import React, { useState, createContext } from "react"

export const HappyHourContext = createContext()

export const HappyHourProvider = (props) => {

    const [happyhours, setHappyHours] = useState([])
    const [searchTerms, setTerms] = useState("")

    const getHappyHours = (weekday=null) => {
        let fetchURL = ""
        if (weekday != null) {
            fetchURL = `https://happy-hour-scour.herokuapp.com/happyhours?day=${weekday}`
        } else {
            fetchURL = `https://happy-hour-scour.herokuapp.com/happyhours`
        }
        return fetch(fetchURL, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            .then(response => response.json())
            .then(setHappyHours)
    }

    const getHappyHourById = (id) => {
        return fetch(`https://happy-hour-scour.herokuapp.com/happyhours/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("hhs_token")}`,
        }})
            .then(response => response.json())
    }

    const getHappyHourSearch = (weekday=null, searchTerms) => {
        let fetchURL = ""
        if (weekday != null) {
            fetchURL = `https://happy-hour-scour.herokuapp.com/happyhours?day=${weekday}&searchTerms=${searchTerms}`
        } else {
            fetchURL = `https://happy-hour-scour.herokuapp.com/happyhours?searchTerms=${searchTerms}`
        }
        return fetch(fetchURL, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            .then(response => response.json())
            .then(setHappyHours)
    }

    const getFilterSpecialType = (weekday=null, typeId) => {
        let fetchURL = ""
        if (weekday != null) {
            fetchURL = `https://happy-hour-scour.herokuapp.com/happyhours?day=${weekday}&special_type=${typeId}`
        } else {
            fetchURL = `https://happy-hour-scour.herokuapp.com/happyhours?special_type=${typeId}`
        }
        return fetch(fetchURL, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            .then(response => response.json())
            .then(setHappyHours)
    }

    const getFilterLocation = (weekday=null, locationId) => {
        let fetchURL = ""
        if (weekday != null) {
            fetchURL = `https://happy-hour-scour.herokuapp.com/happyhours?day=${weekday}&location=${locationId}`
        } else {
            fetchURL = `https://happy-hour-scour.herokuapp.com/happyhours?location=${locationId}`
        }
        return fetch(fetchURL, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            .then(response => response.json())
            .then(setHappyHours)
    }

    const getFilterPatio = (weekday=null) => {
        let fetchURL = ""
        if (weekday != null) {
            fetchURL = `https://happy-hour-scour.herokuapp.com/happyhours?day=${weekday}&patio=true`
        } else {
            fetchURL = `https://happy-hour-scour.herokuapp.com/happyhours?patio=true`
        }
        return fetch(fetchURL, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            .then(response => response.json())
            .then(setHappyHours)
    }

    const getFilterTrivia = (weekday=null) => {
        let fetchURL = ""
        if (weekday != null) {
            fetchURL = `https://happy-hour-scour.herokuapp.com/happyhours?day=${weekday}&trivia=true`
        } else {
            fetchURL = `https://happy-hour-scour.herokuapp.com/happyhours?trivia=true`
        }
        return fetch(fetchURL, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            .then(response => response.json())
            .then(setHappyHours)
    }

    const addFavorite = (favorite) => {
        
        return fetch("https://happy-hour-scour.herokuapp.com/favorites", {
            method: "POST",    
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "happy_hour": favorite
            })
        })
       
    }

    const removeFavorite = happyhourId => {
        return fetch(`https://happy-hour-scour.herokuapp.com/favorites/${happyhourId}`, {
            method: "DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            
    }

    return (
        <HappyHourContext.Provider value={{ happyhours, searchTerms, getHappyHours, getHappyHourById,
            getHappyHourSearch, getFilterSpecialType, getFilterLocation, getFilterPatio, getFilterTrivia,
            setTerms, addFavorite, removeFavorite }}>
            {props.children}
        </HappyHourContext.Provider>
    )
}
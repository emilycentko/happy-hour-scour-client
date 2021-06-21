import React, { useState, createContext } from "react"

export const HappyHourContext = createContext()

export const HappyHourProvider = (props) => {

    const [happyhours, setHappyHours] = useState([])
    const [searchTerms, setTerms] = useState("")
    const [filtered, setFiltered] = useState([])

    const getHappyHours = (weekday=null) => {
        let fetchURL = ""
        if (weekday != null) {
            fetchURL = `http://localhost:8000/happyhours?day=${weekday}`
        } else {
            fetchURL = `http://localhost:8000/happyhours`
        }
        return fetch(fetchURL, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            .then(response => response.json())
            .then(setHappyHours)
    }

    const getHappyHourSearch = (weekday=null, searchTerms) => {
        let fetchURL = ""
        if (weekday != null) {
            fetchURL = `http://localhost:8000/happyhours?day=${weekday}&searchTerms=${searchTerms}`
        } else {
            fetchURL = `http://localhost:8000/happyhours?searchTerms=${searchTerms}`
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
            fetchURL = `http://localhost:8000/happyhours?day=${weekday}&special_type=${typeId}`
        } else {
            fetchURL = `http://localhost:8000/happyhours?special_type=${typeId}`
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
            fetchURL = `http://localhost:8000/happyhours?day=${weekday}&location=${locationId}`
        } else {
            fetchURL = `http://localhost:8000/happyhours?location=${locationId}`
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
            fetchURL = `http://localhost:8000/happyhours?day=${weekday}&patio=true`
        } else {
            fetchURL = `http://localhost:8000/happyhours?patio=true`
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
            fetchURL = `http://localhost:8000/happyhours?day=${weekday}&trivia=true`
        } else {
            fetchURL = `http://localhost:8000/happyhours?trivia=true`
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
       
    }

    const removeFavorite = happyhourId => {
        return fetch(`http://localhost:8000/favorites/${happyhourId}`, {
            method: "DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            
    }

    return (
        <HappyHourContext.Provider value={{ happyhours, searchTerms, getHappyHours, setFiltered,
            getHappyHourSearch, getFilterSpecialType, getFilterLocation, getFilterPatio, getFilterTrivia,
            setTerms, addFavorite, removeFavorite }}>
            {props.children}
        </HappyHourContext.Provider>
    )
}
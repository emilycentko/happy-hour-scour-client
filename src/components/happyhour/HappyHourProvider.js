import React, { useState, createContext } from "react"
import { apiSettings, apiHeaders } from '../Settings'

export const HappyHourContext = createContext()

export const HappyHourProvider = (props) => {

    const [happyhours, setHappyHours] = useState([])
    const [searchTerms, setTerms] = useState("")

    const getHappyHours = (weekday=null) => {
        let fetchURL = ""
        if (weekday != null) {
            fetchURL = `${apiSettings.baseUrl}/happyhours?day=${weekday}`
        } else {
            fetchURL = `${apiSettings.baseUrl}/happyhours`
        }
        return fetch(fetchURL, {
            headers: apiHeaders()
        })
            .then(response => response.json())
            .then(setHappyHours)
    }

    const getHappyHourById = (id) => {
        return fetch(`${apiSettings.baseUrl}/happyhours/${id}`, {
            headers: apiHeaders()
        })
            .then(response => response.json())
    }

    const getHappyHourSearch = (weekday=null, searchTerms) => {
        let fetchURL = ""
        if (weekday != null) {
            fetchURL = `${apiSettings.baseUrl}/happyhours?day=${weekday}&searchTerms=${searchTerms}`
        } else {
            fetchURL = `${apiSettings.baseUrl}/happyhours?searchTerms=${searchTerms}`
        }
        return fetch(fetchURL, {
            headers: apiHeaders()
        })
            .then(response => response.json())
            .then(setHappyHours)
    }

    const getFilterSpecialType = (weekday=null, typeId) => {
        let fetchURL = ""
        if (weekday != null) {
            fetchURL = `${apiSettings.baseUrl}/happyhours?day=${weekday}&special_type=${typeId}`
        } else {
            fetchURL = `${apiSettings.baseUrl}/happyhours?special_type=${typeId}`
        }
        return fetch(fetchURL, {
            headers: apiHeaders()
        })
            .then(response => response.json())
            .then(setHappyHours)
    }

    const getFilterLocation = (weekday=null, locationId) => {
        let fetchURL = ""
        if (weekday != null) {
            fetchURL = `${apiSettings.baseUrl}/happyhours?day=${weekday}&location=${locationId}`
        } else {
            fetchURL = `${apiSettings.baseUrl}/happyhours?location=${locationId}`
        }
        return fetch(fetchURL, {
            headers: apiHeaders()
        })
            .then(response => response.json())
            .then(setHappyHours)
    }

    const getFilterPatio = (weekday=null) => {
        let fetchURL = ""
        if (weekday != null) {
            fetchURL = `${apiSettings.baseUrl}/happyhours?day=${weekday}&patio=true`
        } else {
            fetchURL = `${apiSettings.baseUrl}/happyhours?patio=true`
        }
        return fetch(fetchURL, {
            headers: apiHeaders()
        })
            .then(response => response.json())
            .then(setHappyHours)
    }

    const getFilterTrivia = (weekday=null) => {
        let fetchURL = ""
        if (weekday != null) {
            fetchURL = `${apiSettings.baseUrl}/happyhours?day=${weekday}&trivia=true`
        } else {
            fetchURL = `${apiSettings.baseUrl}/happyhours?trivia=true`
        }
        return fetch(fetchURL, {
            headers: apiHeaders()
        })
            .then(response => response.json())
            .then(setHappyHours)
    }

    const addFavorite = (favorite) => {
        
        return fetch(`${apiSettings.baseUrl}/favorites`, {
            method: "POST",    
            headers: apiHeaders(),
            body: JSON.stringify({
                "happy_hour": favorite
            })
        })
       
    }

    const removeFavorite = happyhourId => {
        return fetch(`${apiSettings.baseUrl}/favorites/${happyhourId}`, {
            method: "DELETE",
            headers: apiHeaders()
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
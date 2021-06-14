import React, { useState, createContext } from "react"

export const HappyHourContext = createContext()

export const HappyHourProvider = (props) => {

    const [happyhours, setHappyHours] = useState([])
    const [searchTerms, setTerms] = useState("")

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

    const getHappyHourSearch = (searchTerms) => {
        return fetch(`http://localhost:8000/happyhours?searchTerms=${searchTerms}`,{
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            .then(response => response.json())
            .then(setHappyHours)
    }

    return (
        <HappyHourContext.Provider value={{ happyhours, searchTerms, getHappyHours, getHappyHourSearch }}>
            {props.children}
        </HappyHourContext.Provider>
    )
}
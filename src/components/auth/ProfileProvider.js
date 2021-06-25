import React, { useState } from "react"
import { apiSettings } from '../Settings'

export const ProfileContext = React.createContext()

export const ProfileProvider = (props) => {
    
    const [profile, setProfile] = useState({})

    const getProfile = () => {
        return fetch(`${apiSettings.baseUrl}/profile`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            .then(response => response.json())
            .then(setProfile)
    }

    return (
        <ProfileContext.Provider value={{ profile, getProfile }}>
            {props.children}
        </ProfileContext.Provider>
    )
}
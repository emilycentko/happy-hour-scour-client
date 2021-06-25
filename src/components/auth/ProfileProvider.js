import React, { useState } from "react"
import { apiSettings,apiHeaders } from '../Settings'

export const ProfileContext = React.createContext()

export const ProfileProvider = (props) => {
    
    const [profile, setProfile] = useState({})

    const getProfile = () => {
        return fetch(`${apiSettings.baseUrl}/profile`, {
            headers: apiHeaders()
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
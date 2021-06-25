import React, { useState, createContext } from "react"
import { apiSettings, apiHeaders } from '../Settings'

export const LocationContext = createContext()

export const LocationProvider = (props) => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return fetch(`${apiSettings.baseUrl}/locations`, {
      headers: apiHeaders()
    })
      .then(response => response.json())
      .then(setLocations)
  };
  
  return (
    <LocationContext.Provider
      value={{ locations, getLocations
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

import React, { useState, createContext } from "react";

export const LocationContext = createContext()

export const LocationProvider = (props) => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return fetch("http://localhost:8000/locations", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("hhs_token")}`,
            "Content-Type": "application/json"
        }
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

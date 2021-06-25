import React, { useState, createContext } from "react"
import { apiSettings } from '../Settings'

export const SpecialTypeContext = createContext()

export const SpecialTypeProvider = (props) => {
  const [specialtypes, setSpecialTypes] = useState([]);

  const getSpecialTypes = () => {
    return fetch(`${apiSettings.baseUrl}/specialtypes`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("hhs_token")}`,
            "Content-Type": "application/json"
        }
    })
      .then(response => response.json())
      .then(setSpecialTypes)
  };
  
  return (
    <SpecialTypeContext.Provider
      value={{ specialtypes, getSpecialTypes
      }}
    >
      {props.children}
    </SpecialTypeContext.Provider>
  );
};

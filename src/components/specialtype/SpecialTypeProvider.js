import React, { useState, createContext } from "react"
import { apiSettings, apiHeaders } from '../Settings'

export const SpecialTypeContext = createContext()

export const SpecialTypeProvider = (props) => {
  const [specialtypes, setSpecialTypes] = useState([]);

  const getSpecialTypes = () => {
    return fetch(`${apiSettings.baseUrl}/specialtypes`, {
      headers: apiHeaders()
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

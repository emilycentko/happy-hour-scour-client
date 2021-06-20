import React, { useContext } from "react"
import { HappyHourContext } from "./HappyHourProvider"

export const HappyHourFilter = () => {
    const { special_types, setFiltered } = useContext(HappyHourContext)

  
    return (
        <>
            <div className="filter">
            {special_types?.map(special_type => {
                return (
                    <input type="checkbox" key={`special_type--${special_type.id}`} value={special_type.id} className="happy_hour__filter"
                        onChange={
                        (changeEvent) => {
                        setFiltered(changeEvent.target.value)
                        }
                }
               
                />
                )})}
            </div>
            
        </>
    )
}
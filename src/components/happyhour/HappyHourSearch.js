import React, { useContext } from "react"
import { HappyHourContext } from "./HappyHourProvider"

export const HappyHourSearch = () => {
    const { setTerms } = useContext(HappyHourContext)

    return (
        <>
            <div className="search">
            <input type="text" className="happy_hour__search"
                onChange={
                    (changeEvent) => {
                        setTerms(changeEvent.target.value)
                    }
                }
                placeholder="Search" />
            </div>
        </>
    )
}
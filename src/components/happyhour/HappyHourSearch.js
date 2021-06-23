import React, { useContext } from "react"
import { HappyHourContext } from "./HappyHourProvider"
import { BsSearch } from "react-icons/bs"

export const HappyHourSearch = () => {
    const { setTerms } = useContext(HappyHourContext)

    return (
        <>
            <div className="search__container">
                <div className="search__child">
                    <input type="text" className="happy_hour__search"
                        onChange={
                            (changeEvent) => {
                                setTerms(changeEvent.target.value)
                            }
                        }
                        placeholder="Search"/>
                    <BsSearch />
                </div>
            </div>
        </>
    )
}
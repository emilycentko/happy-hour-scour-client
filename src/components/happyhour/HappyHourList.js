import React, { useContext, useEffect } from "react"
import { HappyHourContext } from "./HappyHourProvider.js"
import { useHistory } from 'react-router-dom'

export const HappyHourList = (props) => {

    const {happyhours, getHappyHours} = useContext(HappyHourContext)

    const history = useHistory()

    useEffect(() => {
        getHappyHours()
    }, [])

    return (
        <>
            <h1>Happy Hours</h1>
            <article className="all__happy_hours">
                {
                    happyhours.map(happyhour => {
                        return <section key={`happyhour--${happyhour.id}`} className="happyhour">
                            
                        <div className="happyhour__img">{happyhour.image}</div>
                        {/* <h3 className="happyhour__business">{happyhour?.business_id.name}</h3> */}
                        <div className="happyhour__description">{happyhour.description}</div>

                        </section>
                    })
                }
            </article>
        </>
    )
}
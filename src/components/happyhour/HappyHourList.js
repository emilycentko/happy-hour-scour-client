import React, { useContext, useEffect, useState } from "react"
import { HappyHourContext } from "./HappyHourProvider.js"
import { useHistory, useLocation } from 'react-router-dom'
import { HappyHourCard } from "./HappyHourCard.js"
import "./HappyHour.css"
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { FavoriteContext } from "../favorites/FavoriteProvider.js"

export const HappyHourList = () => {

    const {happyhours, getHappyHours, searchTerms, getHappyHourSearch} = useContext(HappyHourContext)
    

    const history = useHistory()

    const day = useLocation()
    const [_, weekday] = day.search.split("=")

    useEffect(() => {
        getHappyHours(weekday)
    }, [weekday])

    useEffect(() => {
        getHappyHourSearch(weekday, searchTerms)
    }, [weekday, searchTerms])

    
    return (
        <>
            <h1 className="happy__hours_title">{weekday ? `${weekday}'s Happy Hours` : "Today's Happy Hours"}</h1>
            <div className="happy_hours">
                <Container>
                    <Row className="justify-content-md-left">
           
                    {
                    happyhours.map(happyhour => {
                        
                        return <HappyHourCard key={happyhour.id} happyhour={happyhour} />

                        })
                    }
            
                    </Row>
                </Container>
            </div>
        </>
    )
}
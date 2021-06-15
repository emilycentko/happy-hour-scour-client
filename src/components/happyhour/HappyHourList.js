import React, { useContext, useEffect, useState } from "react"
import { HappyHourContext } from "./HappyHourProvider.js"
import { useHistory, useLocation } from 'react-router-dom'
import Heart from "react-heart"
import "./HappyHour.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

export const HappyHourList = () => {

    const {happyhours, getHappyHours, searchTerms, getHappyHourSearch} = useContext(HappyHourContext)
    const [active, setActive] = useState(false)

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
                <CardDeck>
                {
                    happyhours.map(happyhour => {
                        return <section key={`happyhour--${happyhour.id}`} className="happyhour">
                        
                        <Card style={{ width: '18rem' }}>
                            <Card.Img src={happyhour.image} />
                            <Card.Body>
                                <Card.Title className="happyhour__business">{happyhour.business.name}</Card.Title>
                                <Card.Text>
                                    <div className="happyhour__description">{happyhour.description}</div>
                                </Card.Text>
                           </Card.Body>
                            <Card.Footer>
                                <Button variant="primary">Reviews</Button>
                           <button className="happyhour__heart" style={{ width: "2rem" }}>
			                    <Heart isActive={active} onClick={() => setActive(!active)}/>
		                    </button>
                            </Card.Footer>
                        </Card>
                    </section>
                    })
                }
                </CardDeck>
            </div>
        </>
    )
}
import React, { useContext, useEffect, useState } from "react"
import { HappyHourContext } from "./HappyHourProvider.js"
import { useHistory, useLocation } from 'react-router-dom'
import Heart from "react-heart"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import { FavoriteContext } from "../favorites/FavoriteProvider.js"
import "./HappyHour.css"

export const HappyHourList = () => {

    const {happyhours, getHappyHours, searchTerms, getHappyHourSearch} = useContext(HappyHourContext)
    const {addFavorite} = useContext(FavoriteContext)
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
                        console.log(happyhour.id)
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
                           <button className="happyhour__heart" 
			                    onClick={() => addFavorite(happyhour.id)}>
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
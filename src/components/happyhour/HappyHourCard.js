
import React, { useContext, useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { HappyHourContext } from "./HappyHourProvider.js"
import { useLocation, useHistory } from 'react-router-dom'
import "./HappyHour.css"

export const HappyHourCard = ({happyhour}) => {

    const {time, addFavorite, removeFavorite, getHappyHours} = useContext(HappyHourContext)

    const day = useLocation()
    const [_, weekday] = day.search.split("=")

    const history = useHistory()


    // Card returns happy hour business, time, and special + add/remove button in a ternary
    // to add to favorites if not in database OR remove if it is. Calls add/removeFavorite function
    // taking in parameter looking for happyhour id to add THAT id to the database OR remove
    // if it already exists. Then getHappyHours sets state so that button changes on click without a 
    // page refresh


    return (
        
        <Card style={{ width: '18rem' }} className="happyhour">
            <Card.Img src={happyhour.image} />
            <Card.Body>
                <Card.Title className="happyhour__business">{happyhour.business.name}</Card.Title>
                    <Card.Text>
                        <div>
                            {happyhour.start_time} p.m. - {happyhour.start_time} p.m.
                        </div>
                        
                        <ul className="happyhour__description">
                            {happyhour.wine !== null ?
                                <li>{happyhour.wine}</li> : ""}
                            {happyhour.beer !== null ?
                                <li>{happyhour.beer}</li> : ""}
                            {happyhour.liquor !== null ?
                                <li>{happyhour.liquor}</li> : ""}
                            {happyhour.food !== null ?
                                <li>{happyhour.food}</li> : ""}
                        </ul>
                    </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary"
                    onClick={() => {
                        history.push(`/reviews?happyhour=${happyhour.id}`)}}>
                    Reviews
                </Button>
                    
                     {happyhour.favorited 
                    
                    ? <button className="happyhour__heart" 
                        onClick={() =>
                            removeFavorite(happyhour.id)
                            .then(() => getHappyHours(weekday))}
                            >
                            Remove
                        </button>
                    : <button className="happyhour__heart" 
                        onClick={() => 
                            addFavorite(happyhour.id)
                            .then(() => getHappyHours(weekday))}
                            >
                            Add
                    </button>
                    }
                    
            </Card.Footer>
        </Card>
        
    )
}
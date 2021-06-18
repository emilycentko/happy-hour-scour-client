
import React, { useContext, useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FavoriteContext } from "../favorites/FavoriteProvider.js"
import Heart from "react-heart"
import "./HappyHour.css"
import { HappyHourContext } from "./HappyHourProvider.js"
import { useLocation } from 'react-router-dom'

export const HappyHourCard = ({happyhour}) => {

    const {addFavorite, removeFavorite, getHappyHours} = useContext(HappyHourContext)
    // const [active, setActive] = useState(false)

    const day = useLocation()
    const [_, weekday] = day.search.split("=")


    return (
        
        <Card style={{ width: '18rem' }} className="happyhour">
            <Card.Img src={happyhour.image} />
            <Card.Body>
                <Card.Title className="happyhour__business">{happyhour.business.name}</Card.Title>
                    <Card.Text>
                                    
                        <div className="happyhour__description">{happyhour.description}</div>
                    </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary">Reviews</Button>
                    
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
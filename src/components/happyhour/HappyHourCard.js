
import React, { useContext, useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { HappyHourContext } from "./HappyHourProvider.js"
import { useLocation, useHistory } from 'react-router-dom'
import "./HappyHour.css"
import { IoFastFoodSharp } from 'react-icons/io5'
import { FaWineGlassAlt } from 'react-icons/fa'
import { IoBeerSharp } from 'react-icons/io5'
import { GiMartini} from "react-icons/gi"
import { FcLike } from "react-icons/fc"
import { AiOutlineHeart } from "react-icons/ai"

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
                        <hr></hr>
                        <div>
                            {happyhour.start_time} - {happyhour.end_time}
                        </div>
                        
                        <div className="happyhour__description">
                            {happyhour.wine !== null ?
                                <p><FaWineGlassAlt /> {happyhour.wine}</p> : ""}
                            {happyhour.beer !== null ?
                                <p><IoBeerSharp /> {happyhour.beer}</p> : ""}
                            {happyhour.liquor !== null ?
                                <p><GiMartini /> {happyhour.liquor}</p> : ""}
                            {happyhour.food !== null ?
                                <p><IoFastFoodSharp /> {happyhour.food}</p> : ""}
                        </div>
                    </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary"
                    onClick={() => {
                        history.push(`/reviews/${happyhour.id}`)}}>
                    Reviews
                </Button>
                    
                     {happyhour.favorited 
                    
                    ? <button className="happyhour__heart" 
                        onClick={() =>
                            removeFavorite(happyhour.id)
                            .then(() => getHappyHours(weekday))}
                            >
                            <AiOutlineHeart />
                        </button>
                    : <button className="happyhour__heart" 
                        
                        onClick={() => 
                            addFavorite(happyhour.id)
                            .then(() => getHappyHours(weekday))}
                            >
                            <FcLike />
                    </button>
                    }
                    
            </Card.Footer>
        </Card>
        
    )
}

import React, { useContext, useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FavoriteContext } from "../favorites/FavoriteProvider.js"
import Heart from "react-heart"
import { HappyHourContext } from "../happyhour/HappyHourProvider.js"
import { useLocation } from 'react-router-dom'

export const FavoriteCard = ({favorite}) => {

    const {addFavorite, removeFavorite} = useContext(HappyHourContext)
    const {favorites, getFavorites} = useContext(FavoriteContext)
    // const [active, setActive] = useState(false)

    const day = useLocation()
    const [_, weekday] = day.search.split("=")


    return (
        
        <Card style={{ width: '18rem' }} className="happyhour">
            <Card.Img src={favorite.happy_hour.image} />
            <Card.Body>
                <Card.Title className="happyhour__business">{favorite.happy_hour.business.name}</Card.Title>
                    <Card.Text>
                                    
                        <div className="happyhour__description"></div>
                    </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary">Reviews</Button>
                    
                     {favorite.happy_hour 
                    
                    ? <button className="happyhour__heart" 
                        onClick={() =>
                            removeFavorite(favorite.happy_hour.id)
                            .then(() => getFavorites())}
                            >
                            Remove
                        </button>
                    : <button className="happyhour__heart" 
                        onClick={() => 
                            addFavorite(favorite.happy_hour.id)
                            .then(() => getFavorites())}
                            >
                            Add
                    </button>
                    }
                    
            </Card.Footer>
        </Card>
        
    )
}
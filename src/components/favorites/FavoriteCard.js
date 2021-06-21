import React, { useContext } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FavoriteContext } from "../favorites/FavoriteProvider.js"
import { HappyHourContext } from "../happyhour/HappyHourProvider.js"

export const FavoriteCard = ({favorite}) => {

    const {removeFavorite} = useContext(HappyHourContext)
    const {getFavorites} = useContext(FavoriteContext)

    // Card returns favorited happy hour business, time, and special + remove button 
    // to remove from /favorites page and database. Calls removeFavorite function
    // taking in parameter looking for that favorite.happy_hour.id to remove.
    // Then getFavorites sets state so that button changes on click without a 
    // page refresh

    return (
        
        <Card style={{ width: '18rem' }} className="happyhour">
            <Card.Img src={favorite.happy_hour.image} />
            <Card.Body>
                <Card.Title className="happyhour__business">{favorite.happy_hour.business.name}</Card.Title>
                    <Card.Text>
                        <div>{favorite.happy_hour.start_time} p.m. - {favorite.happy_hour.end_time} p.m.</div>           
                        
                        <ul className="happyhour__description">
                            {favorite.happy_hour.wine !== null ?
                                <li>{favorite.happy_hour.wine}</li> : ""}
                            {favorite.happy_hour.beer !== null ?
                                <li>{favorite.happy_hour.beer}</li> : ""}
                            {favorite.happy_hour.liquor !== null ?
                                <li>{favorite.happy_hour.liquor}</li> : ""}
                            {favorite.happy_hour.food !== null ?
                                <li>{favorite.happy_hour.food}</li> : ""}
                        </ul>
                        
                    </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary">Reviews</Button>
                     
                    <button className="happyhour__heart" 
                        onClick={() =>
                            removeFavorite(favorite.happy_hour.id)
                            .then(() => getFavorites())}
                            >
                            Remove
                    </button>
                    
            </Card.Footer>
        </Card>
        
    )
}
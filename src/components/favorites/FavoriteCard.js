import React, { useContext } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FavoriteContext } from "../favorites/FavoriteProvider.js"
import { HappyHourContext } from "../happyhour/HappyHourProvider.js"

export const FavoriteCard = ({favorite}) => {

    const {addFavorite, removeFavorite} = useContext(HappyHourContext)
    const {getFavorites} = useContext(FavoriteContext)

    return (
        
        <Card style={{ width: '18rem' }} className="happyhour">
            <Card.Img src={favorite.happy_hour.image} />
            <Card.Body>
                <Card.Title className="happyhour__business">{favorite.happy_hour.business.name}</Card.Title>
                    <Card.Text>
                                    
                        
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
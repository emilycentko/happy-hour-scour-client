import React, { useContext } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FavoriteContext } from "../favorites/FavoriteProvider.js"
import { HappyHourContext } from "../happyhour/HappyHourProvider.js"
import { IoFastFoodSharp } from 'react-icons/io5'
import { FaWineGlassAlt } from 'react-icons/fa'
import { IoBeerSharp } from 'react-icons/io5'
import { GiMartini} from "react-icons/gi"
import { FcDislike } from "react-icons/fc"

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
                        <hr></hr>
                        <div>{favorite.happy_hour.weekday.day}s</div>          
                        <div>{favorite.happy_hour.start_time} - {favorite.happy_hour.end_time}</div> 
                        <hr></hr>
                        
                        <div className="happyhour__description">
                            {favorite.happy_hour.wine !== null ?
                                <p><FaWineGlassAlt /> {favorite.happy_hour.wine}</p> : ""}
                            {favorite.happy_hour.beer !== null ?
                                <p><IoBeerSharp /> {favorite.happy_hour.beer}</p> : ""}
                            {favorite.happy_hour.liquor !== null ?
                                <p><GiMartini /> {favorite.happy_hour.liquor}</p> : ""}
                            {favorite.happy_hour.food !== null ?
                                <p><IoFastFoodSharp /> {favorite.happy_hour.food}</p> : ""}
                        </div>
                        
                    </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary">Reviews</Button>
                     
                    <button className="happyhour__heart" 
                        onClick={() =>
                            removeFavorite(favorite.happy_hour.id)
                            .then(() => getFavorites())}
                            >
                            <FcDislike />
                    </button>
                    
            </Card.Footer>
        </Card>
        
    )
}

import React, { useContext, useState } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FavoriteContext } from "../favorites/FavoriteProvider.js"
import Heart from "react-heart"
import "./HappyHour.css"

export const HappyHourCard = ({happyhour}) => {

    const {addFavorite} = useContext(FavoriteContext)
    const [active, setActive] = useState(false)

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
                <button className="happyhour__heart" style={{ width: "2rem" }}
			        onClick={() => 
                        addFavorite(happyhour.id)}>
                    <Heart isActive={active} onClick={() => setActive(!active)}></Heart>
		        </button>
            </Card.Footer>
        </Card>
        
    )
}
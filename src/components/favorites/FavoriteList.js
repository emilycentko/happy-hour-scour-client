import React, { useContext, useEffect, useState } from "react"
import { FavoriteContext } from "./FavoriteProvider.js"
import { useHistory } from 'react-router-dom'
import Heart from "react-heart"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

export const FavoriteList = (props) => {

    const {favorites, getFavorites} = useContext(FavoriteContext)
    const [active, setActive] = useState(false)

    const history = useHistory()

    useEffect(() => {
        getFavorites()
        
    }, [])

    return (
        <>
            <h1 className="happy__hours_title">Favorite Happy Hours</h1>
            <div className="all__happy_hours">
                <CardDeck>
                {
                    favorites.map(favorite => {
                        return <section key={`happyhour--${favorite.happy_hour.id}`} className="happyhour">
                        
                        <Card style={{ width: '18rem' }}>
                            <Card.Img src={favorite.happy_hour.image} />
                            <Card.Body>
                                <Card.Title className="happyhour__business">{favorite.happy_hour.business.name}</Card.Title>
                                <Card.Text>
                                    <div className="happyhour__description">{favorite.happy_hour.description}</div>
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
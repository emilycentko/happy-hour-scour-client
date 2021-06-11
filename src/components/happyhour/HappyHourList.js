import React, { useContext, useEffect, useState } from "react"
import { HappyHourContext } from "./HappyHourProvider.js"
import { useHistory } from 'react-router-dom'
import Heart from "react-heart"
import "./HappyHour.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import {Image} from 'cloudinary-react';

export const HappyHourList = (props) => {

    const {happyhours, getHappyHours} = useContext(HappyHourContext)
    const [active, setActive] = useState(false)

    const history = useHistory()

    useEffect(() => {
        getHappyHours()
    }, [])

    return (
        <>
            <h1 className="happy__hours_title">Today's Happy Hours</h1>
            <div className="all__happy_hours">
                <CardDeck>
                {
                    happyhours.map(happyhour => {
                        return <section key={`happyhour--${happyhour.id}`} className="happyhour">
                        
                        <Card style={{ width: '18rem' }}>
                            <Image publicId={happyhour.image} cloud_name="dt8cdbrjs" width="50" crop="scale" />
                            <Card.Body>
                                <Card.Title className="happyhour__business">{happyhour.business.name}</Card.Title>
                                <Card.Text>
                                    <div className="happyhour__description">{happyhour.description}</div>
                                </Card.Text>
                           </Card.Body>
                            <Card.Footer>
                                <Button variant="primary">Reviews</Button>
                           <div className="happyhour__heart" style={{ width: "2rem" }}>
			                    <Heart isActive={active} onClick={() => setActive(!active)}/>
		                    </div>
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
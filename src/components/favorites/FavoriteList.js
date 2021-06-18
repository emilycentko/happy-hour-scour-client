import React, { useContext, useEffect, useState } from "react"
import { FavoriteContext } from "./FavoriteProvider.js"
import { useHistory, useLocation } from 'react-router-dom'
import Heart from "react-heart"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { FavoriteCard } from "./FavoriteCard"

export const FavoriteList = () => {

    const {favorites, getFavorites} = useContext(FavoriteContext)
    // const [active, setActive] = useState(false)

    const history = useHistory()

    // const day = useLocation()
    // const [_, weekday] = day.search.split("=")

    useEffect(() => {
        getFavorites()
    }, [])

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    let now = new Date()

    let today = now.getDay(now)


    return (
        <>
            <h1 className="happy__hours_title">Favorites</h1>
            <div className="happy_hours">
                <Container>
                    <h3>Today</h3>
                    <Row className="justify-content-md-left">
                    {
                    favorites.filter(favorite => favorite.happy_hour.weekday.day.includes(days[today])).map(favorite => {
                        return <FavoriteCard key={favorite.id} favorite={favorite} />
                        })
                    }
                    </Row>

                    <h3>Monday</h3>
                    <Row className="justify-content-md-left">
                    {
                    favorites.filter(favorite => favorite.happy_hour.weekday.day.includes('Monday')).map(favorite => {
                        return <FavoriteCard key={favorite.id} favorite={favorite} />
                        })
                    }
                    </Row>
                    
                    <h3>Tuesday</h3>
                    <Row className="justify-content-md-left">
                    {
                    favorites.filter(favorite => favorite.happy_hour.weekday.day.includes('Tuesday')).map(favorite => {
                        return <FavoriteCard key={favorite.id} favorite={favorite} />
                        })
                    }
                    </Row>
                    
                    <h3>Wednesday</h3>
                    <Row className="justify-content-md-left">
                    {
                    favorites.filter(favorite => favorite.happy_hour.weekday.day.includes('Wednesday')).map(favorite => {
                        return <FavoriteCard key={favorite.id} favorite={favorite} />
                        })
                    }
                    </Row>
                    
                    <h3>Thursday</h3>
                    <Row className="justify-content-md-left">
                    {
                    favorites.filter(favorite => favorite.happy_hour.weekday.day.includes('Thursday')).map(favorite => {
                        return <FavoriteCard key={favorite.id} favorite={favorite} />
                        })
                    }
                    </Row>
                    
                    <h3>Friday</h3>
                    <Row className="justify-content-md-left">
                    {
                    favorites.filter(favorite => favorite.happy_hour.weekday.day.includes('Friday')).map(favorite => {
                        return <FavoriteCard key={favorite.id} favorite={favorite} />
                        })
                    }
                    </Row>
                    
                    <h3>Saturday</h3>
                    <Row className="justify-content-md-left">
                    {
                    favorites.filter(favorite => favorite.happy_hour.weekday.day.includes('Saturday')).map(favorite => {
                        return <FavoriteCard key={favorite.id} favorite={favorite} />
                        })
                    }
                    </Row>

                    <h3>Sunday</h3>
                    <Row className="justify-content-md-left">
                    {
                    favorites.filter(favorite => favorite.happy_hour.weekday.day.includes('Sunday')).map(favorite => {
                        return <FavoriteCard key={favorite.id} favorite={favorite} />
                        })
                    }

                    </Row>
                </Container>
            </div>
        </>
    )
}

//     return (
//         <>
//             {/* <h1 className="happy__hours_title">{weekday ? `Your Favorite Happy Hours on ${weekday}` : "Your Favorite Happy Hours Today"}</h1> */}
//             <h1>Favorites</h1>
//             <div className="all__happy_hours">
//                 <CardDeck>
//                 {
//                     favorites.map(favorite => {
//                         return <section key={`happyhour--${favorite.happy_hour.id}`} className="happyhour">
                        
//                         <Card style={{ width: '18rem' }}>
//                             <Card.Img src={favorite.happy_hour.image} />
//                             <Card.Body>
//                                 <Card.Title className="happyhour__business">{favorite.happy_hour.business.name}</Card.Title>
//                                 <Card.Text>
//                                     <div className="happyhour__description">{favorite.happy_hour.description}</div>
//                                 </Card.Text>
//                            </Card.Body>
//                             <Card.Footer>
//                                 <Button variant="primary">Reviews</Button>
//                            {/* <button className="happyhour__heart" style={{ width: "2rem" }}>
// 			                    <Heart isActive={active} onClick={() => setActive(!active)}/>
// 		                    </button> */}
//                             </Card.Footer>
//                         </Card>
//                     </section>
//                     })
//                 }
//                 </CardDeck>
//             </div>
//         </>
//     )
// }
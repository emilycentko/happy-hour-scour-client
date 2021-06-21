import React, { useContext, useEffect, useState } from "react"
import { FavoriteContext } from "./FavoriteProvider.js"
import { useHistory } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { FavoriteCard } from "./FavoriteCard"

export const FavoriteList = () => {

    const {favorites, getFavorites} = useContext(FavoriteContext)

    const history = useHistory()

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
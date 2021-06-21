import React, { useContext, useEffect, useState } from "react"
import { HappyHourContext } from "./HappyHourProvider.js"
import { useLocation } from 'react-router-dom'
import { HappyHourCard } from "./HappyHourCard.js"
import "./HappyHour.css"
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { SpecialTypeContext } from "../specialtype/SpecialTypeProvider.js"
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import { LocationContext } from "../location/LocationProvider.js"

export const HappyHourList = () => {

    const {happyhours, happyhour, getHappyHours, searchTerms, getHappyHourSearch, getFilterSpecialType, getFilterLocation, getFilterPatio} = useContext(HappyHourContext)
    const {specialtypes, getSpecialTypes} = useContext(SpecialTypeContext)
    const {locations, getLocations} = useContext(LocationContext)
    const [open, setOpen] = useState(false)
    

    const day = useLocation()
    const [_, weekday] = day.search.split("=")

    useEffect(() => {
        getHappyHours(weekday)
        getSpecialTypes()
        getLocations()
    }, [weekday])

    useEffect(() => {
        getHappyHourSearch(weekday, searchTerms)
    }, [weekday, searchTerms])


      return (
          <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="filter-collapse"
                aria-expanded={open}
            >
                Filter
            </Button>
            <Collapse in={open}>
                <div id="filter-collapse">
           

                <h5>Filter by special type</h5>

                {
                    specialtypes.map(specialtype => {
                    
                    return <>
                    <div key={specialtype.id}>
                        <input type="checkbox" value={specialtype.id} id={specialtype.type}
                        onChange={(event) => {
                            event.target.checked === true
                            ? getFilterSpecialType(weekday, event.target.value)
                            : getHappyHours(weekday)}}
                        /> {specialtype.type}
                    </div>
                    </>
                    })
                }

                <h5>Filter by location</h5>

                {
                    locations.map(location => {
                    
                    return <>
                    <div key={location.id}>
                        <input type="checkbox" value={location.id} id={location.name}
                        onChange={(event) => {
                            event.target.checked === true
                            ? getFilterLocation(weekday, event.target.value)
                            : getHappyHours(weekday)}}
                        /> {location.name}
                    </div>
                    </>
                    })
                }

                <h5>Filter by patio</h5>

                    
                    <div key={true}>
                        <input type="checkbox" value={true} id={true}
                        onChange={(event) => {
                            event.target.checked === true
                            ? getFilterPatio(weekday, event.target.value)
                            : getHappyHours(weekday)}}
                        /> Patio
                    </div>

                
                </div>
            </Collapse>

            <h1 className="happy__hours_title">{weekday ? `${weekday}'s Happy Hours` : "Today's Happy Hours"}</h1>
            <div className="happy_hours">
                <Container>
                    <Row className="justify-content-md-left">
           
                    {
                        happyhours.map(happyhour => {
                        
                        return <HappyHourCard key={happyhour.id} happyhour={happyhour} specialtypes={specialtypes} locations={locations}/>

                        })
                    }
            
                    </Row>
                </Container>
            </div>
        </>
    )
}
import React, { useContext, useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import { HappyHourContext } from "./HappyHourProvider.js"
import { HappyHourCard } from "./HappyHourCard.js"
import { SpecialTypeContext } from "../specialtype/SpecialTypeProvider.js"
import { LocationContext } from "../location/LocationProvider.js"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import "./HappyHour.css"

export const HappyHourList = () => {

    const {happyhours, getHappyHours, searchTerms, getHappyHourSearch, getFilterSpecialType, getFilterLocation, getFilterPatio, getFilterTrivia} = useContext(HappyHourContext)
    const {specialtypes, getSpecialTypes} = useContext(SpecialTypeContext)
    const {locations, getLocations} = useContext(LocationContext)
    const [open, setOpen] = useState(false)
    

    // useLocation to grab the param 'weekday' from url and set = day property, split on = to grab that day
    // ie '/happyhours?day=Tuesday' will split on the = in url to grab 'Tuesday'

    const day = useLocation()
    const [_, weekday] = day.search.split("=")

    // Look for weekday if there is one in argument, if it is not null

    useEffect(() => {
        getHappyHours(weekday)
        getSpecialTypes()
        getLocations()
    }, [weekday])

    useEffect(() => {
        getHappyHourSearch(weekday, searchTerms)
    }, [weekday, searchTerms])


    // Return collapsed filter options + happy hour list for today by default or weekday if not null in params.
    // Filter options map over special types and locations to see all options and grab that value and id to render
    // all matching results, taking in weekday (if not null) and the value as arguments, if checked. Then getHappyHours to
    // re-set state without refresh when unchecked.

    // Last two filters are boolean fields looking for a 'true' value to only display results = True

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
                <div id="filter-collapse" className="filters">

                    <div className="filter__special_type">
            

                    <h5>Offerings</h5>

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

                    </div>
                    <div className="filter__location">

                    <h5>Location</h5>
                    <div className="locations">
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
                    </div>
                </div>
                <div className="filter__features">

                    <h5>Features</h5>

                        <div key={true}>
                            <input type="checkbox" value={true} id={true}
                            onChange={(event) => {
                                event.target.checked === true
                                ? getFilterPatio(weekday, event.target.value)
                                : getHappyHours(weekday)}}
                            /> Patio
                        </div>
                    
                        
                        <div key={true}>
                            <input type="checkbox" value={true} id={true}
                            onChange={(event) => {
                                event.target.checked === true
                                ? getFilterTrivia(weekday, event.target.value)
                                : getHappyHours(weekday)}}
                            /> Trivia
                        </div>

                    </div>
                </div>
            </Collapse>

            <h1 className="happy__hours_title">{weekday ? `${weekday}'s Happy Hours` : "Today's Happy Hours"}</h1>
            <div className="happy_hours">
                <Container>
                    <Row className="justify-content-md-left">
           
                    {
                        happyhours.map(happyhour => {
                        
                        return <HappyHourCard key={happyhour.id} happyhour={happyhour}/>

                        })
                    }
            
                    </Row>
                </Container>
            </div>
        </>
    )
}
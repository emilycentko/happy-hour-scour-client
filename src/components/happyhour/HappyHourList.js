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

export const HappyHourList = () => {

    const {happyhours, getHappyHours, searchTerms, getHappyHourSearch} = useContext(HappyHourContext)
    const {specialtypes, getSpecialTypes} = useContext(SpecialTypeContext)
    const [filteredHappyHours, setHappyHours] = useState([])
    const [typeSelected, setTypeSelected] = useState("")
    const [open, setOpen] = useState(false)
    

    const day = useLocation()
    const [_, weekday] = day.search.split("=")

    useEffect(() => {
        getHappyHours(weekday)
        .then(getSpecialTypes)
    }, [weekday])

    useEffect(() => {
        setHappyHours(happyhours)
      }, [happyhours])

    useEffect(() => {
        getHappyHourSearch(weekday, searchTerms)
    }, [weekday, searchTerms])

    const filterSpecials = (event) => {
        const filteredSpecialsByType = happyhours.filter(happyhour => happyhour.special_type.id === parseInt(event.target.value))
        setHappyHours(filteredSpecialsByType)
        setTypeSelected(parseInt(event.target.value))
      }

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
                    <input type="checkbox" value={specialtype.id} checked={typeSelected === specialtype.id}
                        onClick={filterSpecials}
                        /> {specialtype.type}
                    </>
                })
            }

                <div>
                <button onClick={() => {
                    setHappyHours(happyhours)
                    setTypeSelected("")
                }}>Clear Filter</button>
                </div>
                </div>
            </Collapse>

            <h1 className="happy__hours_title">{weekday ? `${weekday}'s Happy Hours` : "Today's Happy Hours"}</h1>
            <div className="happy_hours">
                <Container>
                    <Row className="justify-content-md-left">
           
                    {
                        filteredHappyHours.map(happyhour => {
                        
                        return <HappyHourCard key={happyhour.id} happyhour={happyhour} specialtypes={specialtypes}/>

                        })
                    }
            
                    </Row>
                </Container>
            </div>
        </>
    )
}
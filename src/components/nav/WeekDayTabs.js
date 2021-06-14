import { Link, useHistory } from "react-router-dom"
import React, { useState } from "react"
import "./NavBar.css"
import Nav from 'react-bootstrap/Nav'

export const WeekDayTabs = () => {

    return (

        <div>
            <Nav className="weekday__tabs" justify variant="tabs" defaultActiveKey="/happyhours">
                <Nav.Item>
                    <Nav.Link href="/happyhours?day=Monday">Monday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/happyhours?day=Tuesday">Tuesday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/happyhours?day=Wednesday">Wednesday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/happyhours?day=Thursday">Thursday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/happyhours?day=Friday">Friday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/happyhours?day=Saturday">Saturday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/happyhours?day=Sunday">Sunday</Nav.Link>
                </Nav.Item>
                
            </Nav> 
        </div>
       
    )
}
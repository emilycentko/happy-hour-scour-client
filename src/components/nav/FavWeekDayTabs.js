import { Link, useHistory } from "react-router-dom"
import React, { useState } from "react"
import "./NavBar.css"
import Nav from 'react-bootstrap/Nav'

export const FavWeekDayTabs = () => {

    return (

        <div>
            <Nav className="weekday__tabs" justify variant="tabs" defaultActiveKey="/favorites">
                <Nav.Item>
                    <Nav.Link href="/favorites?day=Monday">Monday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/favorites?day=Tuesday">Tuesday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/favorites?day=Wednesday">Wednesday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/favorites?day=Thursday">Thursday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/favorites?day=Friday">Friday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/favorites?day=Saturday">Saturday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/favorites?day=Sunday">Sunday</Nav.Link>
                </Nav.Item>
                
            </Nav> 
        </div>
       
    )
}
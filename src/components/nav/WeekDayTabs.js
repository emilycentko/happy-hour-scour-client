import { Link, useHistory } from "react-router-dom"
import React, { useState } from "react"
import "./NavBar.css"
import Nav from 'react-bootstrap/Nav'

export const WeekDayTabs = () => {

    return (

        <div>
            <Nav className="weekday__tabs" justify variant="tabs" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link href="/monday">Monday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/tuesday">Tuesday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/wednesday">Wednesday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/thursday">Thursday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/friday">Friday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/saturday">Saturday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/sunday">Sunday</Nav.Link>
                </Nav.Item>
                
            </Nav> 
        </div>
       
    )
}
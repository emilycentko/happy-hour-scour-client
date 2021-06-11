import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { WeekDayTabs } from "./nav/WeekDayTabs"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import 'bootstrap/dist/css/bootstrap.min.css'

export const HappyHourScour = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("hhs_token")) {
                return <>
                    <Route render={NavBar} />
                    <Route render={props => <ApplicationViews {...props} />} />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
    </>
)

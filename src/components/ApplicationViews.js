import React from "react"
import { Route } from "react-router-dom"
import { HappyHourProvider } from "./happyhour/HappyHourProvider"
import { HappyHourList } from "./happyhour/HappyHourList"
import { WeekDayTabs } from "./nav/WeekDayTabs"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <WeekDayTabs />
            <HappyHourProvider>
                <Route exact path="/happyhours">
                    <HappyHourList />
                </Route>
                
            </HappyHourProvider>
        </main>
    </>
}
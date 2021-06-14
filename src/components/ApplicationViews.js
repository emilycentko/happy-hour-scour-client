import React from "react"
import { Route } from "react-router-dom"
import { HappyHourProvider } from "./happyhour/HappyHourProvider"
import { HappyHourList } from "./happyhour/HappyHourList"
import { WeekDayTabs } from "./nav/WeekDayTabs"
import { ProfileProvider } from "./auth/ProfileProvider"
import { Profile } from "./auth/Profile"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <HappyHourProvider>
                <Route path="/happyhours">
                    <WeekDayTabs />
                </Route>
                <Route exact path="/happyhours">
                    <HappyHourList />
                </Route>
            </HappyHourProvider>
            <ProfileProvider>
                <Route exact path="/profile">
                    <Profile />
                </Route>
            </ProfileProvider>
        </main>
    </>
}
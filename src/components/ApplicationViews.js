import React from "react"
import { Route } from "react-router-dom"
import { HappyHourProvider } from "./happyhour/HappyHourProvider"
import { HappyHourList } from "./happyhour/HappyHourList"
import { HappyHourSearch } from "./happyhour/HappyHourSearch"
import { WeekDayTabs } from "./nav/WeekDayTabs"
import { FavWeekDayTabs } from "./nav/FavWeekDayTabs"
import { ProfileProvider } from "./auth/ProfileProvider"
import { Profile } from "./auth/Profile"
import { FavoriteProvider } from "./favorites/FavoriteProvider"
import { FavoriteList } from "./favorites/FavoriteList"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <HappyHourProvider>
                <Route path="/happyhours">
                    <WeekDayTabs />
                    <HappyHourSearch />
                    <HappyHourList />
                </Route>
                <FavoriteProvider>
                    <Route path="/favorites">
                        <FavWeekDayTabs />
                        <FavoriteList />
                    </Route>
                </FavoriteProvider>
            </HappyHourProvider>
            <ProfileProvider>
                <Route exact path="/profile">
                    <Profile />
                </Route>
            </ProfileProvider>
        </main>
    </>
}
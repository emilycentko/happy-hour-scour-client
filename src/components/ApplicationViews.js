import React from "react"
import { Route } from "react-router-dom"
import { HappyHourProvider } from "./happyhour/HappyHourProvider"
import { HappyHourList } from "./happyhour/HappyHourList"
import { HappyHourSearch } from "./happyhour/HappyHourSearch"
import { WeekDayTabs } from "./nav/WeekDayTabs"
import { ProfileProvider } from "./auth/ProfileProvider"
import { Profile } from "./auth/Profile"
import { FavoriteProvider } from "./favorites/FavoriteProvider"
import { FavoriteList } from "./favorites/FavoriteList"
import { SpecialTypeProvider } from "./specialtype/SpecialTypeProvider"
import { LocationProvider } from "./location/LocationProvider"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <HappyHourProvider>
                <SpecialTypeProvider>
                <LocationProvider>
                <FavoriteProvider>
                    <Route path="/happyhours">
                        <HappyHourSearch />
                        <WeekDayTabs />
                        
                        <HappyHourList />
                    </Route>
                        <Route path="/favorites">
                        
                        <FavoriteList />
                    </Route>
                </FavoriteProvider>
                </LocationProvider>
                </SpecialTypeProvider>
            </HappyHourProvider>
            <ProfileProvider>
                <Route exact path="/profile">
                    <Profile />
                </Route>
            </ProfileProvider>
        </main>
    </>
}
import React, { useEffect, useContext } from "react"
import { ProfileContext } from "./ProfileProvider.js"
import "./Profile.css"

export const Profile = () => {
    const { profile, getProfile } = useContext(ProfileContext)

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <article className="profile">
            <header>
                <h1>Your Profile</h1>
            </header>
            <section className="profile__info">
                
                <h3 className="profile__name">
                    Welcome, {profile.customer && profile.customer.user.first_name} {profile.customer && profile.customer.user.last_name}
                </h3>
                <div className="profile__username">Username: {profile.customer && profile.customer.user.username}</div>
                <div className="profile__bio">About you: {profile.customer && profile.customer.bio}</div>
            </section>
        </article>
    )
}
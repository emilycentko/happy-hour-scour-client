import React, { useContext, useEffect, useState } from "react"
import { ReviewContext } from "./ReviewProvider.js"
import { useHistory, useLocation } from 'react-router-dom'
import { HappyHourContext } from "../happyhour/HappyHourProvider.js"
import StarRatings from 'react-star-ratings'

export const ReviewList = () => {
    const { reviews, getReviewsByHappyHour } = useContext(ReviewContext)
    const {getHappyHourById} = useContext(HappyHourContext)

    const history = useHistory()

    
    const happyhour = useLocation()
    const [_, happyHourId] = happyhour.search.split("=")
    
    useEffect(() => {
        getHappyHourById(happyHourId)
        getReviewsByHappyHour(happyHourId)
    }, [])

    
    return (
        <>
            <button className="add__review_button"
                onClick={() => {
                    history.push({ pathname: `/reviews?happyhour=${happyHourId}/new` })
                }}
                >Add Review
            </button>
            <article className="reviews">
                {
                    reviews.map(review => {
                        
                            
                        return <section key={`review--${review.id}`} className="review">
                        <h3 className="name">{review.happy_hour.business.name}</h3>
                        <div className="review__author">{review.customer.user.first_name} {review.customer.user.last_name}</div>
                        <div className="user__rating">{review.rating}</div>
                        <div className="user__review">{review.review}</div>
                        
                            <button className="edit__review_button"
                                onClick={() => {history.push(`/reviews?happyhour=${happyHourId}/edit`)}}
                                >Edit Review
                            </button>
                           

                        </section>
                    })
                }
            </article>
        </>
    )
}
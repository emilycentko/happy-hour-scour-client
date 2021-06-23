import React, { useContext, useEffect, useState } from "react"
import { ReviewContext } from "./ReviewProvider.js"
import { useHistory, useParams } from 'react-router-dom'
import { HappyHourContext } from "../happyhour/HappyHourProvider.js"
import { ReviewForm } from "./ReviewForm"
import { Review } from "./Review.js"
import ReactStars from "react-rating-stars-component";

export const ReviewList = () => {
    const { review, reviews, getReviewsByHappyHour, deleteReview, getReviewById } = useContext(ReviewContext)
    const {getHappyHourById} = useContext(HappyHourContext)

    const {happyhour} = useParams()
    
    
    useEffect(() => {
        
        getHappyHourById(happyhour)
        getReviewsByHappyHour(happyhour)
    }, [])
    
    return (
        <>
           
            <ReviewForm />
            <article className="reviews">
                {
                    reviews.map(review => {

                    return <Review key={review.id} review={review}/>

                     })
                }
            </article>
        </>
    )
}
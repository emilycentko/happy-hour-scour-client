import React, { useContext, useEffect, useState } from "react"
import { ReviewContext } from "./ReviewProvider.js"
import { useHistory, useParams } from 'react-router-dom'
import { HappyHourContext } from "../happyhour/HappyHourProvider.js"
import { ReviewForm } from "./ReviewForm"
import ReactStars from "react-rating-stars-component";

export const ReviewList = () => {
    const { reviews, getReviewsByHappyHour, deleteReview, getReviewById } = useContext(ReviewContext)
    const {getHappyHourById} = useContext(HappyHourContext)

    const history = useHistory()

    const {happyhour} = useParams()
    
    // const happyhour = useLocation()
    // const [_, happyHourId] = happyhour.search.split("=")
    // console.log(happyHourId)
    
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
                        
                            
                        return <section key={`review--${review.id}`} className="review">
                        <h3 className="name">{review.happy_hour.business.name}</h3>
                        <div className="review__author">{review.customer.user.first_name} {review.customer.user.last_name}</div>
                        <div className="user__rating">
                        <ReactStars
                            count={5}
                            value={review.rating}
                            size={24}
                            isHalf={false}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                            edit={false}
                        />
                        </div>
                        <div className="user__review">{review.review}</div>
                        
                            <button className="edit__review_button"
                                onClick={() => {getReviewById(review.id)}}
                                >Edit Review
                            </button>
                            <button onClick={() => {
                                deleteReview(review.id)}}>Delete</button>
                           

                        </section>
                    })
                }
            </article>
        </>
    )
}
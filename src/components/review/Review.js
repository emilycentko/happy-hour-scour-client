import React, { useContext, useEffect, useState } from "react"
import { ReviewContext } from "./ReviewProvider.js"
import { HappyHourContext } from "../happyhour/HappyHourProvider.js"
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"
import Button from 'react-bootstrap/Button'

export const Review = ({review}) => {
    const { deleteReview, getReviewById, getReviewsByHappyHour } = useContext(ReviewContext)
    // const {getHappyHourById} = useContext(HappyHourContext)

    const {happyhour} = useParams()

    return (
        <>                  
            <section className="review">
                
                <div className="review__author">{review?.customer && review?.customer.user.first_name} {review?.customer && review?.customer.user.last_name}</div>
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
                        
                    <Button onClick={() => {
                        deleteReview(review.id)
                        .then(() => {getReviewsByHappyHour(happyhour)})}}>Delete
                    </Button>
                           
            </section>
                    
        </>
    )
}
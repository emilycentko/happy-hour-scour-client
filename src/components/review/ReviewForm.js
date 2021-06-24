import React, { useContext, useState, useEffect } from "react"
import { HappyHourContext } from "../happyhour/HappyHourProvider.js"
import { ReviewContext } from './ReviewProvider'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"
import Button from 'react-bootstrap/Button'


export const ReviewForm = () => {
    const { reviews, addReview, editReview, getReviewsByHappyHour } = useContext(ReviewContext)

    const {happyhour} = useParams()
    console.log(happyhour)
    
    
    const [review, setReview] = useState({
        review: "",
        rating: 0,
        happyHourId: happyhour,
        customerId: 0
    })

    const handleInputChange = (event) => {
        const newReview = {...review}
        newReview[event.target.id] = event.target.value
        setReview(newReview)
    }

    const handleRatingChange = (event) =>{
        const newReview = {...review}
        newReview.rating = event
        setReview(newReview)
    }

    return (
        <form className="reviewForm">
            
            <h2 className="reviewForm__review">{review.id ? "Edit Review" : "New Review"}</h2>
            <fieldset>
                <ReactStars
                    count={5}
                    value={review.rating}
                    id="rating"
                    onChange={handleRatingChange}
                    size={24}
                    isHalf={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                />
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="review">Review</label>
                    <input type="text" id="review" required autoFocus className="form-control"
                        value={review.review}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>

            
            <Button type="submit"
                
                onClick={evt => {
                    
                    evt.preventDefault()
                    addReview({
                        rating: review.rating,
                        review: review.review,
                        happyHourId: review.happyHourId,
                        customerId: review.customerId
                    })
                    .then(() => {getReviewsByHappyHour(happyhour)})
                }}>
                Add Review
                </Button>
        </form>
    )
}
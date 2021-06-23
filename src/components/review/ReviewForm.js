import React, { useContext, useState, useEffect } from "react"
import { HappyHourContext } from "../happyhour/HappyHourProvider.js"
import { ReviewContext } from './ReviewProvider'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"


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

    const handleSubmit = () => {

        if (review.id){
            editReview({
                id: review.id,
                rating: review.rating,
                review: review.review,
                happyHourId: review.happyHourId
            })
            .then(getReviewsByHappyHour(happyhour))
        } else {
            
            addReview({
                rating: review.rating,
                review: review.review,
                happyHourId: review.happyHourId,
                customerId: review.customerId
            })
            .then(getReviewsByHappyHour(happyhour))
        }
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

            
            <button type="submit"
                
                onClick={evt => {
                    
                    evt.preventDefault()
                    handleSubmit()
                }}>
                {review.id ? "Save" : "Add Review"}
                </button>
        </form>
    )
}
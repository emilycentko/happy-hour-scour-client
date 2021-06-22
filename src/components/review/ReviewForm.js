import React, { useContext, useState, useEffect } from "react"
import { HappyHourContext } from "../happyhour/HappyHourProvider.js"
import { ReviewContext } from './ReviewProvider'
import { useHistory, useLocation } from 'react-router-dom'
import StarRatings from 'react-star-ratings'


export const ReviewForm = () => {
    const { addReview } = useContext(ReviewContext)
    const { getHappyHourById} = useContext(HappyHourContext)

    const history = useHistory()

     const happyhour = useLocation()
    const [_, happyHourId] = happyhour.search.split("=")

    const [review, setReview] = useState({
        review: "",
        rating: 0,
        happyHourId: 0,
        customerId: 0
    })

    useEffect(() => {
        getHappyHourById(happyHourId)
            
    }, [])

    const handleInputChange = e => {
        const newReview = {...review}
        newReview.text = e.target.value
        setReview(newReview)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addReview(review)
        history.push(`/reviews?happyhours=${happyHourId}`)
    }

    return (
        <form className="reviewForm">
            
            <h2 className="reviewForm__review">Leave a Review</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="review">Review</label>
                    <input type="text" id="review" required autoFocus className="form-control"
                        value={review.review}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <StarRatings
                    rating={review.rating}
                    starRatedColor="blue"
                    changeRating={handleInputChange}
                    numberOfStars={10}
                    name='rating'
                    />
            </fieldset>
            <input type="submit" onClick={handleSubmit}></input>
        </form>
    )
}
import React, { useContext, useState, useEffect } from "react"
import { HappyHourContext } from "../happyhour/HappyHourProvider.js"
import { ReviewContext } from './ReviewProvider'
import { useHistory, useParams } from 'react-router-dom'
import StarRatings from 'react-star-ratings'


export const ReviewForm = () => {
    const { addReview } = useContext(ReviewContext)
    const { getHappyHourById}
    const [happyhour, setHappyHour] = useState({})

    const history = useHistory()

    const { happyHourId } = useParams()

    const [review, setReview] = useState({
        review: "",
        rating: 0,
        happyHourId: 0,
        customerId: 0
    })

    useEffect(() => {
        getHappyHourById(happyHourId)
            .then(setHappyHour)
    }, [])

    const handleInputChange = e => {
        const newReview = {...review}
        newReview.text = e.target.value
        setReview(newReview)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addReview(review)
        history.push(`/happyhours/${happyHourId}`)
    }

    return (
        <form className="reviewForm">
            
            <h2 className="reviewForm__title">Leave a Review</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Review</label>
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
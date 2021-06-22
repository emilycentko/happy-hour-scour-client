import React, { useContext, useState, useEffect } from "react"
import { HappyHourContext } from "../happyhour/HappyHourProvider.js"
import { ReviewContext } from './ReviewProvider'
import { useHistory, useParams } from 'react-router-dom'
import StarRatings from 'react-star-ratings'


export const ReviewForm = () => {
    const { reviews, addReview, getReviewsByHappyHour } = useContext(ReviewContext)
    const { getHappyHourById} = useContext(HappyHourContext)

    const history = useHistory()

    const happyHourId = useParams()
    
    
    const [review, setReview] = useState({
        review: "",
        rating: 0,
        happy_hour: happyHourId,
    })
    
    const [isLoading, setIsLoading] = useState(true)
    
    // useEffect(() => {
    //     if (happyHourId) {
    //         console.log(happyHourId)
    //         getHappyHourById(happyHourId)
    //         .then(setReview)
    //             setIsLoading(false)
            
    //         } else {
    //     setIsLoading(false)
    //     }
    // }, [])

    useEffect(()=>{
        getHappyHourById(happyHourId).then(setReview)
    },[reviews])

    useEffect(()=>{
        getReviewsByHappyHour(happyHourId)
    },[])

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
        setIsLoading(true);
            
        addReview({
            review: review.review,
            rating: review.rating,
            happyHourId: review.happyHourId,
            customerId: review.customerId
            })
            .then(() => history.push(`/reviews?happyhours=${happyHourId}`))
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
                    changeRating={handleRatingChange}
                    numberOfStars={10}
                    name='rating'
                    />
            </fieldset>
            <input type="submit" onClick={handleSubmit}></input>
        </form>
    )
}
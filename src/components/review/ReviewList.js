import React, { useContext, useEffect, useState } from "react"
import { ReviewContext } from "./ReviewProvider.js"
import { useHistory, useParams } from 'react-router-dom'

export const ReviewList = () => {
    const { reviews, getReviews, getReviewsByHappyHour } = useContext(ReviewContext)

    const [review, setReviews] = useState({})

    const history = useHistory()

    const {happyHourId} = useParams()

    useEffect(() => {
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
                        return <section key={`review--${review?.happy_hour_id}`} className="review">
                            
                        <h3 className="name">{review.happy_hour.business.name}</h3>
                        <div className="user__rating">{review.rating}</div>
                        <div className="user__review">{review.review}}</div>
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
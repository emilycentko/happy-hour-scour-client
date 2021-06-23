import React, { createContext, useState } from 'react'

export const ReviewContext = createContext()

export const ReviewProvider = props => {
    const [ reviews, setReviews ] = useState([])

    const getReviews = () => {
        return fetch(`http://localhost:8000/reviews`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            .then(response => response.json())
            .then(setReviews)
    }

    const getReviewsByHappyHour = (happyHourId) => {
        console.log(happyHourId)
        return fetch(`http://localhost:8000/reviews?happyhour=${happyHourId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
        .then(response => response.json())
        .then(setReviews)
    }

    const getReviewById = (id) => {
        return fetch(`http://localhost:8000/reviews/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            .then(response => response.json())
    }


    const addReview = review => {
        return fetch(`http://localhost:8000/reviews`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
        .then(getReviewById)
    }

    const editReview = review => {
        return fetch(`http://localhost:8000/reviews/${review.id}`, { 
            method: "PUT",
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(getReviewById)
    }

    const deleteReview = (reviewId) => {
        return fetch(`http://localhost:8000/reviews/${reviewId}`,{
            method:"DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
        .then(getReviewsByHappyHour)
    }

    return (
        <ReviewContext.Provider value={{
            reviews, getReviews, getReviewById, addReview, getReviewsByHappyHour, editReview, deleteReview
        }}>
            {props.children}
        </ReviewContext.Provider>
    )
}
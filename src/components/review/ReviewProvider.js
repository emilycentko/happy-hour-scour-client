import React, { createContext, useState } from 'react'

export const ReviewContext = createContext()

export const ReviewProvider = props => {
    const [ reviews, setReviews ] = useState([])

    const getReviews = () => {
        return fetch(`https://happy-hour-scour.herokuapp.com/reviews`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            .then(response => response.json())
            .then(setReviews)
    }

    const getReviewsByHappyHour = (happyHourId) => {
        console.log(happyHourId)
        return fetch(`https://happy-hour-scour.herokuapp.com/reviews?happyhour=${happyHourId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
        .then(response => response.json())
        .then(setReviews)
    }

    const getReviewById = (id) => {
        return fetch(`https://happy-hour-scour.herokuapp.com/reviews/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            .then(response => response.json())
    }


    const addReview = review => {
        return fetch(`https://happy-hour-scour.herokuapp.com/reviews`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
        
    }

    const editReview = review => {
        return fetch(`https://happy-hour-scour.herokuapp.com/reviews/${review.id}`, { 
            method: "PUT",
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
            
    }

    const deleteReview = (reviewId) => {
        return fetch(`https://happy-hour-scour.herokuapp.com/reviews/${reviewId}`,{
            method:"DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
       
    }

    return (
        <ReviewContext.Provider value={{
            reviews, getReviews, getReviewById, addReview, getReviewsByHappyHour, editReview, deleteReview
        }}>
            {props.children}
        </ReviewContext.Provider>
    )
}
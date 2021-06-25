import React, { createContext, useState } from 'react'
import { apiSettings } from '../Settings'

export const ReviewContext = createContext()

export const ReviewProvider = props => {
    const [ reviews, setReviews ] = useState([])

    const getReviews = () => {
        return fetch(`${apiSettings.baseUrl}/reviews`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            .then(response => response.json())
            .then(setReviews)
    }

    const getReviewsByHappyHour = (happyHourId) => {
        console.log(happyHourId)
        return fetch(`${apiSettings.baseUrl}/reviews?happyhour=${happyHourId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
        .then(response => response.json())
        .then(setReviews)
    }

    const getReviewById = (id) => {
        return fetch(`${apiSettings.baseUrl}/reviews/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`
            }
        })
            .then(response => response.json())
    }


    const addReview = review => {
        return fetch(`${apiSettings.baseUrl}/reviews`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("hhs_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
        
    }

    const deleteReview = (reviewId) => {
        return fetch(`${apiSettings.baseUrl}/reviews/${reviewId}`,{
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
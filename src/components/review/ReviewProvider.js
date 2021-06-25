import React, { createContext, useState } from 'react'
import { apiSettings, apiHeaders } from '../Settings'

export const ReviewContext = createContext()

export const ReviewProvider = props => {
    const [ reviews, setReviews ] = useState([])

    const getReviews = () => {
        return fetch(`${apiSettings.baseUrl}/reviews`, {
            headers: apiHeaders()
        })
            .then(response => response.json())
            .then(setReviews)
    }

    const getReviewsByHappyHour = (happyHourId) => {
        console.log(happyHourId)
        return fetch(`${apiSettings.baseUrl}/reviews?happyhour=${happyHourId}`, {
            headers: apiHeaders()
        })
        .then(response => response.json())
        .then(setReviews)
    }

    const getReviewById = (id) => {
        return fetch(`${apiSettings.baseUrl}/reviews/${id}`, {
            headers: apiHeaders()
        })
            .then(response => response.json())
    }


    const addReview = review => {
        return fetch(`${apiSettings.baseUrl}/reviews`, {
            method: "POST",
            headers: apiHeaders(),
            body: JSON.stringify(review)
        })
        
    }

    const deleteReview = (reviewId) => {
        return fetch(`${apiSettings.baseUrl}/reviews/${reviewId}`,{
            method:"DELETE",
            headers: apiHeaders()
        })
       
    }

    return (
        <ReviewContext.Provider value={{
            reviews, getReviews, getReviewById, addReview, getReviewsByHappyHour, deleteReview
        }}>
            {props.children}
        </ReviewContext.Provider>
    )
}
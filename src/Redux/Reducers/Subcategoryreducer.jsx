import React from 'react'
import {CREATE_SUBCATEGORY_RED,GET_SUBCATEGORY_RED,UPDATE_SUBCATEGORY_RED,DELETE_SUBCATEGORY_RED} from "../Constant"
export default function Subcategoryreducer(state = [], action) {
    switch (action.type) {
        case CREATE_SUBCATEGORY_RED:
            return [...state, action.payload]
        case GET_SUBCATEGORY_RED:
            return action.payload
        case UPDATE_SUBCATEGORY_RED:
            return state.map((x) =>
                x.id === action.payload.id ? { ...x, ...action.payload } : x
            );
        case DELETE_SUBCATEGORY_RED:
            return state.filter((x) => x.id !== action.payload.id)

        default:
            return state
    }

}
import React from 'react'
import {CREATE_PROPERTY_RED,GET_PROPERTY_RED,UPDATE_PROPERTY_RED,DELETE_PROPERTY_RED} from "../Constant"
export default function Propertyreducer(state = [], action) {
    switch (action.type) {
        case CREATE_PROPERTY_RED:
            return [...state, action.payload]
        case GET_PROPERTY_RED:
            return action.payload.data
        case UPDATE_PROPERTY_RED:
            return state.map((x) =>
                x._id === action.payload._id ? { ...x, ...action.payload } : x
            );
        case DELETE_PROPERTY_RED:
            return state.filter((x) => x._id !== action.payload._id)

        default:
            return state
    }

}
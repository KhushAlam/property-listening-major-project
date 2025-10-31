import React from 'react'
import {CREATE_MAINCATEGORY_RED,GET_MAINCATEGORY_RED,UPDATE_MAINCATEGORY_RED,DELETE_MAINCATEGORY_RED} from "../Constant"
export default function Maincategoryreducer(state = [], action) {
    switch (action.type) {
        case CREATE_MAINCATEGORY_RED:
            return [...state, action.payload]
        case GET_MAINCATEGORY_RED:
            return action.payload.data
        case UPDATE_MAINCATEGORY_RED:
            return state.map((x) =>
                x._id === action.payload._id ? { ...x, ...action.payload } : x
            );
        case DELETE_MAINCATEGORY_RED:
            return state.filter((x) => x._id !== action.payload._id)

        default:
            return state
    }

}
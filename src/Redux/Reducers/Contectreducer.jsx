import React from 'react'
import {CREATE_CONTACT_RED,GET_CONTACT_RED,UPDATE_CONTACT_RED,DELETE_CONTACT_RED} from "../Constant"
export default function Contactreducer(state = [], action) {
    switch (action.type) {
        case CREATE_CONTACT_RED:
            return [...state, action.payload]
        case GET_CONTACT_RED:
            return action.payload
        case UPDATE_CONTACT_RED:
            return state.map((x) =>
                x.id === action.payload.id ? { ...x, ...action.payload } : x
            );
        case DELETE_CONTACT_RED:
            return state.filter((x) => x.id !== action.payload.id)

        default:
            return state
    }

}
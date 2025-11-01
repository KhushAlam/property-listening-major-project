import React from 'react'
import {CREATE_USERS_RED,GET_USERS_RED,UPDATE_USERS_RED,DELETE_USERS_RED} from "../Constant"
export default function Usersreducer(state = [], action) {
    switch (action.type) {
        case CREATE_USERS_RED:
            return [...state, action.payload]
        case GET_USERS_RED:
            return action.payload
        case UPDATE_USERS_RED:
            return state.map((x) =>
                x.id === action.payload.id ? { ...x, ...action.payload } : x
            );
        case DELETE_USERS_RED:
            return state.filter((x) => x.id !== action.payload.id)

        default:
            return state
    }

}
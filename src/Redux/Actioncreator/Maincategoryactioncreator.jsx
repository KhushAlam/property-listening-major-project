import React from 'react';
import { CREATE_MAINCATEGORY,GET_MAINCATEGORY,UPDATE_MAINCATEGORY,DELETE_MAINCATEGORY } from '../Constant';

export  function Createmaincategory(data) {
    return {
        type: CREATE_MAINCATEGORY,
        payload: data,
    }
}

export  function Getmaincategory() {
    return {
        type: GET_MAINCATEGORY,
    }
}

export  function Updatemaincategory(data) {
    return {
        type: UPDATE_MAINCATEGORY,
        payload: data
    }
}

export  function Deletemaincategory(data) {
    return {
        type: DELETE_MAINCATEGORY,
        payload: data
    }
}
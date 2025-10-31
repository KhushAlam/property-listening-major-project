import React from 'react';
import { CREATE_SUBCATEGORY,GET_SUBCATEGORY,UPDATE_SUBCATEGORY,DELETE_SUBCATEGORY } from '../Constant';

export  function Createsubcategory(data) {
    return {
        type: CREATE_SUBCATEGORY,
        payload: data,
    }
}

export  function Getsubcategory() {
    return {
        type: GET_SUBCATEGORY,
    }
}

export  function Updatesubcategory(data) {
    return {
        type: UPDATE_SUBCATEGORY,
        payload: data
    }
}

export  function Deletesubcategory(data) {
    return {
        type: DELETE_SUBCATEGORY,
        payload: data
    }
}
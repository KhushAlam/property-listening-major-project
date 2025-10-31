import React from 'react';
import { CREATE_TESTIMONIAL,GET_TESTIMONIAL,UPDATE_TESTIMONIAL,DELETE_TESTIMONIAL } from '../Constant';

export  function Createtestimonial(data) {
    return {
        type: CREATE_TESTIMONIAL,
        payload: data,
    }
}

export  function Gettestimonial() {
    return {
        type: GET_TESTIMONIAL,
    }
}

export  function Updatetestimonial(data) {
    return {
        type: UPDATE_TESTIMONIAL,
        payload: data
    }
}

export  function Deletetestimonial(data) {
    return {
        type: DELETE_TESTIMONIAL,
        payload: data
    }
}
import React from 'react';
import { CREATE_CHECKOUT,GET_CHECKOUT,UPDATE_CHECKOUT,DELETE_CHECKOUT } from '../Constant';

export  function Createcheckout(data) {
    return {
        type: CREATE_CHECKOUT,
        payload: data,
    }
}

export  function Getcheckout() {
    return {
        type: GET_CHECKOUT,
    }
}

export  function Updatecheckout(data) {
    return {
        type: UPDATE_CHECKOUT,
        payload: data
    }
}

export  function Deletecheckout(data) {
    return {
        type: DELETE_CHECKOUT,
        payload: data
    }
}
import React from 'react';
import { CREATE_PROPERTY,GET_PROPERTY,UPDATE_PROPERTY,DELETE_PROPERTY } from '../Constant';

export  function Createproperty(data) {
    return {
        type: CREATE_PROPERTY,
        payload: data,
    }
}

export  function Getproperty() {
    return {
        type: GET_PROPERTY,
    }
}

export  function Updateproperty(data) {
    return {
        type: UPDATE_PROPERTY,
        payload: data
    }
}

export  function Deleteproperty(data) {
    return {
        type: DELETE_PROPERTY,
        payload: data
    }
}
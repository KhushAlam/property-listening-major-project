import React from "react"
export async function createRecord(collection, payload) {
    let responce = fetch(`${process.env.REACT_APP_BACKEND_SERVER}${collection}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })
    return (await responce).json()
}
export async function getRecord(collection) {
    let responce = fetch(`${process.env.REACT_APP_BACKEND_SERVER}${collection}`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        },
    })
    return (await responce).json()
}
export async function updateRecord(collection, data) {
    let id = data.id
    let responce = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}${collection}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    return responce.json()
}


export async function deleteRecord(collection, id) {
    let responce = fetch(`${process.env.REACT_APP_BACKEND_SERVER}${collection}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
    return (await responce).json()
}
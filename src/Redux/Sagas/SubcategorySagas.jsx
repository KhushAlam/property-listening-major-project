import { call, put, takeEvery } from "redux-saga/effects"
import { CREATE_SUBCATEGORY, CREATE_SUBCATEGORY_RED,DELETE_SUBCATEGORY, DELETE_SUBCATEGORY_RED,GET_SUBCATEGORY,GET_SUBCATEGORY_RED,UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_RED, } from "../Constant"
import {  createRecord, deleteRecord, getRecord,  updateRecord } from "./Service/Index"


function* createSaga(action) {
    let responce = yield call(createRecord,"subcategory",action.payload)
    yield put({ type: CREATE_SUBCATEGORY_RED, payload: responce })

}

function* getSaga(action) {
    let responce = yield call(getRecord,"subcategory",action.payload)
    yield put({ type: GET_SUBCATEGORY_RED, payload: responce })
}
function* updateSaga(action) {
    let responce = yield call(updateRecord,"subcategory", action.payload)
    yield put({ type: UPDATE_SUBCATEGORY_RED, payload: action.payload })
}
function* deleteSaga(action) {
    let responce = yield call(deleteRecord,"subcategory",action.payload.id)
    yield put({ type: DELETE_SUBCATEGORY_RED, payload: action.payload })
}
export default function* contactSagas() {
    yield takeEvery(CREATE_SUBCATEGORY, createSaga)
    yield takeEvery(GET_SUBCATEGORY, getSaga)
    yield takeEvery(UPDATE_SUBCATEGORY, updateSaga)
    yield takeEvery(DELETE_SUBCATEGORY, deleteSaga)

}

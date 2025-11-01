import { call, put, takeEvery } from "redux-saga/effects"
import { CREATE_USERS, CREATE_USERS_RED,DELETE_USERS, DELETE_USERS_RED,GET_USERS,GET_USERS_RED,UPDATE_USERS, UPDATE_USERS_RED, } from "../Constant"
import { createRecord, deleteRecord, getRecord, updatemultipleRecord, updateRecord } from "./Service/Index"


function* createSaga(action) {
    let responce = yield call(createRecord,"users",action.payload)
    yield put({ type: CREATE_USERS_RED, payload: responce })

}

function* getSaga(action) {
    let responce = yield call(getRecord,"users",action.payload)
    yield put({ type: GET_USERS_RED, payload: responce })
}
function* updateSaga(action) {
    let responce = yield updateRecord("users", action.payload)
    yield put({ type: UPDATE_USERS_RED, payload: action.payload })

}
function* deleteSaga(action) {
    let id = action.payload.id;
    let responce = yield call(deleteRecord,"user",id)
    yield put({ type: DELETE_USERS_RED, payload: action.payload })
}
export default function* contactSagas() {
    yield takeEvery(CREATE_USERS, createSaga)
    yield takeEvery(GET_USERS, getSaga)
    yield takeEvery(UPDATE_USERS, updateSaga)
    yield takeEvery(DELETE_USERS, deleteSaga)

}

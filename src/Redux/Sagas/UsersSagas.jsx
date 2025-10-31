import { call, put, takeEvery } from "redux-saga/effects"
import { CREATE_USERS, CREATE_USERS_RED,DELETE_USERS, DELETE_USERS_RED,GET_USERS,GET_USERS_RED,UPDATE_USERS, UPDATE_USERS_RED, } from "../Constent"
import { createmultipleRecord, createRecord, deleteRecord, getRecord, updatemultipleRecord, updateRecord } from "./Service/Index"


function* createSaga(action) {
    let responce = yield call(createRecord,"contact/create",action.payload)
    yield put({ type: CREATE_USERS_RED, payload: responce })

    // let responce = yield createmultipleRecord("contactus")
    // yield put({ type: CREATE_USERS_RED, payload: responce })
}

function* getSaga(action) {
    let responce = yield call(getRecord,"contact/get",action.payload)
    yield put({ type: GET_USERS_RED, payload: responce })
}
function* updateSaga(action) {
    let responce = yield updateRecord("contactus", action.payload)
    yield put({ type: UPDATE_USERS_RED, payload: action.payload })

    // let responce = yield updatemultipleRecord("contactus", action.payload)
    // yield put({ type: UPDATE_USERS_RED, payload: action.payload })
}
function* deleteSaga(action) {
    let id = action.payload._id;
    let responce = yield call(deleteRecord,"contact",id)
    yield put({ type: DELETE_USERS_RED, payload: action.payload })
}
export default function* contactSagas() {
    yield takeEvery(CREATE_USERS, createSaga)
    yield takeEvery(GET_USERS, getSaga)
    yield takeEvery(UPDATE_USERS, updateSaga)
    yield takeEvery(DELETE_USERS, deleteSaga)

}

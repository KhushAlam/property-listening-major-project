import { call, put, takeEvery } from "redux-saga/effects"
import { CREATE_PROPERTY, CREATE_PROPERTY_RED,DELETE_PROPERTY, DELETE_PROPERTY_RED,GET_PROPERTY,GET_PROPERTY_RED,UPDATE_PROPERTY, UPDATE_PROPERTY_RED, } from "../Constent"
import { createmultipleRecord, createRecord, deleteRecord, getRecord, updatemultipleRecord, updateRecord } from "../Service/Index"


function* createSaga(action) {
    let responce = yield call(createRecord,"property/create",action.payload)
    yield put({ type: CREATE_PROPERTY_RED, payload: responce })

    // let responce = yield createmultipleRecord("contactus")
    // yield put({ type: CREATE_PROPERTY_RED, payload: responce })
}

function* getSaga(action) {
    let responce = yield call(getRecord,"property/get",action.payload)
    yield put({ type: GET_PROPERTY_RED, payload: responce })
}
function* updateSaga(action) {
    let responce = yield updateRecord("property", action.payload)
    yield put({ type: UPDATE_PROPERTY_RED, payload: action.payload })

    // let responce = yield updatemultipleRecord("contactus", action.payload)
    // yield put({ type: UPDATE_PROPERTY_RED, payload: action.payload })
}
function* deleteSaga(action) {
    let id = action.payload._id;
    let responce = yield call(deleteRecord,"property",id)
    yield put({ type: DELETE_PROPERTY_RED, payload: action.payload })
}
export default function* contactSagas() {
    yield takeEvery(CREATE_PROPERTY, createSaga)
    yield takeEvery(GET_PROPERTY, getSaga)
    yield takeEvery(UPDATE_PROPERTY, updateSaga)
    yield takeEvery(DELETE_PROPERTY, deleteSaga)

}

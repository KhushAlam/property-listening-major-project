import { call, put, takeEvery } from "redux-saga/effects"
import { CREATE_TESTIMONIAL, CREATE_TESTIMONIAL_RED,DELETE_TESTIMONIAL, DELETE_TESTIMONIAL_RED,GET_TESTIMONIAL,GET_TESTIMONIAL_RED,UPDATE_TESTIMONIAL, UPDATE_TESTIMONIAL_RED, } from "../Constant"
import { createmultipleRecord, createRecord, deleteRecord, getRecord, updatemultipleRecord, updateRecord } from "./Service/Index"


function* createSaga(action) {
    let responce = yield call(createRecord,"contact/create",action.payload)
    yield put({ type: CREATE_TESTIMONIAL_RED, payload: responce })

    // let responce = yield createmultipleRecord("contactus")
    // yield put({ type: CREATE_TESTIMONIAL_RED, payload: responce })
}

function* getSaga(action) {
    let responce = yield call(getRecord,"contact/get",action.payload)
    yield put({ type: GET_TESTIMONIAL_RED, payload: responce })
}
function* updateSaga(action) {
    let responce = yield updateRecord("contactus", action.payload)
    yield put({ type: UPDATE_TESTIMONIAL_RED, payload: action.payload })

    // let responce = yield updatemultipleRecord("contactus", action.payload)
    // yield put({ type: UPDATE_TESTIMONIAL_RED, payload: action.payload })
}
function* deleteSaga(action) {
    let id = action.payload._id;
    let responce = yield call(deleteRecord,"contact",id)
    yield put({ type: DELETE_TESTIMONIAL_RED, payload: action.payload })
}
export default function* contactSagas() {
    yield takeEvery(CREATE_TESTIMONIAL, createSaga)
    yield takeEvery(GET_TESTIMONIAL, getSaga)
    yield takeEvery(UPDATE_TESTIMONIAL, updateSaga)
    yield takeEvery(DELETE_TESTIMONIAL, deleteSaga)

}

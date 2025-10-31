import { call, put, takeEvery } from "redux-saga/effects"
import { CREATE_SUBCATEGORY, CREATE_SUBCATEGORY_RED,DELETE_SUBCATEGORY, DELETE_SUBCATEGORY_RED,GET_SUBCATEGORY,GET_SUBCATEGORY_RED,UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_RED, } from "../Constant"
import { createmultipleRecord, createRecord, deleteRecord, getRecord, updatemultipleRecord, updateRecord } from "./Service/Index"


function* createSaga(action) {
    let responce = yield call(createRecord,"contact/create",action.payload)
    yield put({ type: CREATE_SUBCATEGORY_RED, payload: responce })

    // let responce = yield createmultipleRecord("contactus")
    // yield put({ type: CREATE_SUBCATEGORY_RED, payload: responce })
}

function* getSaga(action) {
    let responce = yield call(getRecord,"contact/get",action.payload)
    yield put({ type: GET_SUBCATEGORY_RED, payload: responce })
}
function* updateSaga(action) {
    let responce = yield updateRecord("contactus", action.payload)
    yield put({ type: UPDATE_SUBCATEGORY_RED, payload: action.payload })

    // let responce = yield updatemultipleRecord("contactus", action.payload)
    // yield put({ type: UPDATE_SUBCATEGORY_RED, payload: action.payload })
}
function* deleteSaga(action) {
    let id = action.payload._id;
    let responce = yield call(deleteRecord,"contact",id)
    yield put({ type: DELETE_SUBCATEGORY_RED, payload: action.payload })
}
export default function* contactSagas() {
    yield takeEvery(CREATE_SUBCATEGORY, createSaga)
    yield takeEvery(GET_SUBCATEGORY, getSaga)
    yield takeEvery(UPDATE_SUBCATEGORY, updateSaga)
    yield takeEvery(DELETE_SUBCATEGORY, deleteSaga)

}

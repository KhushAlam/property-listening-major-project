import { call, put, takeEvery } from "redux-saga/effects"
import { CREATE_MAINCATEGORY, CREATE_MAINCATEGORY_RED,DELETE_MAINCATEGORY, DELETE_MAINCATEGORY_RED,GET_MAINCATEGORY,GET_MAINCATEGORY_RED,UPDATE_MAINCATEGORY, UPDATE_MAINCATEGORY_RED, } from "../Constant"
import { createmultipleRecord, createRecord, deleteRecord, getRecord, updatemultipleRecord, updateRecord } from "./Service/Index"


function* createSaga(action) {
    let responce = yield call(createRecord,"MAINCATEGORY/create",action.payload)
    yield put({ type: CREATE_MAINCATEGORY_RED, payload: responce })

    // let responce = yield createmultipleRecord("MAINCATEGORYus")
    // yield put({ type: CREATE_MAINCATEGORY_RED, payload: responce })
}

function* getSaga(action) {
    let responce = yield call(getRecord,"MAINCATEGORY/get",action.payload)
    yield put({ type: GET_MAINCATEGORY_RED, payload: responce })
}
function* updateSaga(action) {
    let responce = yield updateRecord("MAINCATEGORYus", action.payload)
    yield put({ type: UPDATE_MAINCATEGORY_RED, payload: action.payload })

    // let responce = yield updatemultipleRecord("MAINCATEGORYus", action.payload)
    // yield put({ type: UPDATE_MAINCATEGORY_RED, payload: action.payload })
}
function* deleteSaga(action) {
    let id = action.payload._id;
    let responce = yield call(deleteRecord,"MAINCATEGORY",id)
    yield put({ type: DELETE_MAINCATEGORY_RED, payload: action.payload })
}
export default function* MAINCATEGORYSagas() {
    yield takeEvery(CREATE_MAINCATEGORY, createSaga)
    yield takeEvery(GET_MAINCATEGORY, getSaga)
    yield takeEvery(UPDATE_MAINCATEGORY, updateSaga)
    yield takeEvery(DELETE_MAINCATEGORY, deleteSaga)

}

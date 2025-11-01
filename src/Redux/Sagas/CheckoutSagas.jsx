import { call, put, takeEvery } from "redux-saga/effects"
import { CREATE_CHECKOUT, CREATE_CHECKOUT_RED,DELETE_CHECKOUT, DELETE_CHECKOUT_RED,GET_CHECKOUT,GET_CHECKOUT_RED,UPDATE_CHECKOUT, UPDATE_CHECKOUT_RED, } from "../Constant"
import { createmultipleRecord, createRecord, deleteRecord, getRecord, updatemultipleRecord, updateRecord } from "../Sagas/Service/Index"


function* createSaga(action) {
    let responce = yield call(createRecord,"contact/create",action.payload)
    yield put({ type: CREATE_CHECKOUT_RED, payload: responce })

    // let responce = yield createmultipleRecord("contactus")
    // yield put({ type: CREATE_CHECKOUT_RED, payload: responce })
}

function* getSaga(action) {
    let responce = yield call(getRecord,"contact/get",action.payload)
    yield put({ type: GET_CHECKOUT_RED, payload: responce })
}
function* updateSaga(action) {
    let responce = yield updateRecord("contactus", action.payload)
    yield put({ type: UPDATE_CHECKOUT_RED, payload: action.payload })

    // let responce = yield updatemultipleRecord("contactus", action.payload)
    // yield put({ type: UPDATE_CHECKOUT_RED, payload: action.payload })
}
function* deleteSaga(action) {
    let id = action.payload._id;
    let responce = yield call(deleteRecord,"contact",id)
    yield put({ type: DELETE_CHECKOUT_RED, payload: action.payload })
}
export default function* contactSagas() {
    yield takeEvery(CREATE_CHECKOUT, createSaga)
    yield takeEvery(GET_CHECKOUT, getSaga)
    yield takeEvery(UPDATE_CHECKOUT, updateSaga)
    yield takeEvery(DELETE_CHECKOUT, deleteSaga)

}

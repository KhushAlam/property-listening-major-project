import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import Rootsagas from "./Saga/RootSaga";
import Rootreducer from "./Reducers/Rootreducer";
import Rootsagas from "./Sagas/Rootsaga";


const Saga = createSagaMiddleware();

const Store = configureStore({
  reducer: Rootreducer,
  middleware: () => [Saga]
})

export default Store
Saga.run(Rootsagas); 
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import Rootsagas from "./Sagas/Rootsaga";
import Rootreducer from "./Reducers/Rootreducer";

const Saga = createSagaMiddleware();

const Store = configureStore({
  reducer: Rootreducer,
  middleware: () => [Saga]
})

export default Store
Saga.run(Rootsagas); 
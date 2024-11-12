import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import paradiseReducer from "./slice";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    paradiseapp: paradiseReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([sagaMiddleware])
})

sagaMiddleware.run(rootSaga);
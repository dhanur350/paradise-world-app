import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([sagaMiddleware])
})

sagaMiddleware.run(rootSaga);
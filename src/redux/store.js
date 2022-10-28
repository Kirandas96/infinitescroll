import { applyMiddleware, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"

import { authReducer } from "./Auth/authReducer"
export const store=createStore(authReducer,applyMiddleware(thunk))
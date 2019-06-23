import {applyMiddleware, createStore} from "redux"

import {createLogger} from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from '../Reducers/Exchange'


const middleware = applyMiddleware(promise(), thunk, createLogger(), authInterceptor)
export default createStore(reducer)
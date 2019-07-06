import { combineReducers } from "redux"

import exchangeApp from './Exchange'
import loginRedux from './Login'

export default combineReducers({ exchangeApp, loginRedux })
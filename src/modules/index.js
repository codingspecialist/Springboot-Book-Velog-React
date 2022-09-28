import { combineReducers } from 'redux';
import bloglists from './bloglists'
import members from './members'
const rootReducer = combineReducers({bloglists, members});

export default rootReducer;
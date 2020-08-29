import { combineReducers } from 'redux';

import * as userReducer from './reducer/user';

export default combineReducers({
    ...userReducer
});
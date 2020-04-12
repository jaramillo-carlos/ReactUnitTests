import { combineReducers } from 'redux';
import demoReducer from './demoReducer';
import login from './login';

const rootReducer = combineReducers({
	demoReducer,
	login
});

export default rootReducer;

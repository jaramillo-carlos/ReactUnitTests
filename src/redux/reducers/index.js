import { combineReducers } from 'redux';
import demoReducer from './demoReducer';
import login from './login';
import profile from './profile';

const rootReducer = combineReducers({
	demoReducer,
	login,
	profile,
});

export default rootReducer;

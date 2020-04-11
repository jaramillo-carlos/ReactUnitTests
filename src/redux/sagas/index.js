import { all } from 'redux-saga/effects';
import login from './login';


export default function* rootSaga() {
	// run all sagas
	yield all([login()]);
}

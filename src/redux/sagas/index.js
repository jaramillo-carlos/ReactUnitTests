import { all } from 'redux-saga/effects';
import login from './login';
import profile from './profile';


export default function* rootSaga() {
	// run all sagas (run watchers)
	yield all([
		login(), // watcher
		profile() // watcher
	]);
}

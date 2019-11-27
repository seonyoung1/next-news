import axios from "axios";
import { all, fork, call, put, takeEvery, takeLatest, delay } from "redux-saga/effects";
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "../store/user";

// all: 합쳐줌
// fork: 비동기로 호출
// call: 동기로 호출(api 호출할 때 추천)
// put: 액션 실행
// take: 액션, 함수 실행 - 한번 실행하고 버튼 눌러도 동작하지 않음
// takeEvery: 반복실행
// takeLatest: 여러번 실행해도 마지막 한개만 실행됨

function* loginAPI() {
	return axios.post("/login");
}

function* login() {
	try {
		yield call(loginAPI);
		yield put({
			type: LOG_IN_SUCCESS,
		});
	} catch (e) {
		console.error(e);
		yield put({
			type: LOG_IN_FAILURE,
		});
	}
}

function* watchLogin() {
	yield takeEvery(LOG_IN_REQUEST, login);
}

function* signUpAPI() {
	return axios.post("/sign");
}

function* signUp() {
	try {
		yield call(signUpAPI);
		yield put({
			type: SIGN_UP_SUCCESS,
		});
	} catch (e) {
		console.error(e);
		yield put({
			type: SIGN_UP_FAILURE,
			error: e,
		});
	}
}

function* watchSignUp() {
	yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSage() {
	yield all([fork(watchLogin), fork(watchSignUp)]);
}

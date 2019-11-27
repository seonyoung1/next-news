import axios from "axios";
import { all, fork, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "../store/user";

// all: 합쳐줌
// fock: 비동기로 호출
// call: 동기로 호출(api 호출할 때 추천)
// put: 액션 실행
// take: 액션, 함수 실행 - 한번 실행하고 버튼 눌러도 동작하지 않음
// takeEvery: 반복실행
// takeLatest: 여러번 실행해도 마지막 한개만 실행됨

function* loginAPI() {}

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

export default function* userSage() {
	yield all([fork(watchLogin)]);
}

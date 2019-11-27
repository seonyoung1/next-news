import { all, fork } from "redux-saga/effects";
import user from "./user";
import news from "./news";

export default function* rootSaga() {
	yield all([
		fork(user),
		fork(news)
	]);
}

import { all, fork, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE } from "../store/news";

function getPostApi() {
    return axios.get("https://newsapi.org/v2/top-headlines?country=kr&pageSize=100&apiKey=5dc506f2b92745a682db92e9aee902b7");
}

function* getPost() {
    try {
        const {data: res} = yield call(getPostApi);
        // console.log(res);
        yield put({
            type: GET_NEWS_SUCCESS,
            contents: res.articles,
            total: res.totalResults,
        });
    } catch (e) {
        yield put({
            type: GET_NEWS_FAILURE,
            error: e,
        });
    }
}

function* watchGetPost() {
    yield takeLatest(GET_NEWS_REQUEST, getPost);
}

export default function* newsSaga() {
    yield all([
        fork(watchGetPost),
    ])
}
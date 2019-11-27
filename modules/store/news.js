export const initialState = {
	contents: null,
	isLoading: false,
	error: null,
	current: 1, // 현재 보고있는 페이지
	total: null, // 총 페이지
};

export const GET_NEWS_REQUEST = "GET_NEWS_REQUEST";
export const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";
export const GET_NEWS_FAILURE = "GET_NEWS_FAILURE";

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_NEWS_REQUEST: {
			return {
				...state,
				isLoading: true,
			};
		}
		case GET_NEWS_SUCCESS: {
			return {
				...state,
				isLoading: false,
				contents: action.contents,
				total: action.total,
			};
		}
		case GET_NEWS_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

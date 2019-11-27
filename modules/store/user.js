const dummyUser = {
	nickname: "홍길동",
};

export const initialState = {
	isLoggedIn: false, // 로그인 여부
	isLoggingOut: false, // 로그아웃 시도중
	isLoggingIn: false, // 로그인 시도중
	logInErrorReason: "", // 로그인 실패 사유
	isSignedUp: false, //회원가입 성공
	isSigningUp: false, //회원가입 시도중
	signUpErrorReason: "", // 회원가입 실패 사유
	me: null, // 내 정보
};

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_SUCCESS";
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT = "LOG_OUT";

export const signUpAction = (data) => ({
	type: SIGN_UP_REQUEST,
	data,
});

export const signUpSuccess = {
	type: SIGN_UP_SUCCESS,
};

export const loginAction = (data) => ({
	type: LOG_IN_REQUEST,
	data,
});
export const logoutAction = {
	type: LOG_OUT,
};
export const signUp = (data) => ({
	type: SIGN_UP_REQUEST,
	data,
});

export default (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN_REQUEST: {
			return {
				...state,
				isLoggedIn: true,
				logInErrorReason: ""
			};
		}
		case LOG_OUT: {
			return {
				...state,
				isLoggedIn: false,
				user: null,
			};
		}
		case SIGN_UP_REQUEST: {
			return {
				...state,
				signUpData: action.data,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

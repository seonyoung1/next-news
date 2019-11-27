import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import withRedux from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../modules/store";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../modules/sagas";
import "../styles/common.scss";

const News = ({ Component, pageProps, store }) => {
	return (
		<div id="wrapper">
			<Provider store={store}>
				<Head>
					<title>News</title>
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css" />
				</Head>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</div>
	);
};

News.propTypes = {
	Component: PropTypes.elementType,
	pageProps: PropTypes.object,
	store: PropTypes.object,
};

News.getInitialProps = async ({ Component, ctx }) => {
	return {
		pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
	};
};

const initStore = (initialState, options) => {
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [sagaMiddleware];
	const enhancer =
		process.env.NODE_ENV === "production"
			? compose(applyMiddleware(...middlewares))
			: compose(applyMiddleware(...middlewares), !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined" ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);
	const store = createStore(reducer, initialState, enhancer);
	sagaMiddleware.run(rootSaga);
	return store;
};

export default withRedux(initStore)(News);

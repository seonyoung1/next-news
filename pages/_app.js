import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import Router from "next/router";
import "../styles/common.scss";

// 라우터 이동 시 로딩바 추가
Router.events.on("routeChangeStart", url => {
	console.log(`Loading: ${url}`);
	document.body.classList.add("is-loading");
});
Router.events.on("routeChangeComplete", () => {
	console.log("loading end");
	document.body.classList.remove("is-loading");
});
Router.events.on("routeChangeError", () => {
	console.log("loading error");
	document.body.classList.remove("is-loading");
});

const News = ({ Component, pageProps }) => {
	return (
		<div id="wrapper">
			<Head>
				<title>News</title>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
};

News.propTypes = {
	Component: PropTypes.elementType,
	pageProps: PropTypes.object,
};

export default News;

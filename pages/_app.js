import React from 'react';
import Head from "next/head";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import "../styles/common.scss";

const News = ({Component, pageProps}) => {
    return (
        <div id="wrapper">
            <Head>
                <title>News</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.min.css" />
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

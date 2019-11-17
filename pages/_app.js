import React from 'react';
import Head from "next/head";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import 'antd/dist/antd.css';
import "../styles/common.scss";

const News = ({Component}) => {
    return (
        <div id="wrapper">
            <Head>
                <title>News</title>
            </Head>
            <Layout>
                <Component />
            </Layout>
        </div>
    );
};

News.propTypes = {
    Component: PropTypes.elementType,
};

export default News;

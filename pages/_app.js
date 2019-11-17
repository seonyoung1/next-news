import React from 'react';
import Head from "next/head";
import Layout from "../components/Layout";
import PropTypes from "prop-types";

const News = ({Component}) => {
    return (
        <>
            <Head>
                <title>News</title>
            </Head>
            <Layout>
                <Component />
            </Layout>
        </>
    );
};

News.propTypes = {
    Component: PropTypes.elementType,
};

export default News;

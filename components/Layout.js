import React from 'react';
import Header from "./Header";
import PropTypes from "prop-types";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div id="container">
                {children}
            </div>
            <Footer/>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.element,
};

export default Layout;

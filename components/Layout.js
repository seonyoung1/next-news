import React from 'react';
import Header from "./Header";
import PropTypes from "prop-types";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div id="container">
                {children}
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.element,
};

export default Layout;

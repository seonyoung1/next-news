import React from 'react';
import Header from "./Header";
import PropTypes from "prop-types";

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <div>
                {children}
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.elementType,
};

export default Layout;

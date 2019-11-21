import React from 'react';
import Header from "./Header";
import PropTypes from "prop-types";
import Footer from "./Footer";

const dummy = {
    isLoggedIn: false,
    user: "",
};

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div id="container">
                {dummy.isLoggedIn &&
                    <div>
                        안녕하세요. {dummy.user}님! 오늘도 좋은 하루 보내세요!!
                    </div>
                }
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

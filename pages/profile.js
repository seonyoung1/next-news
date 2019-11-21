import React from 'react';
import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

const dummy = {
    isLoggedIn: false,
    user: "",
};

const Profile = () => {
    return (
        <div>
            {dummy.isLoggedIn ?
                <UserProfile /> :
                <LoginForm />
            }
        </div>
    );
};

export default Profile;

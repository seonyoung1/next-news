import React from 'react';

const dummy = {
    isLoggedIn: false,
    user: "",
};

const UserProfile = () => {
    return (
        <div>
            안녕하세요. {dummy.user} 님.
            <button>로그아웃</button>
        </div>
    );
};

export default UserProfile;

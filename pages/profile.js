import React from 'react';

const dummy = {
    isLoggedIn: false,
    user: "",
};

const Profile = () => {
    return (
        <div>
            {dummy.isLoggedIn ?
                <div>안녕하세요 {dummy.user}님</div> :
                <div>로그인하세요</div>
            }
        </div>
    );
};

export default Profile;

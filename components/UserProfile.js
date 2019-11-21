import React from 'react';

const dummy = {
    user: "홍길동",
};

const UserProfile = () => {
    return (
        <div>
            <p>안녕하세요. {dummy.user} 님</p>
            <button>로그아웃</button>
        </div>
    );
};

export default UserProfile;

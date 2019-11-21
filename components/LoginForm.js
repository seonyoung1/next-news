import React from 'react';
import {useInput} from "../hooks";
import Link from "next/link";

const LoginForm = () => {
    const [id, onChangeId] = useInput("");
    const [password, onChangePassword] = useInput("");
    const onSubmit = e => {
        e.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="userId">아이디</label>
                <input type="text" name="userId" value={id} onChange={onChangeId} />
            </div>
            <div>
                <label htmlFor="userPassword">비밀번호</label>
                <input type="password" name="userPassword" value={password} onChange={onChangePassword} />
            </div>
            <div>
                <button type="submit">로그인</button>
                아이디가 없으십니까? <Link href="/"><a>회원가입</a></Link>
            </div>
        </form>
    );
};

export default LoginForm;

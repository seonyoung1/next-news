import React from 'react';
import {useInput} from "../hooks";
import Link from "next/link";
import {Button} from "antd";

const LoginForm = () => {
    const [id, onChangeId] = useInput("");
    const [password, onChangePassword] = useInput("");
    const onSubmit = e => {
        e.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <h1>로그인</h1>
            <div>
                <label htmlFor="userId">아이디</label>
                <input type="text" name="userId" value={id} onChange={onChangeId} />
            </div>
            <div>
                <label htmlFor="userPassword">비밀번호</label>
                <input type="password" name="userPassword" value={password} onChange={onChangePassword} />
            </div>
            <div className="group">
                <Button type="primary" htmlType="submit">로그인</Button>
            </div>
            <p>아이디가 없으십니까? <Link href="/signup"><a>회원가입</a></Link></p>
        </form>
    );
};

export default LoginForm;

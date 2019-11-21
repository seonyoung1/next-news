import React, {useCallback, useState} from 'react';
import {useInput} from "../hooks";
import {Button} from "antd";

const SignUp = () => {
    const [id, onChangeId] = useInput("");
    const [nick, onChangeNick] = useInput("");
    const [password, onChangePassword] = useInput("");
    const [passwordChk, setPasswordChk] = useState("");
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const onSubmit = useCallback(e => {
        e.preventDefault();
        if(password !== passwordChk){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log({id, nick, password, passwordChk, term});
    }, [password, passwordChk, term]);

    const onChangePasswordChk = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setPasswordChk(e.target.value);
    },[password]);

    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }, []);

    return (
        <div className="sign">
            <form onSubmit={onSubmit}>
                <h1>회원가입</h1>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <input type="text" name="user-id" value={id} onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <input type="text" name="user-nick" value={nick} onChange={onChangeNick} />
                </div>
                <div>
                    <label htmlFor="user-pass">비밀번호</label>
                    <input type="password" name="user-pass" value={password} onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor="user-pass-chk">비밀번호확인</label>
                    <input type="password" name="user-pass-chk" value={passwordChk} onChange={onChangePasswordChk} />
                </div>
                <div className="agree">
                    <input type="checkbox" name="user-term" onChange={onChangeTerm} defaultChecked={term} />
                    <label htmlFor="user-term">동의합니다.</label>
                </div>
                <div className="error">
                    {passwordError && <p>비밀번호가 일치하지 않습니다</p>}
                    {termError && <p>약관에 동의해주세요</p>}
                </div>
                <div className="group">
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;

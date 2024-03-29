import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import Alert from '../Alert';
import InputControl from '../InputControl/InputControl';
import { auth } from '../../firebase';

import styles from './Login.module.css';

function Login() {
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [values, setValues] = useState({
    email: '',
    pass: '',
  });

  const handleSubmission = () => {
    setIsLoggedIn(false);
    if (!values.email || !values.pass) {
      setErrorMsg('빈칸을 채워주세요');
      return;
    }
    setErrorMsg('');

    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then((res) => {
        setIsLoggedIn(true);
        localStorage.setItem(
          'user',
          JSON.stringify({
            userName: res.user.displayName,
            userEmail: values.email,
            uId: res.user.uid,
          })
        );

        setTimeout(() => {
          window.location.href = '/';
        }, 500);
      })
      .catch((err) => {
        setErrorMsg('아이디/비밀번호를 확인하여 주세요.');
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>로그인</h1>

        <InputControl label='Email' onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} placeholder='이메일을 입력하세요' />
        <InputControl type='password' label='Password' onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} placeholder='비밀번호를 입력하세요' />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>

          <button onClick={handleSubmission}>로그인 하기</button>

          <p>
            이미 계정이 있습니까?
            <span>
              <Link to='/signup'>회원가입</Link>
            </span>
          </p>
        </div>
      </div>
      {isLoggedIn && <Alert showAlert={true} setShowAlert={setIsLoggedIn} content={'로그인 성공'} />}
    </div>
  );
}

export default Login;

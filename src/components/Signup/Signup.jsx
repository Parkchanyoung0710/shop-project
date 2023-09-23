import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import Alert from '../Alert';
import InputControl from '../InputControl/InputControl';
import { auth } from '../../firebase';

import styles from './Signup.module.css';

function Signup() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.password || !values.passwordCheck) {
      setErrorMsg('빈칸을 채워주세요');
      return;
    }

    if (values.password !== values.passwordCheck) {
      setErrorMsg('비밀번호가 일치하지 않습니다.');
      return;
    }

    setErrorMsg('');

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        setIsLoggedIn(true);
        localStorage.setItem(
          'user',
          JSON.stringify({
            userName: values.name,
            uId: res.user.uid,
          })
        );

        setTimeout(() => {
          window.location.href = '/';
        }, 500);
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  const handleChangeInput = () => {
    if (values.name && values.email && values.password && values.passwordCheck && values.password === values.passwordCheck) {
      setSubmitButtonDisabled(false);
    } else {
      setSubmitButtonDisabled(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerBox}>
          <h1 className={styles.heading}>회원가입</h1>

          <InputControl label='Name' placeholder='성함을 입력하세요' onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} onKeyUp={handleChangeInput} />
          <InputControl label='Email' placeholder='이메일을 입력하세요' onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} onKeyUp={handleChangeInput} />
          <InputControl
            type='password'
            label='Password'
            placeholder='비밀번호를 입력하세요'
            onChange={(event) => setValues((prev) => ({ ...prev, password: event.target.value }))}
            onKeyUp={handleChangeInput}
          />
          <InputControl
            type='password'
            label='Password'
            placeholder='비밀번호를 확인'
            onChange={(event) => setValues((prev) => ({ ...prev, passwordCheck: event.target.value }))}
            onKeyUp={handleChangeInput}
          />

          <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button onClick={handleSubmission} disabled={submitButtonDisabled}>
              회원가입하기
            </button>
            <p>
              이미 계정이 있습니까?
              <span>
                <Link to='/Login'>로그인</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      {isLoggedIn && <Alert showAlert={true} setShowAlert={setIsLoggedIn} content={'회원가입 성공'} />}
    </>
  );
}

export default Signup;

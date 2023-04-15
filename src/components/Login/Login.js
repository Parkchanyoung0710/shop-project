import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword} from "firebase/auth";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import styles from "./Login.module.css";

function Login() {
  
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
 
  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("빈칸을 채워주세요");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("./Main");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>로그인</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="이메일을 입력하세요"
        />
        <InputControl type="password"
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="비밀번호를 입력하세요"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            로그인 하기
          </button>

          
          <p>
            이미 계정이 있습니까?{" "}
            <span>
              <Link to="/signup">회원가입</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
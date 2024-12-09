// import styles from "./Login.module.css";
// import InputForm from "../../components/InputForm/InputForm";
// import {Form } from "react-router-dom";
// import SubmitButton from "../../components/SubmitButton/SubmitButton";
// import iconGoogle from '../../assets/google.png';
// import iconLogin from '../../assets/Login.png'
// import {Link} from 'react-router-dom';

// function Login() {
//     return (
//         <div className={styles.loginPage}>
//             <div className={styles.leftSection}>
//                 <div className={styles.topPage}>
//                     <h2>Đăng nhập</h2>
//                 </div>
//                 <div className={styles.container}>
//                     <Form method="POST">
//                         <InputForm id={"email"} name={"email"} type={"email"} placeholder={"Email"} />
//                         <InputForm id={"password"} name={"password"} type={"password"} placeholder={"Password"} />
//                         <div className={styles.forgotPassword}>
//                             <a href="#">
//                                 Quên mật khẩu?
//                             </a>
//                         </div>
//                         <SubmitButton>Đăng nhập</SubmitButton>
//                     </Form>
//                     <div className={styles.betweenContainer}>
//                         <div className={styles.itemOr}>
//                             <hr/>
//                             <p>
//                                 Hoặc
//                             </p>
//                             <hr />
//                         </div>
//                         <a href="#" className={styles.registerGoogle}>
//                             <img src={iconGoogle} alt="google" />
//                             <p>Đăng nhập với Google</p>
//                         </a>
//                     </div>
//                     <p className={styles.finalContainer}>
//                         Chưa có tài khoản? {' '}
//                         <Link to='/register' className={styles.register}>
//                         Đăng ký
//                         </Link>
//                     </p>
//                 </div>
//             </div>
//             <div className={styles.rightSection}>
//                 <img src={iconLogin} alt="Login" />
//             </div>
//         </div>
//     )
// }

// export default Login;

import styles from "./Login.module.css";
import { Form, useNavigate } from "react-router-dom";
import iconGoogle from "../../assets/google.png";
import iconLogin from "../../assets/Login.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { handleLogin } from "../../services/userService";
import { AuthContext } from "../../context/auth.context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { auth, setAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSumit = async (e) => {
    e.preventDefault();
    console.log("email: ", email, "password: ", password);
    try {
      const response = await handleLogin(email, password);

      localStorage.setItem("accessToken", response.accessToken);

      setAuth({
        isAuthenticated: true,
        user: {
          id: response.user.id,
          email: response.user.email,
        },
      });
      
      alert(response.message);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.loginPage}>
      <div className={styles.leftSection}>
        <div className={styles.topPage}>
          <h2>Đăng nhập</h2>
        </div>
        <div className={styles.container}>
          <Form method="POST" onSubmit={handleSumit}>
            <div className={styles.inputForm}>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={"Email"}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                id="password"
                name="password"
                type="password"
                placeholder={"Mật khẩu"}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.forgotPassword}>
              <a href="#">Quên mật khẩu?</a>
            </div>
            <button type="submit" className={styles.SubmitButton}>
              Đăng nhập
            </button>
          </Form>
          <div className={styles.betweenContainer}>
            <div className={styles.itemOr}>
              <hr />
              <p>Hoặc</p>
              <hr />
            </div>
            <a href="#" className={styles.registerGoogle}>
              <img src={iconGoogle} alt="google" />
              <p>Đăng nhập với Google</p>
            </a>
          </div>
          <p className={styles.finalContainer}>
            Chưa có tài khoản?{" "}
            <Link to="/register" className={styles.register}>
              Đăng ký
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.rightSection}>
        <img src={iconLogin} alt="Login" />
      </div>
    </div>
  );
}

export default Login;

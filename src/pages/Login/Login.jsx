import styles from "./Login.module.css";
import { Form, useNavigate } from "react-router-dom";
import iconGoogle from "../../assets/google.png";
import iconLogin from "../../assets/Login.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { handleLogin } from "../../services/userService";
import { AuthContext, useAuth } from "../../context/auth.context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { auth, setAuth } = useContext(AuthContext);
  const {login, auth} = useAuth();

  const navigate = useNavigate();

  
  const handleSumit = async (e) => {
    e.preventDefault();
    console.log("email: ", email, "password: ", password);
    try {
      await login(email, password);
      
      // if(auth.user.role === 'customer'){
      //   navigate("/");
      // }else if(auth.user.role === 'manager'){
      //   navigate("/admin");
      // }
      
    } catch (error) {
      console.log(error);
      // alert(error.response.data.message);
    }
  };

  useEffect(() => {
    if(auth.isAuthenticated && auth.user.role === 'customer'){
      navigate("/");
    }else if(auth.isAuthenticated && auth.user.role === 'manager'){
      navigate("/admin");
    }

  }, [auth, navigate])
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

import iconGoogle from "../../assets/google.png";
import iconLogin from "../../assets/login.png";
import { Form, Link } from "react-router-dom";
import styles from "./Register.module.css";
import { useState } from "react";
import { handleRegister } from "../../services/userService";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handleSumit = async (e) => {
    e.preventDefault();

    try {
      const response = await handleRegister(
        email,
        password,
        name,
        birthday,
        gender
      );
      console.log(response);
      alert(response.message);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.leftSection}>
        <div className={styles.topPage}>
          <h2>Đăng ký</h2>
        </div>
        <div className={styles.container}>
          <Form method="POST" onSubmit={handleSumit}>
            <div className={styles.inputForm}>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={"Họ và tên"}
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <input
                id="email"
                name="email"
                type="email"
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                id="password"
                name="password"
                type="password"
                placeholder={"Mật khẩu"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                value={confirmPassword}
                placeholder={"Nhập lại mật khẩu"}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.forgotPassword}>
              <a href="#">Quên mật khẩu?</a>
            </div>
            <button type="submit" className={styles.SubmitButton}>
              Đăng ký
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
            Đã có tài khoản?{" "}
            <Link to="/login" className={styles.register}>
              Đăng nhập
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

export default Register;


import iconGoogle from '../../assets/google.png';
import iconLogin from '../../assets/login.png';;
import { Form, Link } from 'react-router-dom';
import styles from './Register.module.css';

function Register() {
  return (
    <div className={styles.loginPage}>
        <div className={styles.leftSection}>
            <div className={styles.topPage}>
                <h2>Đăng ký</h2>
            </div>
            <div className={styles.container}>
                <Form method="POST">
                    <div className={styles.inputForm}>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder={"Họ và tên"}
                            required
                        />
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder={"Email"}
                            required
                        />
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder={"Mật khẩu"}
                            required
                        />
                        <input
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            placeholder={"Nhập lại mật khẩu"}
                            required
                        />
                    </div>
                    <div className={styles.forgotPassword}>
                        <a href="#">
                            Quên mật khẩu? 
                        </a>
                    </div>
                    <button
                        type="submit"
                        className={styles.SubmitButton}
                    >
                    Đăng ký
                    </button>
                </Form>
                <div className={styles.betweenContainer}>
                    <div className={styles.itemOr}>
                        <hr/>
                        <p>
                            Hoặc
                        </p>
                        <hr />
                    </div>
                    <a href="#" className={styles.registerGoogle}>
                        <img src={iconGoogle} alt="google" />
                        <p>Đăng nhập với Google</p>
                    </a>
                </div>
                <p className={styles.finalContainer}>
                    Đã có tài khoản? {' '}
                    <Link to='/login' className={styles.register}>
                    Đăng nhập
                    </Link>
                </p>
            </div>
        </div>
        <div className={styles.rightSection}>
            <img src={iconLogin} alt="Login" />
        </div>
    </div>
  )
}

export default Register;

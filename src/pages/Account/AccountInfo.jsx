
import styles from './AccountInfo.module.css';
import { useState } from 'react';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


const AccountInfo = () => {
  const [userData, setUserData] = useState({
    name: 'Thăng Hà Tiến',
    email: 'hatienthang22cse@gmail.com',
    phone: '',
    dob: '',
    gender: 'Nam',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thông tin tài khoản đã được cập nhật!');
    console.log('Dữ liệu cập nhật:', userData);
  };
  return (
    <div>
      <NavBar />
        <div className={styles.columnlayout}>
            <div className={styles.sidebarone}>
            </div>
            <div className={styles.maincolumn}>
                <div className={styles.container}>
                    <h2>Thông tin tài khoản</h2>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                        <label>Họ tên</label>
                        <input
                            type="text"
                            value={userData.name}
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        />
                        </div>
                        <div className={styles.formGroup}>
                        <label>Email</label>
                        <input
                            type="email"
                            value={userData.email}
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        />
                        </div>
                        <div className={styles.formGroup}>
                        <label>Số điện thoại</label>
                        <input
                            type="text"
                            value={userData.phone}
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        />
                        </div>
                        <div className={styles.formGroup}>
                        <label>Ngày sinh</label>
                        <input 
                            type="date"
                            value={userData.dob}
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })} 
                        />
                        </div>
                        <div className={styles.formGroup}>
                        <label>Giới tính</label>
                        <select
                          value={userData.gender}
                          onChange={(e) => setUserData({...userData, name: e.target.value})}
                        >
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                        </div>
                        <button type="submit" className={styles.submitButton}>
                          Cập nhật
                        </button>
                    </form>
                </div>
            </div>
            <div className={styles.sidebartwo}>

            </div>
        </div>
      <Footer />
    </div>
  );
};

export default AccountInfo;

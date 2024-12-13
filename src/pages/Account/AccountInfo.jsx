import styles from './AccountInfo.module.css';
import { useEffect, useState } from 'react';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { getUserAccount, updateUserAccount } from '../../services/userService';


const AccountInfo = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    // phone: '',
    birthday: '',
    gender: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserAccount();
        console.log(response);
        if(response.birthday){
          response.birthday = new Date(response.birthday).toISOString().split('T')[0];
        }
        setUserData(response);
      } catch (error) {
        console.error( error);  
      }
    };
    fetchUserData();
  },[])
  const handleSubmit = async(e) => {
    e.preventDefault();
    alert('Thông tin tài khoản đã được cập nhật!');
    await updateUserAccount(userData.name, userData.email, userData.birthday, userData.gender);
    console.log('Dữ liệu cập nhật:', userData);
  };
  return (
    <div>
      <NavBar />
        <div className='d-flex justify-content-center align-items-center p-5 'style={{height: "100%", backgroundColor: "#f0f0f0"}}>
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
                            name='name'
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        />
                        </div>
                        <div className={styles.formGroup}>
                        <label>Email</label>
                        <input
                            type="email"
                            name='email'
                            value={userData.email}
                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                        />
                        </div>
                        {/* <div className={styles.formGroup}>
                        <label>Số điện thoại</label>
                        <input
                            type="text"

                            value={userData.phone}
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        />
                        </div> */}
                        <div className={styles.formGroup}>
                        <label>Ngày sinh</label>
                        <input
type="date"
                            name='birthday'
                            value={userData.birthday}
                            onChange={(e) => setUserData({ ...userData, birthday: e.target.value })} 
                        />
                        </div>
                        <div className={styles.formGroup}>
                        <label>Giới tính</label>
                        <select
                        name='gender'
                          value={userData.gender}
                          onChange={(e) => setUserData({...userData, gender: e.target.value})}
                        >
                            <option value="M">Nam</option>
                            <option value="F">Nữ</option>
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
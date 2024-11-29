
// import React from 'react';
// import styles from './Footer.module.css';

// export default function Footer() {
//   return (
//     <footer>
//         <div className={styles["footer-top"]}>
//             <h2>Trở thành hội viên và hưởng ưu đãi 15%</h2>
//         </div>
//         <div className={styles["footer-list"]}>
//             <div className={styles["footer-item"]}>
//                 <h3>SẢN PHẨM</h3>
//                 <ul>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                 </ul>
//             </div>
//             <div className={styles["footer-item"]}>
//                 <h3>THỂ THAO</h3>
//                 <ul>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                 </ul>
//             </div>
//             <div className={styles["footer-item"]}>
//                 <h3>BỘ SƯU TẬP</h3>
//                 <ul>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                 </ul>
//             </div>
//             <div className={styles["footer-item"]}>
//                 <h3>THÔNG TIN VỀ CÔNG TY</h3>
//                 <ul>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                 </ul>
//             </div>
//             <div className={styles["footer-item"]}>
//                 <h3>HỖ TRỢ</h3>
//                 <ul>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                 </ul>
//             </div>
//             <div className={styles["footer-item"]}>
//                 <h3>THEO DÕI CHÚNG TÔI</h3>
//                 <ul>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                     <li>htt</li>
//                 </ul>
//             </div>
//         </div>
//         <div className={styles["footer-bottom"]}>
//             chính sách bảo mật
//         </div>
//     </footer>
//   )
// }
// import styles from './Footer.module.css';

// const Footer = () => {
//   return (
//     <footer className={styles["footer"]}>
//       <div className={styles["content"]}>
//         <h2>Speed Up English Center</h2>
//         <p>Founded in 2018</p>
//         <div className={styles["contactInfo"]}>
//           <p><strong>Email:</strong> tangto.tttn2018@gmail.com</p>
//           <p><strong>Phone No.:</strong> 090 806 42 86</p>
//           <p><strong>Address:</strong> 27 Tinh Lo 2 Road, Tan Phu Trung Ward, Cu Chi District, HCMC</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import styles from './Footer.module.css';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className={styles['footer']}>
        <div className={styles['footer-content']}>
            <div className={styles['info-shop']}>
                <h3>e-Shop</h3>
                <p>E-shop là gian hàng trực tuyến (mua hàng online). 
                    Với mong muốn mang lại sự tiện lợi, lựa chọn đa dạng hơn và các dịch 
                    vụ tốt hơn cho người tiêu dùng.</p>
            </div>
            <div className={styles['quicklinks']}>
                <h4>Quick Links</h4>
                <ul>
                    <li>Trang chủ</li>
                    <li>Sản phẩm</li>
                    <li>Liên hệ</li>
                    <li>Chúng tôi</li>
                </ul>
            </div>
            <div className={styles['follow us']}>
                <h4>Follow us</h4>
                <div className={styles['link-follow']}>
                    <a href=""><FaFacebook/></a>
                    <a href=""><FaInstagramSquare/></a>
                    <a href=""><BiLogoGmail/></a>
                </div>
            </div>
        </div>
        <div className={styles["footer-end"]}>
            <div className={styles["copyright"]}>
                <p>&copy; 2024 e-shop All rights reserved.</p>
                <div className={styles["footer-end-link"]}>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms and Conditions</a>
                </div>
            </div>
        </div>
        
    </footer>
  )
}

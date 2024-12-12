
import styles from './Footer.module.css';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className={styles['footer']}>
        <div className={styles['footer-content']}>
            <div className={styles['info-shop']}>
                <h4>Technology-Shop</h4>
                <p>Technology-shop là gian hàng trực tuyến (mua hàng online). 
                    Với mong muốn mang lại sự tiện lợi, lựa chọn đa dạng hơn và các dịch 
                    vụ tốt hơn cho người tiêu dùng.</p>
            </div>
            <div className={styles['quicklinks']}>
                <h4>Truy cập nhanh</h4>
                <ul>
                    <li>Trang chủ</li>
                    <li>Sản phẩm</li>
                    <li>Đơn hàng của tôi</li>
                </ul>
            </div>
            <div className={styles['follow us']}>
                <h4>Liên hệ</h4>
                <div className={styles['link-follow']}>
                    <a href="https://www.facebook.com/"><FaFacebook/></a>
                    <a href="https://www.instagram.com/"><FaInstagramSquare/></a>
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
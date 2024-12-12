import  {useState} from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

import { FaSearch,FaShoppingCart, FaUser} from "react-icons/fa";
import Logo from '../../assets/Logo.png'

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink
        to="/"
        >
        <img src={Logo} alt="Logo" className={styles.imgLogo}/>
        </NavLink>
        <ul className={styles.navLinks}>
            <li>
                <NavLink
                to="/"
                className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                }
                >
                TRANG CHỦ
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/product"
                    className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                    }
                >
                    SẢN PHẨM
                </NavLink>
            </li>
        </ul>
        <div className={styles.rightSection}>
          <input type="text" placeholder="tìm kiếm..." className={styles.searchBar}/>
          <button className={styles.searchButton}   > <FaSearch/></button>
          <div className={styles.navItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span> <FaUser/></span>
            {isDropdownOpen && (
              <div className={styles.dropdown}>
                <NavLink
                  to="/account"
                  className={styles.dropdownItem}
                >
                  Thông tin tài khoản
                </NavLink>
                <NavLink
                  to="/account/orders"
                  className={styles.dropdownItem}
                >
                  Quản lý đơn hàng
                </NavLink>
                <NavLink
                to="/login"
                >
                  <button
                  className={styles.logoutButton}
                  // onClick={() => alert("Đăng xuất thành công!")}
                  >
                  Đăng nhập
                  </button>
                </NavLink>
                
              </div>
            )}
          </div>
          <div className={styles.icons}>
            <span><NavLink to="/cart"
                      className={({ isActive }) =>
                      isActive ? `${styles.navLinkcart}` : styles.navLinkcart
                      }
                    >
                      <FaShoppingCart/>
                    </NavLink>
              </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

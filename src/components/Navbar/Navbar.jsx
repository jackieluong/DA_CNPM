import  {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

// import { FaUser} from "react-icons/fa";
import Logo from '../../assets/Logo.png'
import iconCart from '../../assets/iconCart.png'
import iconUser from '../../assets/iconUser.png'
import { useAuth } from "../../context/auth.context";



const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {auth, logout} = useAuth();
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
                Trang chủ
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/product"
                    className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                    }
                >
                    Sản phẩm
                </NavLink>
            </li>
            {auth.isAuthenticated ?
            <li>
                <NavLink
                    to="/account/orders"
                    className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                    }
                >
                    Đơn hàng của tôi
                </NavLink>
            </li>
            :
            <li>
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                    }
                >
                    Đăng nhập
                </NavLink>
            </li>
            }
        </ul>
        
        <div className={styles.rightSection}>
          {auth.isAuthenticated && 
          <div className={styles.icons}>
              <span><NavLink to="/cart"
                        className={({ isActive }) =>
                        isActive ? `${styles.navLinkcart}` : styles.navLinkcart
                        }
                      >
                        <div className={styles.iconCart}>
                          <img src={iconCart} alt="icon" />
                          <p>Giỏ hàng</p>
                        </div>
                    </NavLink>
              </span>
          </div>
          }
          <div className={styles.navItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className={styles.iconUser}> <img src={iconUser} alt="icon" /></span>
            {isDropdownOpen && (
              <div className={styles.dropdown}>
                
              {
                !auth.isAuthenticated ? (<Link
                to="/login"
                >
                  <button
                  className={styles.logoutButton}
                  // onClick={() => alert("Đăng xuất thành công!")}
                  >
                  Đăng nhập
                  </button>
                </Link> ) :(
                  <>
                
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
                Lịch sử đặt hàng
              </NavLink>  
              <NavLink
                to="/"
                >
                  <button
                  className={styles.logoutButton}
                  onClick={() => logout()}
                  >
                  Đăng xuất
                  </button>
                </NavLink> 
              </>
              )
              }
              
            </div>
            )}
          </div>
          
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

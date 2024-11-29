import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";


import { FaSearch,FaShoppingCart, FaHeart, FaUser} from "react-icons/fa";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>Shop</h1>
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
            <button className={styles.searchButton}> <FaSearch/></button>
            <div className={styles.icons}>
                <span><NavLink to="/user"
                        className={({ isActive }) =>
                        isActive ? `${styles.navLinkcart}` : styles.navLinkcart
                        }
                      >
                        <FaUser/>
                      </NavLink>
                </span>
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

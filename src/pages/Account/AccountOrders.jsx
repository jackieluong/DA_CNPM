import React from 'react'
import NavBar from '../../components/Navbar/Navbar'
import styles from "./AccountOrders.module.css";
import Footer from '../../components/Footer/Footer';

export default function AccountOrders() {
  return (
    <div>
        <NavBar/>
        <div className={styles.columnlayout}>
            <div className={styles.sidebarone}>
            </div>
            <div className={styles.maincolumn}>

            </div>
            <div className={styles.sidebartwo}>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

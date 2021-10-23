import React from 'react'
import styles from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <i className="bi bi-card-text"></i>
            <div>Daily Notes</div>
        </div>
    )
}

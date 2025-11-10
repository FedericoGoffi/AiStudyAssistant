import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.navBrand}>
                    <h1 className={styles.logo}>AI Study Assistant</h1>
                </div>
                <ul className={styles.navLinks}>
                    <li>
                        <a href="#contacto" className={styles.link}>
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
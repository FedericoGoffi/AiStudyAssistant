import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p className={styles.footerText}>2025 AI Study Assistant</p>
            </div>
        </footer>
    )
}

export default Footer
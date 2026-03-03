import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <a className={styles.link}>Contact</a>
                <a className={styles.link}>Terms of Service</a>
                <a className={styles.link}>Privacy Policy</a>
            </nav>

        </footer>
    );
}

export default Footer;
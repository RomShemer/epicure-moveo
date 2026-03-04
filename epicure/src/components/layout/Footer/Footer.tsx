import styles from "./Footer.module.css";
import { footerLinks } from "../../../data/footerLinks";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                {footerLinks.map((link) => (
                    <a
                        key={link.id}
                        href={link.href}
                        className={styles.link}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
        </footer>
    );
}

export default Footer;
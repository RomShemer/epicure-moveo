import { navigationLinks } from "../../../data/navigation";
import styles from "./NavigationMenu.module.css";
import xIcon from "../../../assets/xIcon.svg";
import { footerLinks } from "../../../data/footerLinks";

type NavigationMenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

const NavigationMenu = ({ isOpen, onClose }: NavigationMenuProps) => {
    if (!isOpen) return null;

    return (
        <div className={styles.navigationMenu}>

            <div className={styles.topContainer}>
                <button className={styles.clearButton} onClick={onClose}>
                    <img src={xIcon} alt="Clear Search" className={styles.clearIcon} />
                </button>
            </div>

            <div className={styles.navContainer}>

                <nav className={styles.nav}>
                    {navigationLinks.map((link) => (
                        <a key={link.id} href={link.path}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <nav className={styles.navFooter}>
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
            </div>
        </div>
    );
};

export default NavigationMenu;
import styles from "./Header.module.css";
import menuIcon from "../../../assets/HAMBUR.svg";
import logo from "../../../assets/about-logo@3x 1.svg";
//import logoDesktop from "../../../assets/desktop-logo.svg";
import searchIcon from "../../../assets/General.svg";
import profileIcon from "../../../assets/ProfileIcon.svg";
import cartIcon from "../../../assets/GeneralCart.svg";
import { navigationLinks } from "../../../data/navigation";

const actionIcons = [
  { id: 1, src: searchIcon, alt: "Search Icon" },
  { id: 2, src: profileIcon, alt: "Profile Icon" },
  { id: 3, src: cartIcon, alt: "Cart Icon" },
];

const Header = () => {
  return (
    <header className={styles.header}>

      {/* todo: add condition mobile/desktop for menu and logo */}
      <div className={styles.menu}>
        <img src={menuIcon} alt="Menu Icon" className={styles.menuIcon} />
      </div>

      <img src={logo} alt="Epicure Logo" className={styles.logo} />

      {/*<nav className={styles.nav}>
        {navigationLinks.map((link) => (
          <a key={link.id} href={link.path}>
            {link.label}
          </a>
        ))}
      </nav>*/}

      <div className={styles.actions}>
        {actionIcons.map((icon) => (
          <button key={icon.id} type="button" className={styles.iconButton}>
            <img src={icon.src} alt={icon.alt} className={styles.actionsIcons} />
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
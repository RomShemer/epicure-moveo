import styles from "./Header.module.css";
import menuIcon from "../../../assets/HAMBUR.svg";
import logoMobile from "../../../assets/about-logo@3x 1.svg";
import logoDesktop from "../../../assets/logo-desktop.svg";
import searchIcon from "../../../assets/General.svg";
import profileIcon from "../../../assets/ProfileIcon.svg";
import cartIcon from "../../../assets/GeneralCart.svg";
import { navigationLinks } from "../../../data/navigation";
import { useMediaQuery } from "../../../hooks/useMediaQuery"


const actionIcons = [
  { id: 1, src: searchIcon, alt: "Search Icon" },
  { id: 2, src: profileIcon, alt: "Profile Icon" },
  { id: 3, src: cartIcon, alt: "Cart Icon" },
];

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const showMenu = !isDesktop;
  const showNav = isDesktop;

  return (
    <header className={styles.header}>

      {showMenu && (
        <div className={styles.menu}>
          <img src={menuIcon} alt="Menu Icon" className={styles.menuIcon} />
        </div>
      )}

      <div className={styles.left}>
        <img
          src={isDesktop ? logoDesktop : logoMobile}
          alt="Epicure Logo"
          className={styles.logo}
        />

        {showNav && (
          <nav className={styles.nav}>
            {navigationLinks.map((link) => (
              <a key={link.id} href={link.path}>
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>

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
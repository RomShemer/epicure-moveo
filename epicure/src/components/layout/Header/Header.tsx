import styles from "./Header.module.css";
import menuIcon from "../../../assets/HAMBUR.svg";
import logo from "../../../assets/about-logo@3x 1.svg";
import searchIcon from "../../../assets/General.svg";
import profileIcon from "../../../assets/ProfileIcon.svg";
import cartIcon from "../../../assets/GeneralCart.svg";



const Header = () => {
  return (
    <header className={styles.header}>

    <div className={styles.menu}>
      <img src={menuIcon} alt="Menu Icon" className={styles.menuIcon} />
    </div>

    <img src={logo} alt="Epicure Logo" className={styles.logo} />

      <div className={styles.actions}>
        <button> 
              <img src={searchIcon} alt="search Icon" className={styles.actionsIcons} />
        </button>
        <button> 
              <img src={profileIcon} alt="profile Icon" className={styles.actionsIcons} />
        </button>
        <button> 
              <img src={cartIcon} alt="cart Icon" className={styles.actionsIcons} />
        </button>
      </div>
    </header>
  );
};

export default Header;
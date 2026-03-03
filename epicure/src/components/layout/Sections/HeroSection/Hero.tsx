import styles from "./Hero.module.css";
import searchIcon from "../../../../assets/General.svg";
import { useState, useEffect } from "react";

const Hero = () => {
    const [searchTerm, setSearchTerm] = useState("");

    //todo:connect the search term to the search results page

    return (
        <section className={styles.hero} >
            <div className={styles.background}></div>
            <div className={styles.overlay}>
                <h1 className={styles.title}>
                    Epicure works with the top chef restaurants in Tel Aviv
                </h1>

                <div className={styles.search}>
                    <img src={searchIcon} alt="search Icon" className={styles.searchIcon} />
                    <input 
                        type="text" 
                        placeholder="Search for restaurant cuisine, chef"
                        onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
            </div>
        </section>
    )

}


export default Hero;
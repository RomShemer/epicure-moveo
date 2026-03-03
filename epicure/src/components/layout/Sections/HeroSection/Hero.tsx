import styles from "./Hero.module.css";
import searchIcon from "../../../../assets/General.svg";
import { restaurants } from "../../../../mock/restaurants"
import { useState, useEffect } from "react";

const Hero = () => {
    const [searchTerm, setSearchTerm] = useState("");

    //todo:connect the search term to the search results page
    const filteredResults = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

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
                        value={searchTerm}
                        placeholder="Search for restaurant cuisine, chef"
                        onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
            </div>
        </section>
    )

}


export default Hero;
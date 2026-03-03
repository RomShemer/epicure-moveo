import styles from "./Hero.module.css";
import searchIcon from "../../../../assets/General.svg";
import { restaurants } from "../../../../mock/restaurants"
import { chefs } from "../../../../mock/chefs"
import { dishes } from "../../../../mock/dishes"

import { useState } from "react";

const Hero = () => {
    const [searchTerm, setSearchTerm] = useState("");

    //todo:connect the search term to the search results page
    const normalizedSearch = searchTerm.toLowerCase().trim()
    
    const restaurantResults = normalizedSearch
    ? restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(normalizedSearch) ||
        restaurant.chef.toLowerCase().includes(normalizedSearch) ||
        restaurant.cuisine.toLowerCase().includes(normalizedSearch)
      )
    : []

  const chefResults = normalizedSearch
    ? chefs.filter((chef) =>
        chef.name.toLowerCase().includes(normalizedSearch)
      )
    : []

  const dishResults = normalizedSearch
    ? dishes.filter((dish) =>
        dish.name.toLowerCase().includes(normalizedSearch) ||
        dish.restaurantId.toLowerCase().includes(normalizedSearch)
      )
    : []

  console.log({
    restaurants: restaurantResults,
    chefs: chefResults,
    dishes: dishResults
  })

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
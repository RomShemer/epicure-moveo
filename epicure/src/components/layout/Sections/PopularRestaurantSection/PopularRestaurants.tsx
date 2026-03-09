import { restaurants } from "../../../../mock/restaurants"
import styles from "./PopularRestaurantsSection.module.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { popularRestaurantsText } from "../../../../data/popularRestaurants"
import RestaurantCarousel from "../../Restaurant/RestaurantCarousel"
import { sectionUIConfig } from "../../../../config/ui.config";
import { useSearch } from "../../../../context/SearchContext"
import { useMemo } from "react"
import { filterBySearch } from "../../../../utils/filterBySearch";
import NoSearchResults from "../../Common/NoSearchResults"

const PopularRestaurantsSection = () => {

  const { searchTerm } = useSearch();

  const normalizedSearch = useMemo(
    () => searchTerm.toLowerCase().trim(),
    [searchTerm]
  );

  const filteredRestaurants = useMemo(() => {

    if (!normalizedSearch) {
      return restaurants;
    }

    const results = filterBySearch(
      restaurants,
      normalizedSearch,
      ["name", "cuisine", "chef"]
    );

    return results;

  }, [normalizedSearch]);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{popularRestaurantsText.title}</h2>

      {filteredRestaurants.length === 0 ? (
        <div className={styles.noSearchResultContainer} >
          <NoSearchResults
            searchTerm={searchTerm}
            entity="Popular Restaurants"
          />
        </div>

      ) :
        (

          <RestaurantCarousel
            restaurants={filteredRestaurants}
            cardProps={sectionUIConfig.popularRestaurants}
            layout={{
              centered: false,
              showButton: true,
              buttonText: popularRestaurantsText.buttonText,
              onButtonClick: () => { console.log("All Restaurants button clicked") }
            }}
          />)}
    </section>
  )
}

export default PopularRestaurantsSection
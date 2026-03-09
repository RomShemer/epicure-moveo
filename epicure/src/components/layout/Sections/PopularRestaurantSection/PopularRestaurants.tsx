import { restaurants } from "../../../../mock/restaurants"
import styles from "./PopularRestaurantsSection.module.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { popularRestaurantsText } from "../../../../data/popularRestaurants"
import RestaurantCarousel from "../../Restaurant/RestaurantCarousel"
import { sectionUIConfig } from "../../../../config/ui.config";


const PopularRestaurantsSection = () => {

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{popularRestaurantsText.title}</h2>

      <RestaurantCarousel
        restaurants={restaurants}
        cardProps={sectionUIConfig.popularRestaurants}
        layout={{
          centered: true,
          showButton: true,
          buttonText: popularRestaurantsText.buttonText,
          onButtonClick: () => { console.log("All Restaurants button clicked") }
        }}
      /> 
    </section>
  )
}

export default PopularRestaurantsSection
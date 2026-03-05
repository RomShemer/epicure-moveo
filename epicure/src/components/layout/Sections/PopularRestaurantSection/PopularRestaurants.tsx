import { restaurants } from "../../../../mock/restaurants"
import RestaurantCard from "./RestaurantCard"
import styles from "./PopularRestaurantsSection.module.css"
import { useMediaQuery } from "../../../../hooks/useMediaQuery"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import chevronIcon from "../../../../assets/ChevronIcon.svg"
import { popularRestaurantsText } from "../../../../data/popularRestaurants"

const PopularRestaurantsSection = () => {

  const isDesktop = useMediaQuery("(min-width: 1024px)")

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{popularRestaurantsText.title}</h2>

      <Swiper className={styles.swiperWrapper}
        modules={isDesktop ? [Navigation, Pagination] : []}
        spaceBetween={24}
        slidesPerView={isDesktop ? 3 : 1.4}
        centerInsufficientSlides={true}
        centeredSlides={false}
        navigation
        pagination={{ clickable: true }}
      >
        {restaurants.map((restaurant) => (
          <SwiperSlide key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.buttonContainer}>
        <button className={styles.button}
          onClick={() => { console.log("All Restaurants button clicked") }}
        >
          <div className={styles.buttonContent}>
            <span className={styles.buttonText}>{popularRestaurantsText.buttonText}</span>
            <img src={chevronIcon} alt="chevron icon" className={styles.buttonIcon} />
          </div>
        </button>
      </div>
    </section>
  )
}

export default PopularRestaurantsSection
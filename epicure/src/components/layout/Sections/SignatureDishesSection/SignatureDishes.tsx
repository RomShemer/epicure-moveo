import { dishes } from "../../../../mock/dishes"
import SignatureDishCard from "./SignatureDishCard"
import styles from "./SignatureDishes.module.css"
import { useMediaQuery } from "../../../../hooks/useMediaQuery"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import chevronIcon from "../../../../assets/ChevronIcon.svg"
import { signatureDishesText } from "../../../../data/signatureDishes"

const SignatureDishesSection = () => {

  const isDesktop = useMediaQuery("(min-width: 1024px)")

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{signatureDishesText.title}</h2>

      <Swiper className={styles.swiperWrapper}
        modules={isDesktop ? [Navigation, Pagination] : []}
        spaceBetween={24}
        slidesPerView="auto"
        centerInsufficientSlides={isDesktop ? true : false}
        centeredSlides={false}
        navigation
        pagination={{ clickable: true }}
      >
        {dishes.map((dish) => (
          <SwiperSlide key={dish.id}>
            <SignatureDishCard dish={dish} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.buttonContainer}>
        <button className={styles.button}
          onClick={() => { console.log("All Dishes button clicked") }}
        >
          <div className={styles.buttonContent}>
            <span className={styles.buttonText}>{signatureDishesText.buttonText}</span>
            <img src={chevronIcon} alt="chevron icon" className={styles.buttonIcon} />
          </div>
        </button>
      </div>
    </section>
  )
}

export default SignatureDishesSection
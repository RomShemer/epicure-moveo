import RestaurantCard from "./RestaurantCard"
import styles from "./RestaurantCarousel.module.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import type { Restaurant } from "../../../types"
import { useMediaQuery } from "../../../hooks/useMediaQuery"
import type { RestaurantCardProps } from "./RestaurantCard"
import chevronIcon from "../../../assets/ChevronIcon.svg"

type CarouselLayout = {
    centered?: boolean
    showButton?: boolean
    buttonText?: string
    onButtonClick?: () => void
}

type Props = {
    restaurants: Restaurant[]
    cardProps?: Omit<RestaurantCardProps, "restaurant">
    layout?: CarouselLayout
}


const defaultLayout: Required<CarouselLayout> = {
    centered: false,
    showButton: true,
    buttonText: "All",
    onButtonClick: () => console.log("Button clicked")
}


const RestaurantCarousel = ({ restaurants, cardProps, layout }: Props) => {

    const layoutConfig = { ...defaultLayout, ...layout }
    const isDesktop = useMediaQuery("(min-width: 1024px)")
    const maxSlidesDesktop = Math.min(restaurants.length, 3)

    return (
        <>
            <Swiper className={styles.swiperWrapper}
                modules={isDesktop ? [Navigation, Pagination] : []}
                spaceBetween={24}
                slidesPerView={isDesktop ? maxSlidesDesktop : "auto"}
                centerInsufficientSlides={layoutConfig.centered}
                centeredSlides={false}
                navigation
                pagination={{ clickable: true }}
            >
                {restaurants.map((restaurant) => (
                    <SwiperSlide key={restaurant.id}>
                        <RestaurantCard
                            restaurant={restaurant}
                            {...cardProps} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {layout?.showButton &&  <div className={styles.buttonContainer}>
                <button className={styles.button}
                    onClick={layoutConfig.onButtonClick}
                >
                    <div className={styles.buttonContent}>
                        <span className={styles.buttonText}>{layoutConfig.buttonText}</span>
                        <img src={chevronIcon} alt="chevron icon" className={styles.buttonIcon} />
                    </div>
                </button>
            </div> }
        </>
    )
}

export default RestaurantCarousel
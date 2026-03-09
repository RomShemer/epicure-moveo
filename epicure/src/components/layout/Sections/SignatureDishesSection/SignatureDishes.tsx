import { dishes } from "../../../../mock/dishes"
import { restaurants } from "../../../../mock/restaurants"
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
import { useSearch } from "../../../../context/SearchContext"
import { useMemo } from "react"
import { filterBySearch, joinCollections } from "../../../../utils/filterBySearch"
import type { Dish, Restaurant, DishWithRelations } from "../../../../types"
import NoSearchResults from "../../Common/NoSearchResults"

const SignatureDishesSection = () => {

    const isDesktop = useMediaQuery("(min-width: 1024px)")
    const { searchTerm } = useSearch();

    const normalizedSearch = useMemo(
        () => searchTerm.toLowerCase().trim(),
        [searchTerm]
    );

    const searchableDishes = useMemo<DishWithRelations[]>(() => {

        const joined = joinCollections(dishes, [
            {
                collection: restaurants,
                baseKey: "restaurantId",
                joinKey: "id",
                as: "restaurant"
            }
        ]) as Array<Dish & { restaurant?: Restaurant }>

        const mapped = joined.map<DishWithRelations>((dish) => {
            const { restaurant, ...dishData } = dish

            return {
                ...dishData,
                name: dishData.name.toLowerCase(),
                cuisine: (restaurant?.cuisine ?? "").toLowerCase(),
                chef: (restaurant?.chef ?? "").toLowerCase(),
                restaurantName: (restaurant?.name ?? "").toLowerCase()
            }
        })

        return mapped

    }, [])

    const filteredDishes = useMemo<DishWithRelations[]>(() => {
        if (!normalizedSearch) {
            return searchableDishes
        }

        const results = filterBySearch(
            searchableDishes,
            normalizedSearch,
            ["name", "cuisine", "chef", "restaurantName"]
        )

        return results

    }, [normalizedSearch, searchableDishes])

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{signatureDishesText.title}</h2>

            {filteredDishes.length === 0 ? (
                <div className={styles.noSearchResultContainer} >
                    <NoSearchResults
                        searchTerm={searchTerm}
                        entity="Signature Dishes"
                    />
                </div>

            ) :
                (<div className={styles.swiperWrapper} >
                    <Swiper 
                        modules={isDesktop ? [Navigation, Pagination] : []}
                        spaceBetween={24}
                        slidesPerView="auto"
                        centerInsufficientSlides={isDesktop ? false : false}
                        centeredSlides={false}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {filteredDishes.map((dish) => (
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
                </div>
                )}
        </section>
    )
}

export default SignatureDishesSection
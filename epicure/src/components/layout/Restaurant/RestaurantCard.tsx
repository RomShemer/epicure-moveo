import type { Restaurant } from "../../../types"
import styles from "./RestaurantCard.module.css"
import { useMediaQuery } from "../../../hooks/useMediaQuery"
import Rating from "../../Rating/Rating"

export type RestaurantCardVariant = "small" | "medium" | "large"


export interface RestaurantCardProps {
    restaurant: Restaurant
    showRating?: boolean
    showChefName?: boolean
    variant?: RestaurantCardVariant
}

const RestaurantCard = ({ restaurant, showRating = true, showChefName = true , variant="medium"}: RestaurantCardProps) => {
    const isDesktop = useMediaQuery("(min-width: 1024px)")

    return (
        <div className={`${styles.card} ${styles[variant]}`}>
            <img
                src={restaurant.image}
                alt={restaurant.name}
                className={styles.image}
            />

            <div className={styles.content}>
                <h3 className={styles.name}>{restaurant.name}</h3>
                {showChefName && <h4 className={styles.chef}>{restaurant.chef}</h4>}
                {isDesktop && showRating && <Rating value={restaurant.rating} />}
            </div>
        </div>
    )
}

export default RestaurantCard
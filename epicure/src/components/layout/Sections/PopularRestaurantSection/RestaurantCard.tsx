import type { Restaurant } from "../../../../types"
import styles from "./RestaurantCard.module.css"
import { useMediaQuery } from "../../../../hooks/useMediaQuery"
import Rating from "../../../Rating/Rating"

interface RestaurantCardProps {
    restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
    const isDesktop = useMediaQuery("(min-width: 1024px)")

    return (
        <div className={styles.card}>
            <img
                src={restaurant.image}
                alt={restaurant.name}
                className={styles.image}
            />

            <div className={styles.content}>
                <h3 className={styles.name}>{restaurant.name}</h3>
                <h4 className={styles.chef}>{restaurant.chef}</h4>
                {isDesktop && <Rating value={restaurant.rating} />}
            </div>
        </div>
    )
}

export default RestaurantCard
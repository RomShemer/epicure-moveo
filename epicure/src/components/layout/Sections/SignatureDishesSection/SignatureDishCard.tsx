import type { Dish } from "../../../../types"
import DishTag from "./DishTag"
import styles from "./SignatureDishCard.module.css"
import { useMediaQuery } from "../../../../hooks/useMediaQuery"
import NisIcon from "../../../../assets/ils.svg"

interface SignatureDishCardProps {
    dish: Dish
}

function formatPrice(price: number): string {
    return Number.isInteger(price)
        ? price.toString()
        : price.toFixed(2);
}

const SignatureDishCard = ({ dish }: SignatureDishCardProps) => {

    return (
        <div className={styles.card}>
            <img
                src={dish.image}
                alt={dish.name}
                className={styles.image}
            />

            <div className={styles.content}>
                <h3 className={styles.name}>{dish.name}</h3>
                <h4 className={styles.description}>{dish.description}</h4>

                <div className={styles.dishTagContainer}>
                    <DishTag dish={dish} />
                </div>

                <div className={styles.priceWrapper}>
                    <div className={styles.priceLine} />
                    <div className={styles.priceContainer}>
                        <img src={NisIcon} alt="NIS icon" className={styles.priceIcon} />
                        <p className={styles.price}>{formatPrice(dish.price)}</p>
                    </div>
                    <div className={styles.priceLine} />
                </div>
            </div>
        </div>
    )
}

export default SignatureDishCard
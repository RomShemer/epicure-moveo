import type { Dish } from "../../../../types"
import DishTag from "./DishTag"
import styles from "./SignatureDishCard.module.css"
import { useMediaQuery } from "../../../../hooks/useMediaQuery"
import NisIcon from "../../../../assets/ils.svg"

interface SignatureDishCardProps {
    dish: Dish
}

const SignatureDishCard = ({ dish }: SignatureDishCardProps) => {
    const isDesktop = useMediaQuery("(min-width: 1024px)")

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
                <DishTag dish={dish} />

                <div className={styles.priceContainer}>
                    <img src={NisIcon} alt="NIS icon" className={styles.priceIcon} />
                    <p className={styles.price}>{dish.price.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}

export default SignatureDishCard
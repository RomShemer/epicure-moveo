import { iconMeanings } from "../../../../mock/icons"
import type { Dish } from "../../../../types"
import styles from "./DishTag.module.css"

interface DishTagProps {
  dish: Dish
}

const DishTag = ({ dish }: DishTagProps) => {

  const activeIcons = iconMeanings.filter(icon =>
    (icon.label === "Spicy" && dish.isSpicy) ||
    (icon.label === "Vegan" && dish.isVegan) ||
    (icon.label === "Vegetarian" && dish.isVegetarian)
  )

  if (!activeIcons.length) return null

  return (
    <div className={styles.icons}>
      {activeIcons.map(icon => (
        <span key={icon.id} className={styles.icon}>
          <img src={icon.icon} alt={icon.label} />
        </span>
      ))}
    </div>
  )
}

export default DishTag
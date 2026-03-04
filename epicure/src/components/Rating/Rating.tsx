import emptyStar from "../../assets/EmptyStar.svg"
import fullStar from "../../assets/FullStar.svg"
import styles from "./Rating.module.css"

interface RatingProps {
  value: number
}

const Rating = ({ value }: RatingProps) => {
  return (
    <div className={styles.starsContainer}>
      {[1, 2, 3, 4, 5].map((starNumber) => (
        <img
          key={starNumber}
          src={starNumber <= value ? fullStar : emptyStar}
          alt="star"
          className={styles.star}
        />
      ))}
    </div>
  )
}

export default Rating
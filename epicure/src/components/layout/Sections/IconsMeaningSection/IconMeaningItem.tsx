import type { IconMeaning } from "../../../../types"
import styles from "./IconsMeaningSection.module.css"

interface Props {
  icon: IconMeaning
}

const IconMeaningItem = ({ icon }: Props) => {
  return (
    <div className={styles.iconItem}>
      <img src={icon.icon} alt={icon.label} />
      <span className={styles.label}>{icon.label}</span>
    </div>
  )
}

export default IconMeaningItem
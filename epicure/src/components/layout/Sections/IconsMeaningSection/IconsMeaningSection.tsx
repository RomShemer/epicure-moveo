import { iconMeanings } from "../../../../mock/icons"
import IconMeaningItem from "./IconMeaningItem"
import styles from "./IconsMeaningSection.module.css"
import { iconMeaningText } from "../../../../data/iconMeaning"

const IconsMeaningSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{iconMeaningText.title}</h2>

                <div className={styles.iconsContainer}>
                    {iconMeanings.map(icon => (
                        <IconMeaningItem key={icon.id} icon={icon} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default IconsMeaningSection
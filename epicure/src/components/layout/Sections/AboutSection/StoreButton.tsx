import styles from "./StoreButton.module.css"
import type { StoreButtonData } from "../../../../types"

const StoreButton = ({ image, alt, label, url }: StoreButtonData) => {
    const content = (
        <div className={styles.button}>
            <div className={styles.iconWrapper}>
                <img src={image} alt={alt} className={styles.icon} />
            </div>
            
            <div className={styles.text}>
                {label.map((line, index) => (
                    <span
                        key={index}
                        className={
                            index === 0
                                ? styles.textSmall
                                : styles.textLarge
                        }
                    >
                        {line}
                    </span>
                ))}
            </div>
        </div>
    )

    if (url) {
        return <a href={url}>{content}</a>
    }

    return content
}

export default StoreButton
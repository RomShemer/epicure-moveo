import styles from "./AboutSection.module.css"
import { aboutContent } from "../../../../mock/about"
import StoreButton from "./StoreButton"

const AboutSection = () => {
    const { title, logo, paragraphs, storeButtons } = aboutContent

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.logoWrapper}>
                    <img src={logo} alt="Epicure logo" className={styles.logo} />
                </div>

                <div className={styles.leftContainer}>

                    <div className={styles.storeButtons}>
                        {storeButtons.map((button) => (
                            <StoreButton
                                key={button.alt}
                                image={button.image}
                                alt={button.alt}
                                label={button.label}
                            />
                        ))}
                    </div>

                    <h2 className={styles.title}>{title}</h2>

                    <div className={styles.textWrapper}>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className={styles.description}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutSection
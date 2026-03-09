import styles from "./NoSearchResults.module.css"

type Props = {
    searchTerm?: string
    entity?: string
}

const NoSearchResults = ({ searchTerm, entity = "results" }: Props) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>
                No matching {entity} found
            </p>

            {searchTerm && (
                <span className={styles.subtitle}>
                    Try a different search
                </span>
            )}
        </div>
    )
}

export default NoSearchResults
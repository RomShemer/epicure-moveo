import styles from "./Hero.module.css";
import searchIcon from "../../../../assets/General.svg";
import xIcon from "../../../../assets/xIcon.svg";
import { restaurants } from "../../../../mock/restaurants";
import { chefs } from "../../../../mock/chefs";
import { dishes } from "../../../../mock/dishes";
import { heroText } from "../../../../data/heroText";
import { useState, useMemo } from "react";
import backgroundDesktop from "../../../../assets/hero-picture 1.png"
import backgroundMobile from "../../../../assets/Hero.svg"
import { useMediaQuery } from "../../../../hooks/useMediaQuery"


const filterBySearch = <T,>(
    items: T[],
    search: string,
    fields: (keyof T)[]
): T[] => {
    if (!search) return [];

    return items.filter((item) =>
        fields.some((field) => {
            const value = item[field];

            if (Array.isArray(value)) {
                return value.some((v) =>
                    String(v).toLowerCase().includes(search)
                );
            }

            return String(value).toLowerCase().includes(search);
        })
    );
};

type SearchResultItem = {
    id: number;
    name: string;
};

type Section = {
    key: string;
    title: string;
    data: SearchResultItem[];
};

const Hero = () => {
    const isDesktop = useMediaQuery("(min-width: 1024px)")

    const [searchTerm, setSearchTerm] = useState("");

    const normalizedSearch = useMemo(
        () => searchTerm.toLowerCase().trim(),
        [searchTerm]
    );

    const results = useMemo(() => {
        if (!normalizedSearch) {
            return {
                restaurants: [],
                chefs: [],
                dishes: [],
                cuisines: [],
            };
        }

        const matchedRestaurants: SearchResultItem[] =
            filterBySearch(restaurants, normalizedSearch, ["name"])
                .map(r => ({
                    id: r.id,
                    name: r.name,
                }));

        const matchedChefs: SearchResultItem[] =
            filterBySearch(chefs, normalizedSearch, ["firstName", "lastName"])
                .map(c => ({
                    id: c.id,
                    name: `${c.firstName} ${c.lastName}`,
                }));

        const matchedDishes: SearchResultItem[] =
            filterBySearch(dishes, normalizedSearch, ["name"])
                .map(d => ({
                    id: d.id,
                    name: d.name,
                }));

        const matchedCuisines: SearchResultItem[] = [
            ...new Set(
                restaurants
                    .filter(r =>
                        r.cuisine.toLowerCase().includes(normalizedSearch)
                    )
                    .map(r => r.cuisine)
            ),
        ].map((cuisine, index) => ({
            id: index + 1,
            name: cuisine,
        }));

        return {
            restaurants: matchedRestaurants,
            chefs: matchedChefs,
            dishes: matchedDishes,
            cuisines: matchedCuisines,
        };
    }, [normalizedSearch]);

    const hasResults =
        results.restaurants.length > 0 ||
        results.chefs.length > 0 ||
        results.dishes.length > 0 ||
        results.cuisines.length > 0;

    const sections = useMemo<Section[]>(
        () => [
            { key: "restaurants", title: "Restaurants:", data: results.restaurants },
            { key: "cuisines", title: "Cuisines:", data: results.cuisines },
            { key: "chefs", title: "Chefs:", data: results.chefs },
            { key: "dishes", title: "Dishes:", data: results.dishes },
        ],
        [results]
    );

    return (
        <section className={styles.hero}>

            <div className={styles.backgroundWrapper}>
                <img src={isDesktop? backgroundDesktop : backgroundMobile} className={styles.background} />
            </div>


            <div className={styles.overlay}>
                <h1 className={styles.title}>{heroText.title}</h1>

                <div className={styles.searchAndResults}>
                    <div className={styles.search}>
                        <img
                            src={searchIcon}
                            alt="Search Icon"
                            className={styles.searchIcon}
                        />

                        <input
                            type="text"
                            value={searchTerm}
                            placeholder={heroText.placeholder}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        {searchTerm.trim() !== "" && <button className={styles.clearButton} onClick={() => setSearchTerm("")}>
                            <img src={xIcon} alt="Clear Search" className={styles.clearIcon} />
                        </button>}
                    </div>
                    {normalizedSearch && (
                        <div className={styles.resultsDropdown}>
                            {sections.map(
                                (section) =>
                                    section.data.length > 0 && (
                                        <div key={section.key} className={styles.resultsSection}>
                                            <span className={styles.resultsTitle}>
                                                {section.title}
                                            </span>

                                            {section.data.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className={styles.resultItem}
                                                >
                                                    {item.name}
                                                </div>
                                            ))}
                                        </div>
                                    )
                            )}

                            {!hasResults && (
                                <span className={styles.resultsTitle}>
                                    No results found
                                </span>
                            )}
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default Hero;
import styles from "./ChefOfTheWeekSection.module.css";
import type { Chef } from "../../../../types"
import { restaurants } from "../../../../mock";
import RestaurantCarousel from "../../Restaurant/RestaurantCarousel";
import { sectionUIConfig } from "../../../../config/ui.config";
import { chefOfTheWeekText } from "../../../../data/chefOfTheWeek"

type ChefProps = {
  chef: Chef;
};

const ChefOfTheWeekSection = ({ chef }: ChefProps) => {
  if (!chef) return null;

  const chefRestaurants = restaurants.filter(r =>
    chef.restaurantIds.includes(r.id)
  )

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2 className={styles.title}>{chefOfTheWeekText.title}</h2>

        <div className={styles.content}>

          <div className={styles.imageWrapper}>
            <img
              src={chef.image}
              alt={`Portrait of Chef ${chef.firstName} ${chef.lastName}`}
              className={styles.image}
            />
            <div className={styles.nameOverlay}>
              {chef.firstName} {chef.lastName}
            </div>
          </div>

          <div className={styles.textWrapper}>
            <p className={styles.description}>
              {chef.bio}
            </p>
          </div>

        </div>

        <div className={styles.restaurants} >

          <h2 className={styles.restaurantsTitle}>{chef.firstName}{chefOfTheWeekText.restaurantsTitle}</h2>

          <RestaurantCarousel
            restaurants={chefRestaurants}
            cardProps={sectionUIConfig.chefOfTheWeek}
            layout={{
              centered: false,
              showButton: true,
              buttonText: chefOfTheWeekText.buttonText,
              onButtonClick: () => { console.log("All Restaurants (chef) button clicked") }
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ChefOfTheWeekSection;
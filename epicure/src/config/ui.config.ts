import type { RestaurantCardVariant } from "../components/layout/Restaurant/RestaurantCard"

export const sectionUIConfig = {
  popularRestaurants: {
    variant: "medium" as RestaurantCardVariant,
    showRating: true,
    showChefName: true
  },

  chefOfTheWeek: {
    variant: "small" as RestaurantCardVariant,
    showRating: false,
    showChefName: false
  }
}
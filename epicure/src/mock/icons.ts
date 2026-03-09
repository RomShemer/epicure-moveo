import type { IconMeaning } from "../types"
import spicyIcon from "../assets/spicyIcon.svg"
import vegetarianIcon from "../assets/vegetarianIcon.svg"
import veganIcon from "../assets/veganIcon.svg"

export const iconMeanings: IconMeaning[] = [
  { id: 1, label: "Spicy", icon: spicyIcon, field: "isSpicy" },
  { id: 2, label: "Vegetarian", icon: vegetarianIcon, field: "isVegetarian" },
  { id: 3, label: "Vegan", icon: veganIcon, field: "isVegan" }
]
import type { IconMeaning } from "../types/index"
import spicyIcon from "../assets/icons/spicyIcon.svg"
import vegetarianIcon from "../assets/icons/vegetarianIcon.svg"
import veganIcon from "../assets/icons/veganIcon.svg"

export const iconMeanings: IconMeaning[] = [
  { id: "spicy", label: "Spicy", icon:  spicyIcon},
  { id: "vegetarian", label: "Vegetarian", icon: vegetarianIcon },
  { id: "vegan", label: "Vegan", icon: veganIcon }
]
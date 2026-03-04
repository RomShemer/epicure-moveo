import type { Restaurant } from "../types"
import claroImg from "../assets/claro.svg"
import luminaImg from "../assets/Lumina.svg"
import tigerLillyImg from "../assets/tiger-lily.svg"

export const restaurants: Restaurant[] = [
  {
    id: "claro",
    name: "Claro",
    chefId: "ran-shmueli",
    chef: "Ran Shmueli",
    cuisine: "Mediterranean",
    image: claroImg,
    rating: 4
  },
  {
    id: "lumina",
    name: "Lumina",
    chefId: "meir-adoni",
    chef: "Meir Adoni",
    cuisine: "Modern European",
    image: luminaImg,
    rating: 3
  },
  {
    id: "tiger-lilly",
    name: "Tiger Lilly",
    chefId: "yanir-green",
    chef: "Yanir Green",
    cuisine: "Asian Fusion",
    image: tigerLillyImg,
    rating: 4
  }
]
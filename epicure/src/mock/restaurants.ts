import type { Restaurant } from "../types"
import claroImg from "../assets/claro.svg"
import luminaImg from "../assets/Lumina.svg"
import tigerLillyImg from "../assets/tiger-lily.svg"

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Claro",
    chefId: 2,
    chef: "Ran Shmueli",
    cuisine: "Mediterranean",
    image: claroImg,
    rating: 4
  },
  {
    id: 2,
    name: "Lumina",
    chefId: 3,
    chef: "Meir Adoni",
    cuisine: "Modern European",
    image: luminaImg,
    rating: 3
  },
  {
    id: 3,
    name: "Tiger Lilly",
    chefId: 4,
    chef: "Yanir Green",
    cuisine: "Asian Fusion",
    image: tigerLillyImg,
    rating: 4
  },
  {
    id: 4,
    name: "Onza",
    chefId: 1,
    chef: "Yossi Shitrit",
    cuisine: "Mediterranean",
    image: "/images/onza.jpg",
    rating: 4
  },
  {
    id: 5,
    name: "Kitchen Market",
    chefId: 1,
    chef: "Yossi Shitrit",
    cuisine: "Israeli",
    image: "/images/kitchen-market.jpg",
    rating: 5
  },
  {
    id: 6,
    name: "Mashya",
    chefId: 1,
    chef: "Yossi Shitrit",
    cuisine: "Modern Israeli",
    image: "/images/mashya.jpg",
    rating: 4
  }
]
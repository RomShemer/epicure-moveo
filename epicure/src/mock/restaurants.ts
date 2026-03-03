import type { Restaurant } from "../types"

export const restaurants: Restaurant[] = [
  {
    id: "claro",
    name: "Claro",
    chefId: "ran-shmueli",
    chef: "Ran Shmueli",
    cuisine: "Mediterranean",
    image: "/images/claro.jpg",
    rating: 4
  },
  {
    id: "lumina",
    name: "Lumina",
    chefId: "meir-adoni",
    chef: "Meir Adoni",
    cuisine: "Modern European",
    image: "/images/lumina.jpg",
    rating: 3
  },
  {
    id: "tiger-lilly",
    name: "Tiger Lilly",
    chefId: "yanir-green",
    chef: "Yanir Green",
    cuisine: "Asian Fusion",
    image: "/images/tiger-lilly.jpg",
    rating: 4
  }
]
import type { Chef } from "../types"
import yossiImage from "../assets/ShefYossiShitrit.svg"


export const chefs: Chef[] = [
  {
    id: 1,
    firstName: "Yossi",
    lastName: "Shitrit",
    image: yossiImage,
    bio: `Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.`,
    restaurantIds: [4, 5, 6]
  },
  {
    id: 2,
    firstName: "Ran",
    lastName: "Shmueli",
    image: "/images/ran.jpg",
    bio: `Chef Ran Shmueli is known for his modern Mediterranean cuisine,
blending seasonal ingredients with innovative techniques.`,
    restaurantIds: [1]
  },
  {
    id: 3,
    firstName: "Meir",
    lastName: "Adoni",
    image: "/images/meir.jpg",
    bio: `Chef Meir Adoni is a leading figure in contemporary European cuisine,
bringing bold flavors and refined presentation to the table.`,
    restaurantIds: [2]
  },
  {
    id: 4,
    firstName: "Yanir",
    lastName: "Green",
    image: "/images/yanir.jpg",
    bio: `Chef Yanir Green specializes in Asian fusion cuisine,
combining vibrant spices with modern culinary creativity.`,
    restaurantIds: [3]
  }
]
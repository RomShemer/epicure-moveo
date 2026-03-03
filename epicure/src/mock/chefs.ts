import type { Chef } from "../types"

export const chefs: Chef[] = [
  {
    id: "yossi-shitrit",
    name: "Yossi Shitrit",
    image: "/images/yossi.jpg",
    bio: `Chef Yossi Shitrit has been living and breathing his culinary dreams
for more than two decades, including running the kitchen in his first restaurant,
the fondly-remembered Violet, located in Moshav Udim.`,
    restaurantIds: ["onza", "kitchen-market", "mashya"]
  },
  {
    id: "ran-shmueli",
    name: "Ran Shmueli",
    image: "/images/ran.jpg",
    bio: `Chef Ran Shmueli is known for his modern Mediterranean cuisine,
blending seasonal ingredients with innovative techniques.`,
    restaurantIds: ["claro"]
  },
  {
    id: "meir-adoni",
    name: "Meir Adoni",
    image: "/images/meir.jpg",
    bio: `Chef Meir Adoni is a leading figure in contemporary European cuisine,
bringing bold flavors and refined presentation to the table.`,
    restaurantIds: ["lumina"]
  },
  {
    id: "yanir-green",
    name: "Yanir Green",
    image: "/images/yanir.jpg",
    bio: `Chef Yanir Green specializes in Asian fusion cuisine,
combining vibrant spices with modern culinary creativity.`,
    restaurantIds: ["tiger-lilly"]
  }
]
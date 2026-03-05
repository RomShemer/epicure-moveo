import type { Dish } from "../types/index"
import padKiMaoImage from "../assets/pad-ki-mao.svg"
import garbanzoFritoImage from "../assets/garbanzo-frito.svg"
import smokedPizzaImage from "../assets/smoked-pizza.svg"

export const dishes: Dish[] = [
    {
        id: 1,
        name: "Pad Ki Mao",
        restaurantId: 3,
        description:
            "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
        price: 88,
        image: padKiMaoImage,
        isSpicy: true,
        isVegan: false,
        isVegetarian: false
    },
    {
        id: 2,
        name: "Garbanzo Frito",
        restaurantId: 2,
        description:
            "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
        price: 98,
        image: garbanzoFritoImage,
        isSpicy: true,
        isVegan: false,
        isVegetarian: false
    },
    {
        id: 3,
        name: "Smoked Pizza",
        restaurantId: 1,
        description:
            'Basil dough, cashew "butter", demi-glace, bison & radish',
        price: 65,
        image: smokedPizzaImage,
        isSpicy: false,
        isVegan: true,
        isVegetarian: true
    }
]
import type { Dish } from "../types/index"

export const dishes: Dish[] = [
    {
        id: 1,
        name: "Pad Ki Mao",
        restaurantId: 3,
        description:
            "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
        price: 88,
        image: "/images/pad-ki-mao.jpg",
        isSpicy: true
    },
    {
        id: 2,
        name: "Garbanzo Frito",
        restaurantId: 2,
        description:
            "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
        price: 98,
        image: "/images/garbanzo-frito.jpg"
    },
    {
        id: 3,
        name: "Smoked Pizza",
        restaurantId: 1,
        description:
            'Basil dough, cashew "butter", demi-glace, bison & radish',
        price: 65,
        image: "/images/smoked-pizza.jpg",
        isVegetarian: true
    }
]
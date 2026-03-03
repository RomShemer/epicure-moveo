export interface Restaurant {
  id: string
  name: string
  chefId: string
  chef: string
  cuisine: string
  image: string
  rating: number
}

export interface Dish {
  id: string
  name: string
  restaurantId: string
  description: string
  price: number
  image: string
  isSpicy?: boolean
  isVegetarian?: boolean
  isVegan?: boolean
}

export interface Chef {
  id: string
  name: string
  image: string
  bio: string
  restaurantIds: string[]
}

export interface IconMeaning {
  id: string
  label: string
  icon: string
}

export interface AboutContent {
  title: string
  paragraphs: string[]
}
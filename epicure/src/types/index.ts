export interface Restaurant {
  id: number
  name: string
  chefId: number
  chef: string
  cuisine: string
  image: string
  rating: number
}

export interface Dish {
  id: number
  name: string
  restaurantId: number
  description: string
  price: number
  image: string
  isSpicy?: boolean
  isVegetarian?: boolean
  isVegan?: boolean
}

export interface Chef {
  id: number
  name: string
  image: string
  bio: string
  restaurantIds: number[]
}

export interface IconMeaning {
  id: number
  label: string
  icon: string
}

export interface AboutContent {
  title: string
  paragraphs: string[]
}
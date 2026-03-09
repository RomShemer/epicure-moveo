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

export type DishWithRelations = Dish & {
  cuisine: Restaurant["cuisine"]
  chef: Restaurant["chef"]
  restaurantName: Restaurant["name"]
}

export interface Chef {
  id: number
  firstName: string
  lastName: string
  image: string
  bio: string
  restaurantIds: number[]
}

export interface IconMeaning {
  id: number
  label: string
  icon: string
  field: keyof Dish
}

export type StoreButtonData = {
  label: string[]
  image: string
  alt: string
  url?: string
}


export interface AboutContent {
  title: string
  logo: string
  paragraphs: string[]
  storeButtons: StoreButtonData[]
}
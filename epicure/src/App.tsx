//import './App.css'
import Header from './components/layout/Header/Header'
import Hero from './components/layout/Sections/HeroSection/Hero'
import Footer from './components/layout/Footer/Footer'
import PopularRestaurantsSection from './components/layout/Sections/PopularRestaurantSection/PopularRestaurants'
import SignatureDishesSection from './components/layout/Sections/SignatureDishesSection/SignatureDishes'
import IconsMeaningSection from './components/layout/Sections/IconsMeaningSection/IconsMeaningSection'
import ChefOfTheWeekSection from './components/layout/Sections/ChefOfTheWeekSection/ChefOfTheWeekSection'
import AboutSection from './components/layout/Sections/AboutSection/AboutSection'
import { SearchProvider } from "./context/SearchContext";

import { chefs } from './mock/chefs'
import { siteConfig } from './config/siteConfig'


function App() {

  const selectedChef = chefs.find(
    chef => chef.id === siteConfig.chefOfTheWeekId
  )

  return (
    <>
      <SearchProvider>
        <Header />
        <Hero />
        <PopularRestaurantsSection />
        <SignatureDishesSection />
        <IconsMeaningSection />
        <ChefOfTheWeekSection chef={selectedChef!} />
        <AboutSection />
        <Footer />
      </SearchProvider>
    </>
  )
}

export default App

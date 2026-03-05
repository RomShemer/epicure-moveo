//import './App.css'
import Header from './components/layout/Header/Header'
import Hero from './components/layout/Sections/HeroSection/Hero'
import Footer from './components/layout/Footer/Footer'
import PopularRestaurantsSection from './components/layout/Sections/PopularRestaurantSection/PopularRestaurants'
import SignatureDishesSection from './components/layout/Sections/SignatureDishesSection/SignatureDishes'
import IconsMeaningSection from './components/layout/Sections/IconsMeaningSection/IconsMeaningSection'

function App() {

  return (
    <>
    <Header/>
    <Hero/>
    <PopularRestaurantsSection/>
    <SignatureDishesSection/>
    <IconsMeaningSection/>
    <Footer/>
    </>
  )
}

export default App

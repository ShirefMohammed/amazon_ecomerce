import "./App.css";

import Header from './component/Header/Header'
import Hero from './component/Hero/Hero'
import Slider from './component/Slider/Slider'
import Virtual from './component/Virtual/Virtual'
import Products from './component/Products/Products'
import TestimonialHero from './component/Testimonials/Testimonials'
import Footer from './component/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <TestimonialHero />
      <Footer />
    </>
  );
}

export default App;
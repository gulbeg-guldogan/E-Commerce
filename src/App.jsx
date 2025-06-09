import { useState } from 'react'
import "./reset.css";
import './App.css'
import NavigationBar from './components/navBar'
import CarouselPage from './components/carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import PromoCards from './components/cards-1';
import BestsellerProducts from './components/shop-1';
import MostPopular from './components/motopicCard';

function App() {

  return (
    <>
      <div>
        <NavigationBar />
        <CarouselPage />
        <PromoCards />
        <BestsellerProducts />
        <MostPopular />
      </div>

    </>
  )
}

export default App

import { useState } from 'react'
import "./reset.css";
import './App.css'
import NavigationBar from './components/navBar'
import CarouselPage from './components/carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import PromoCards from './components/cards-1';
import ShopCard1 from './components/shop-1'
import MostPopular from './components/motopicCard';
import ShopCard2 from './components/shop-2';
import WoCard from './components/woCard';
import BestSeller from './components/bestSeller';
import Brands from './components/brands';
import Post from './components/post';
import Footer from './components/footer';

function App() {

  return (
    <>
        <NavigationBar />
        <CarouselPage />
        <PromoCards />
        <ShopCard1 />
        <MostPopular />
        <ShopCard2 />
        <WoCard />
        <BestSeller />
        <Brands />
        <Post />
        <Footer />
    </>
  )
}

export default App

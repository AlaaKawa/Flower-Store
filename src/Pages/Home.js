import React from 'react'
import HeroSection from '../components/HeroSection'
import Products from '../components/Products';
import CategorySection from './../components/CategorySection';
import Category2 from './../components/Category2';
import Cactus from './ProductsType.js/Cactus';
import All from './ProductsType.js/All';

export default function Home() {
    return (
        <div>

            <HeroSection />
            <CategorySection />
            <All />



        </div>
    )
}

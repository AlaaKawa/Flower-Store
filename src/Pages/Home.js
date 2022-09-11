import React from 'react'
import HeroSection from '../components/HeroSection'
import Products from '../components/Products';
import CategorySection from './../components/CategorySection';
import Category2 from './../components/Category2';
export default function Home() {
    return (
        <div>
            <HeroSection />

            <CategorySection />

            <Products />
        </div>
    )
}

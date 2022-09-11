import React from 'react'
import Category2 from './Category2'
import Filter from './Filter'
import Products from './Products'
import Cactus from '../Pages/ProductsType.js/Cactus'
import { Link } from 'react-router-dom'

const category = [
    { name: 'All', href: '/all', current: true },
    { name: 'Cactus', href: '/cactus', current: false },
    // { name: 'Marketplace', href: '#' },
    // { name: 'Company', href: '#' },
]
export default function CategorySection() {
    return (
        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            {category.map((item) => (
                <Link
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-indigo-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    }
                    aria-current={item.current ? 'page' : undefined}
                >
                    {item.name}
                </Link>

            ))}

        </div>



    )
}

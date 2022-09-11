import React from 'react'
import Category2 from './Category2'
import Filter from './Filter'
import Products from './Products'
export default function CategorySection() {
    return (
        <div>
            <div class="  md:flex   pt-20 pl-20  ">
                <div className=' lg:flex space-x-8 hidden sm:hidden md:flex space-x-8 '>
                    <div>
                        <a href='#' className='hover:text-red-500' >All</a>
                    </div>
                    <div>
                        <a href='' className='hover:text-red-500'>Cactus</a>
                    </div>
                    <div>
                        <a href='#' className='hover:text-red-500'>Exotic</a>
                    </div>
                    <div>
                        <a href='#' className='hover:text-red-500'>Greens</a>
                    </div>
                    <div>
                        <a href='#' className='hover:text-red-500'>Popular</a>
                    </div>
                    <div>
                        <a href='#' className='hover:text-red-500'>Various</a>
                    </div>
                    <div>
                        <a href='#' className='hover:text-red-500'>Winter</a>
                    </div>
                    <div>
                        <Filter className='hover:text-red-500' />
                    </div>


                </div>
                <div class=" sm:flex justify-center md:flex justify-center  lg:hidden ">
                    <Category2 />
                    <Filter />
                </div>





            </div>


        </div >



    )
}

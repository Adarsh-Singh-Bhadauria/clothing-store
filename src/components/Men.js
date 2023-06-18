import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Men = () => {
  return (
    <>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 mb-24'>

            <Link to="/men/shirts" className='relative'>
                
                <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <p className='font-extrabold text-base px-2 pt-2 sm:font-bold sm:text-3xl sm:px-2 sm:pt-4'>Shirts</p>
                <p className='text-sm font-semibold px-2 sm:text-base sm:font-normal'>Iconic Workwear</p>
                <p className='text-sm font-semibold px-2 mt-3 sm:px-2 sm:text-xl sm:mt-14'>MIN <span className='text-orange-500'>40%</span> OFF</p>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='/images/men/shirtsM.jpg' alt='/' />
                
            </Link>

            <Link to="/men/jeans" className='relative'>
                
                <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <p className='font-extrabold text-base px-2 pt-2 sm:font-bold sm:text-3xl sm:px-2 sm:pt-4'>Jeans</p>
                <p className='text-sm font-semibold px-2 sm:text-base sm:font-normal'>Fresh Styles</p>
                <p className='text-sm font-semibold px-2 mt-3 sm:px-2 sm:text-xl sm:mt-14'>STARTING <span className='text-orange-500'>₹499</span></p>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='/images/men/jeansM.jpg' alt='/' />
                
            </Link>
            
            <Link to="/men/accessories" className='relative'>
                
                <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <p className='font-extrabold text-base px-2 pt-2 sm:font-bold sm:text-3xl sm:px-2 sm:pt-4'>Accessories</p>
                <p className='text-sm font-semibold px-2 sm:text-base sm:font-normal'>Fashion Faves</p>
                <p className='text-sm font-semibold px-2 mt-3 sm:px-2 sm:text-xl sm:mt-14'>FLAT <span className='text-orange-500'>20-30%</span> OFF</p>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='/images/men/accessoryM.jpg' alt='/' />
                
            </Link>

            <Link to="/men/casual_shoes" className='relative'>
                
                <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <p className='font-extrabold text-base px-2 pt-2 sm:font-bold sm:text-3xl sm:px-2 sm:pt-4'>Casual Shoes</p>
                <p className='text-sm font-semibold px-2 sm:text-base sm:font-normal'>Sustainable</p>
                <p className='text-sm font-semibold px-2 mt-3 sm:px-2 sm:text-xl sm:mt-14'>MIN <span className='text-orange-500'>30%</span> OFF</p>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='/images/men/casualshoesM.jpg' alt='/' />
                
            </Link>

        </div>

        <Outlet/>
    </>
  )
}

export default Men
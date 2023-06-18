import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Women = () => {
  return (
    <>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 mb-24'>

            <Link to="/women/footwear" className='relative'>
                
                <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <p className='font-extrabold text-base px-2 pt-2 sm:font-bold sm:text-3xl sm:px-2 sm:pt-4'>Footwear</p>
                <p className='text-sm font-semibold px-2 sm:text-base sm:font-normal'>Flats & Heels</p>
                <p className='text-sm font-semibold px-2 mt-3 sm:px-2 sm:text-xl sm:mt-14'>MIN <span className='text-orange-500'>50%</span> OFF</p>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='/images/women/footwearW.jpg' alt='/' />
                
            </Link>
            
            <Link to="/women/western_wear" className='relative'>
                
                <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <p className='font-extrabold text-base px-2 pt-2 sm:font-bold sm:text-3xl sm:px-2 sm:pt-4'>Western</p>
                <p className='text-sm font-semibold px-2 sm:text-base sm:font-normal'>Curated Styles</p>
                <p className='text-sm font-semibold px-2 mt-3 sm:px-2 sm:text-xl sm:mt-14'>UP TO <span className='text-orange-500'>70%</span> OFF</p>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='/images/women/westernwearW.jpg' alt='/' />
                
            </Link>
            
            <Link to="/women/handbags" className='relative'>
                
                <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <p className='font-extrabold text-base px-2 pt-2 sm:font-bold sm:text-3xl sm:px-2 sm:pt-4'>Handbags</p>
                <p className='text-sm font-semibold px-2 sm:text-base sm:font-normal'>SHOP IT picks</p>
                <p className='text-sm font-semibold px-2 mt-3 sm:px-2 sm:text-xl sm:mt-14'>STARTING <span className='text-orange-500'>₹699</span></p>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='/images/women/handbagW.jpg' alt='/' />
                
            </Link>
            
        </div>

        <Outlet/>
    </>
  )
}

export default Women
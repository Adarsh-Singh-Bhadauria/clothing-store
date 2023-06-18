import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Kids = () => {
  return (
    <>
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 mb-24'>

      <Link to="/kids/ethnics" className='relative'>
                
          <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
          <p className='font-extrabold text-base px-2 pt-2 sm:font-bold sm:text-3xl sm:px-2 sm:pt-4'>Ethnics</p>
          <p className='text-sm font-semibold px-2 sm:text-base sm:font-normal'>Elegant Styles</p>
          <p className='text-sm font-semibold px-2 mt-3 sm:px-2 sm:text-xl sm:mt-14'>UNDER <span className='text-orange-500'>₹1199</span></p>
          </div>
          <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='/images/kids/ethnicsK.jpg' alt='/' />
                
      </Link>
      
      <Link to="/kids/shorts" className='relative'>
                
          <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
          <p className='font-extrabold text-base px-2 pt-2 sm:font-bold sm:text-3xl sm:px-2 sm:pt-4'>Shorts</p>
          <p className='text-sm font-semibold px-2 sm:text-base sm:font-normal'>Wishlist Worthy</p>
          <p className='text-sm font-semibold px-2 mt-3 sm:px-2 sm:text-xl sm:mt-14'>STARTING <span className='text-orange-500'>₹499</span></p>
          </div>
          <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='/images/kids/shortsK.jpg' alt='/' />
                
      </Link>
      
      <Link to="/kids/tshirts" className='relative'>
                
          <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
          <p className='font-extrabold text-base px-2 pt-2 sm:font-bold sm:text-3xl sm:px-2 sm:pt-4'>T-shirts</p>
          <p className='text-sm font-semibold px-2 sm:text-base sm:font-normal'>Popular Picks</p>
          <p className='text-sm font-semibold px-2 mt-3 sm:px-2 sm:text-xl sm:mt-14'><span className='text-orange-500'>40-50%</span> OFF</p>
          </div>
          <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='/images/kids/tshirtK.jpg' alt='/' />
                
      </Link>
      
      <Link to="/kids/flip_flops" className='relative'>
                
          <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
          <p className='font-extrabold text-base px-2 pt-2 sm:font-bold sm:text-3xl sm:px-2 sm:pt-4'>Flip Flops</p>
          <p className='text-sm font-semibold px-2 sm:text-base sm:font-normal'>Premium Styles</p>
          <p className='text-sm font-semibold px-2 mt-3 sm:px-2 sm:text-xl sm:mt-14'>UP TO <span className='text-orange-500'>50%</span> OFF</p>
          </div>
          <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='/images/kids/sandalsK.jpg' alt='/' />
                
      </Link>
      
    </div>

    <Outlet/>
    </>
  )
}

export default Kids
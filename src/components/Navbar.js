import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-full mx-auto px-4 text-black bg-orange-50'>
      <div className='flex items-center'>
        <img className='h-10 px-4' src='/images/logo.png' alt='logo'/>
        <p className='text-xl font-extrabold'>SHOP IT</p>
      </div>
      <ul className='hidden md:flex'>
        <Link to="/men" className='p-4 font-semibold hover:text-red-700 duration-300 z-10'>MEN</Link>
        <Link to="/women" className='p-4 font-semibold hover:text-red-700 duration-300'>WOMEN</Link>
        <Link to="/kids" className='p-4 font-semibold hover:text-red-700 duration-300'>KIDS</Link>
        <Link to="/beauty" className='p-4 font-semibold hover:text-red-700 duration-300'>BEAUTY</Link>
        <Link to="/living" className='p-4 font-semibold hover:text-red-700 duration-300'>LIVING</Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'z-10 flex flex-col fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'z-10 ease-in-out duration-500 fixed left-[-200%]'}>
          <div className='flex items-center'>
            <img className='h-10 px-4 my-8' src='/images/logo.png' alt='logo'/>
            <p className='text-xl font-extrabold'>SHOP IT</p>
          </div>
          <Link to="/men" className='p-4 border-b border-gray-600 font-semibold hover:text-red-700 duration-300 z-10'>MEN</Link>
          <Link to="/women" className='p-4 border-b border-gray-600 font-semibold hover:text-red-700 duration-300'>WOMEN</Link>
          <Link to="/kids" className='p-4 border-b border-gray-600 font-semibold hover:text-red-700 duration-300'>KIDS</Link>
          <Link to="/beauty" className='p-4 border-b border-gray-600 font-semibold hover:text-red-700 duration-300'>BEAUTY</Link>
          <Link to="/living" className='p-4 font-semibold hover:text-red-700 duration-300'>LIVING</Link>
      </ul>
    </div>
  );
};

export default Navbar;
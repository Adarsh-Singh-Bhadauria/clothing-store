import React from 'react'
import { casualShoes_data } from '../data/data'

const CasualShoes = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
    {casualShoes_data.map((item, index) => (
      <div
        key={index}
        className='border shadow-lg rounded-lg'
      >
        <img
          src={item.image}
          alt={item.name}
          className='w-full h-[200px] object-cover rounded-t-lg'
        />
        <div className='flex justify-between px-2 py-4'>
          <p className='font-bold'>{item.name}</p>
        </div>
      </div>
    ))}
  </div>
  )
}

export default CasualShoes
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const SearchBar = () => {
  return (
    <div className='flex items-center border-2 border-solid border-[#EBEBED] px-6 py-2 rounded-full'>
      <input type='text' placeholder='Search' className='placeholder-black focus:outline-none' />
      <FaArrowRight />
    </div>
  )
}

export default SearchBar
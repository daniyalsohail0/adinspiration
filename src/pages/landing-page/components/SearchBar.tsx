import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SearchBar = () => {
  return (
    <Link to='/search' className='flex justify-between items-center border-2 border-solid border-[#EBEBED] px-6 py-2 rounded-full w-1/4'>
      <span className='text-sm'>Search</span>
      <FaArrowRight />
    </Link>
  )
}

export default SearchBar
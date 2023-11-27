import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <nav className='w-full flex justify-center items-center'>
            <div className='flex justify-between w-3/4 py-3 m-2'>
                <ul className='flex gap-4 text-sm font-semibold'>
                    <li>Gallery</li>
                    <li>+ Upload new ad</li>
                </ul>
                <div>
                    <h1 className='font-semibold text-xl'>
                        <Link to='/'>ADINSPIRATION</Link>
                    </h1>
                </div>
                <div>
                    <button className='text-sm hover:underline'>
                        <Link to='/login'>Log in</Link>
                    </button>
                    <span className='mx-3 font-[#9E9E9E]'> | </span>
                    <button className='text-sm bg-black rounded-full text-white py-2 px-4'>
                        <Link to='/signup'>
                            Sign up
                        </Link>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
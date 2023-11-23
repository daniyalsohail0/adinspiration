import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full flex justify-center items-center'>
            <div className='flex justify-between w-3/4 py-3 m-2'>
                <ul className='flex gap-4 text-sm font-semibold'>
                    <li>Gallery</li>
                    <li>+ Upload new ad</li>
                </ul>
                <div>
                    <h1>ADINSPIRATION</h1>
                </div>
                <div>
                    <button className='text-sm hover:underline'>Log in</button>
                    <span className='mx-3 font-[#9E9E9E]'> | </span>
                    <button className='text-sm bg-black rounded-full text-white py-2 px-4'>Sign up</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#f6f6f6] flex flex-col justify-center items-center bottom-0'>
            <div className='w-3/4 flex justify-between items-center py-8 m-2'>
                <div className='w-1/2 flex flex-col items-start'>
                    <h1 className='text-3xl'>ADINSPIRATION</h1>
                    <p>The best video ad inspiration in one place</p>
                </div>
                <div className='w-1/2 flex justify-between'>
                    <ul className='text-sm flex flex-col gap-2'>
                        <li className='font-semibold'>Menu</li>
                        <li>Gallery</li>
                        <li>Support</li>
                    </ul>
                    <ul className='text-sm flex flex-col gap-2'>
                        <li className='font-semibold'>Social</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                    <div>
                        <button className='text-sm bg-black rounded-full text-white py-2 px-4'>+ Submit your work</button>
                    </div>
                </div>
            </div>
            <hr className='border-1 border-solid border-[#EBEBED] w-3/4' />
            <div className='text-xs flex justify-between p-2 m-2 w-3/4'>
                <p>Adinspiration | Copyright 2023</p>
                <div className='flex gap-2'>
                    <p>Privacy Policy</p>
                    <span>|</span>
                    <p>Terms of Service</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react'

interface CardData {
    imgUrl: string;
    userImg: string;
    username: string;
}

const Card: React.FC<CardData> = ({imgUrl, userImg, username}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='bg-[#F8F7F4] md:w-[280px] md:h-[500px] flex flex-col justify-center items-center rounded-2xl shadow-lg'>
            <img src={imgUrl} alt='card' className='rounded-2xl md:w-[250px] md:h-[450px]' />
        </div>
        <div className='flex items-center justify-center pt-5 gap-2'>
            <img src={userImg} alt='user' />
            <p className='text-sm text-gray-600'>@{username}</p>
        </div>
    </div>
  )
}

export default Card
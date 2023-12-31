import React from 'react'
import googleLogo from '../../../assets/google.svg'

const GoogleLogin: React.FC = () => {
  return (
    <button className='flex justify-center items-center gap-4 w-full border-2 border-solid border-[#EBEBED] p-2 rounded-3xl'>
        <img src={googleLogo} alt='google-logo' />
        <p className='font-semibold'>Continue with Google</p>
    </button>
  )
}

export default GoogleLogin
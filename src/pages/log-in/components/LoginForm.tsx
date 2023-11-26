import React from 'react'

const LoginForm: React.FC = () => {
  return (
    <form className='flex flex-col justify-center items-center'>
        <input type='email' placeholder='Enter email address' />
        <input type='password' placeholder='Your password' />
    </form>
  )
}

export default LoginForm
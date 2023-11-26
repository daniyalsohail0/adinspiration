import React from 'react'
import Layout from '../../layout'
import GoogleLogin from './components/GoogleLogin'
import LoginForm from './components/LoginForm'

const LogIn: React.FC = () => {
  return (
    <Layout>
        <div className='flex justify-center items-center w-full'>
            <div className='w-1/3 flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-semibold'>WELCOME BACK</h1>
                <hr />
                <GoogleLogin />
                <LoginForm />
            </div>
        </div>
    </Layout>
  )
}

export default LogIn
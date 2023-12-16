import React, { ReactNode } from 'react'

import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex-1'>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout
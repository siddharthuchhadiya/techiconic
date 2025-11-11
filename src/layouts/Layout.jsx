import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>  
    <div className='bg-black text-white min-h-screen flex flex-col'>
    <Header />
        <main className='flex-1 w-full'>
            <Outlet />
        </main>
    <Footer />
    </div>
    </>
    
  )
}

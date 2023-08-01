import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from './sections/Footer'
import Header from './sections/Header'


export default function AppLayout() {
  return (
    <>
      <Header />
      <Outlet /> {/* Shows Child pages here  */}
      <Footer />
    </>
  )
}


/*
    APP_LAYOUT Providers
    - Header
    - Footer    
*/
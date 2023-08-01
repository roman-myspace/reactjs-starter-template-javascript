import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Routes from './routes/routes';

function App() {

  return (
    <>
      <Routes />
      <Outlet />
    </>
  )
}

export default App

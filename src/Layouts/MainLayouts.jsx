import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from "react-router-dom"

function MainLayouts() {
  return (
    <div>
        
        <Navbar/>
        <main className='pt-15 '>
            <Outlet/>
        </main>
        <Footer/>
        
        
        </div>
  )
}

export default MainLayouts
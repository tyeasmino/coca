import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import HeroSectionComponent from './components/HeroSectionComponent'

function App() { 

  return (
    <>
      <header>
        <section className='container'>
            <NavbarComponent />
            <div className='w-[1200px] h-[0.5px] bg-[#ffffff80] mx-auto '></div>
            <HeroSectionComponent />
        </section>
      </header>
    </>
  )
}

export default App

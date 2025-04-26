import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import HeroSectionComponent from './components/HeroSectionComponent'
import OurUserFriendlyComponent from './components/OurUserFriendlyComponent'
import MasterTheArtComponent from './components/MasterTheArtComponent'

function App() {

  return (
    <>
      {/* Header Section */}

      <header>
        <section className='container'>
          <NavbarComponent />
          <div className='w-[1200px] h-[0.5px] bg-[#ffffff80] mx-auto '></div>
          <HeroSectionComponent />
        </section>
      </header>



      <main>
        {/* Our User Friendly Section */}
        <OurUserFriendlyComponent />


        {/* Master the Art Section */}
        <MasterTheArtComponent />





      </main>
    </>
  )
}

export default App

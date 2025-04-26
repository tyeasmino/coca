import React from 'react'
import logoC from '../assets/01_navbar/logo.png'
import cocaWhiteText from '../assets/01_navbar/cocaWhiteText.png'
import GreenButton from './smallComponents/GreenButton'


const NavbarComponent = () => {
    return (
        <nav className='py-6 flex items-center justify-between'>
            <div className="nav-left flex gap-5 items-center">
                <div className='w-[42px] h-[42px] bg-[#23F0A9] flex items-center justify-center rounded-full'>
                    <img src={logoC} alt="logoC" />
                </div>
                <img src={cocaWhiteText} alt="cocaWhiteText" />
            </div>
            <div className="hidden md:block nav-middle">
                <ul className='flex gap-10 font-semibold text-white'>
                    <li><a href="/">Home</a></li>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="hidden md:block nav-right">
                <ul className='flex gap-8 items-center font-semibold'>
                    <li className='hidden md:block text-white'>Login</li>
                    <li><GreenButton btnText="Sign Up free" /></li> 
                </ul>
            </div>
        </nav>
    )
}

export default NavbarComponent
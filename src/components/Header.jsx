import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/header-logo.png'

const Header = () => {
  return (
    <header className='px-5 py-8 bg-white shadow-md'>
        <nav className='flex px-5 justify-between items-center'>
            <Link to='/'>
                <img src={Logo} alt="logo" className='h-10' />
            </Link>

            <div className='flex items-center gap-5 text-black font-semibold'>
                <ul className='flex gap-5'>
                    <li className='hover:text-custom-primary cursor-pointer hover:shadow-sm'>Home</li>
                    <li className='hover:text-custom-primary cursor-pointer hover:shadow-sm'>About</li>
                    <li className='hover:text-custom-primary cursor-pointer hover:shadow-sm'>Service</li>
                    <li className='hover:text-custom-primary cursor-pointer hover:shadow-sm'>Service</li>
                    <li className='hover:text-custom-primary cursor-pointer hover:shadow-sm'>Gallery</li>
                    <li className='hover:text-custom-primary cursor-pointer hover:shadow-sm'>Promotions</li>
                    <li className='hover:text-custom-primary cursor-pointer hover:shadow-sm'>Blogs</li>
                    <li className='hover:text-custom-primary cursor-pointer hover:shadow-sm'>Contact Us</li>
                </ul>
                <button className='px-5 py-2 rounded-md bg-custom-primary text-white'>Appointment</button>
            </div>
        </nav>
    </header>
  )
}

export default Header
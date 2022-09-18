import React from 'react'
import logo from './assets/logo.svg'

function Navbar() {
  return (
    <nav className='flex justify-between items-center py-6 px-32 text-my-green bg-my-white '>
        <div>
            <img src={logo} alt="Company's branding" />
        </div>
        <ul className='flex text-base font-medium font-Inter'>
            <li className='mr-10'>Meat</li>
            <li className='mr-10'>Vegan</li>
            <li className='mr-10'>Cheap</li>
            <li className='mr-10'>Fast</li>
            <li className='mr-10'>Junk</li>
            <li>Healthy</li>
        </ul>
        <div>
            <button className='mr-10 font-Inter font-medium text-base text-my-orange '>Sign in</button>
            <button className='py-3 px-6 font-Inter text-base text-my-lightgreen bg-my-orange rounded-full'>Sign up</button>
        </div>
    </nav>
  )
}

export default Navbar
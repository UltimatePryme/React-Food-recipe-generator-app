import React from 'react'
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom'
import logo from './assets/logo.svg'

function Navbar() {
  return (
    <nav className='flex justify-between items-center py-6 px-32 text-my-green bg-my-white '>
        <div>
            <NavLink to="/"><img src={logo} alt="Company's branding" /></NavLink>
        </div>
        <ul className='flex text-base font-medium font-Inter'>
            <NavLink to="/meat"><li className="mr-10 active:text-my-orange hover:text-my-lime">Meat</li></NavLink>
            <NavLink to="/vegan"><li className='mr-10 accent-my-lime'>Vegan</li></NavLink>
            <NavLink to="/fast"><li className='mr-10'>Fast</li></NavLink>
            <NavLink to="/gluten-free"><li className='mr-10'>Gluten Free</li></NavLink>
            <NavLink to="/diary-free"><li className='mr-10'>Diary Free</li></NavLink>
            <NavLink to="/healthy"><li>Healthy</li></NavLink>
        </ul>
        <div>
            <NavLink to="/random"><button className='py-3 px-6 font-Inter text-base text-my-lightgreen bg-my-orange rounded-full'>Generate Random</button></NavLink>
        </div>
    </nav>
  )
}

export default Navbar
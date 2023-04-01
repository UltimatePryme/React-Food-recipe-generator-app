import React from 'react'
import ThpLogo from './assets/ThpLogo.svg'
import searchIcon from './assets/searchIcon.svg'

function ThpAr() {
  return (
    <>
        <nav className='flex items-center justify-between px-28 py-12'>
            <div className='flex gap-10 items-center'>
                <img src={ThpLogo} alt="the logo of the company"/>
                <div className=' relative'>
                    <img src={searchIcon} alt="searchIcon" className='absolute top-0 right-2 pt-1' />
                    <input type='search' placeholder='search' className=' bg-nav-grey px-5 py-1 rounded-full'/>
                </div>
            </div>
            <div className='flex gap-10 items-center'>
                <ul className='flex items-center gap-10 text-sm'>
                    <li>About Us</li>
                    <li>Our Businesses</li>
                    <li>Investor Relations</li>
                    <li>Career</li>
                    <li>CSR</li>
                    <li>News Room</li>
                    <li>Contact</li>
                </ul>
                <button className='bg-nav-black px-10 py-3 rounded-full text-my-white text-sm '>Book Now</button>
            </div>
        </nav>
        <main>

        </main>
    </>
  )
}

export default ThpAr
import React from 'react'
import logo from './assets/logoWhite.svg'
import arrow from './assets/arrow.svg'
import twitter from './assets/twitter.svg'
import instagram from './assets/instagram.svg'
import facebook from './assets/facebook.svg'
import linkedIn from './assets/linkedin.svg'
import youtube from './assets/youtube.svg'

function Footer() {
  return (
    <section className='bg-my-green py-10 grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-1 px-20 justify-center'>
        <form className='grid grid-cols-1 gap-3 '>
            <img src={logo} alt="" className='mb-5'/>
            <h1 className=' font-Inter font-medium text-base text-my-lightgreen mb-5'>Subscribe to our newsletter to get regular updates</h1>
            <div className='grid grid-cols-2 gap-3'>
                <input type="text" placeholder='First Name' className='w-full h-auto py-3 px-4 rounded-full'></input>
                <input type="text" placeholder='Last Name' className='w-full h-auto py-3 px-4 rounded-full'></input>
            </div>
            <input type="text" placeholder='Email address' className='w-full h-auto py-3 px-4 rounded-full'></input>
            <span>
                <button className='bg-my-orange px-8 py-3 rounded-full font-Inter text-sm text-my-lightgreen flex justify-between items-center'>
                    <span className='mr-5'>SUBSCRIBE</span> <span><img src={arrow} alt="an arrow" /></span>
                </button>
            </span>
        </form>
        <div className='relative mt-20 mb-10'>
            <div className='w-full h-8 absolute bottom-0 flex flex-col sm:justify-start md:justify-start xl:justify-end'>
                <ul className='flex sm:justify-start md:justify-start xl:justify-end gap-3 mb-5 '>
                    <li><img src={twitter} alt="instagram" /></li>
                    <li><img src={instagram} alt="instagram" /></li>
                    <li><img src={facebook} alt="instagram" /></li>
                    <li><img src={linkedIn} alt="instagram" /></li>
                    <li><img src={youtube} alt="instagram" /></li>
                </ul>
                <p className='font-inter sm:text-leftt md:text-leftt lg:text-leftt xl:text-right  text-my-lightgreen'>© 2022 fooddie. All rights reserved.</p>
            </div>
        </div>

    </section>
  )
}

export default Footer
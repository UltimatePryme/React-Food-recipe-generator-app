import React from 'react'
import Herobg from './assets/Herobg.png'
import{NavLink } from "react-router-dom"

function Hero() {
  return (
    <main className='relative'>
        <section className=' min-w-full min-h-screen flex items-center justify-center bg-gradient-to-t from-my-green to-my-green bg-blend-multiply relative'>
            <img src={Herobg} alt="main background" className='absolute z-0 object-cover w-full h-screen mix-blend-multiply ' />
            <div className='flex flex-col items-center justify-center mt-10 absolute z-9 pt-20'>
                <div>
                    <h1 className=' font-Inter font-black text-6xl text-my-lightgreen text-center mb-10'>The super fast<br/> meal recipe generator</h1>
                    <p className=' font-Inter font-medium text-2xl text-my-lightgreen text-center mb-3'>Made by Lazy Techies for:</p>
                    <h2 className=' font-Inter font-black text-2xl text-my-lime text-center'>Students</h2> 
                </div>
                <NavLink to="/random"><button className='mt-10 py-5 px-16 font-Inter text-base text-my-lightgreen bg-my-orange rounded-full'>Generate a Meal</button></NavLink>
            </div>
        </section>
    </main>
  )
}

export default Hero
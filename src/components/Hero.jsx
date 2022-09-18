import React from 'react'
import Herobg from './assets/Herobg.png'

function Hero() {
  return (
    <main>
        <section className=' min-w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-my-green to-my-lightgreen '>
            <div className='flex flex-col items-center justify-center mt-10 '>
                <div>
                    <h1 className=' font-Inter font-black text-6xl text-my-lightgreen text-center mb-10'>The super fast<br/> meal recipe generator</h1>
                    <p className=' font-Inter font-medium text-2xl text-my-lightgreen text-center mb-3'>Made by Lazy Techies for:</p>
                    <h2 className=' font-Inter font-black text-2xl text-my-lime text-center'>Students</h2> 
                </div>
                <button className='mt-10 py-5 px-16 font-Inter text-base text-my-lightgreen bg-my-orange rounded-full'>Generate a Meal</button>
                <button className='mt-5 py-5 px-16 font-Inter text-base text-my-lightgreen border-my-orange border-2 border-solid rounded-full'>Picks of the day</button>
            </div>
        </section>
    </main>
  )
}

export default Hero
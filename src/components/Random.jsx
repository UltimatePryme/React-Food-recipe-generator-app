import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Randombg from './assets/Randombg.jpg'


function Random() {
        const [randomList, setRandomList] = useState([])
        
        useEffect(() => {
            getRandom();
        }, [])

        const getRandom = async() => {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=c422330075c64e6bb8e232b82312270a&number=14`);
            const apiData = await api.json();
                setRandomList(apiData.recipes)
                console.log(apiData.recipes)
        }


  return (
    <main className='bg-my-lightgreen'>
        <section className='relative'>
            <div  className=' bg-gradient-to-t from-my-green mix-blend-multiply  w-full h-[26rem] absolute'>
                <h1>Meals you can <br/> make in less than 5 minutes</h1>
            </div>
            <img src={Randombg} alt="hero section" className='w-full h-[26rem] object-cover' />
        </section>
        <section  className='px-32 w-full h-3/6 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-1 z-0'>

            {randomList.map((recipe) => {
                return(                    
                    <div className='bg-my-white w-[28rem] h-[29rem] mt-10 rounded-2xl' key={recipe.id}>
                        <div className=' relative flex flex-col items-center justify-center pt-10'>
                            <div className='absolute bottom-0 left-0 right-6 bg-gradient-to-b from-my-white backdrop-blur w-[18rem] ml-[5rem] h-52 justify-center p-5 rounded-xl' key={recipe.id}>
                                <h1 className='font-Inter font-extrabold text-base mb-2'>{recipe.title}</h1>
                                <ul className='flex'>
                                    <li className='py-1 px-3 mr-1 font-Inter font-normal text-xs text-my-lightgreen bg-my-lime rounded-2xl'>{recipe.diets[0] || "general"}</li>
                                </ul>
                                <p className='font-Inter font-medium text-xs mt-2'>{recipe.summary}</p>
                            </div>
                            <img src={recipe.image} alt={recipe.title} className="w-[23rem] h-[24rem] object-cover rounded-xl" />
                        </div>
                    </div>
                )
            })}             
        </section>
                    
    </main>
  )
}

export default Random
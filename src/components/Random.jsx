import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Randombg from './assets/Randombg.jpg'
import parse from 'html-react-parser'


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
    <main className='bg-my-lightgreen grid grid-cols-1 justify-center'>
        <section className=''>
            <div  className=' bg-gradient-to-t from-my-green  w-full h-[26rem] relative'>
                <img src={Randombg} alt="hero section" className='w-full h-[26rem] object-cover absolute  mix-blend-multiply' />
                <div className='flex items-center justify-center'>
                    <h1 className='absolute mb-16 bottom-5 left-0 right-0 z-2 font-Inter font-black md:text-4xl lg:text-4xl xl:text-6xl text-center text-my-lightgreen'>Meals you can <br/> make in less than 5 minutes</h1>
                </div>
            </div>
        </section>
        <section  className='px-32 pb-10 w-full h-3/6 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-1 z-0 justify-center'>

            {randomList.map((recipe) => {
                return(                    
                    <div className='bg-my-white w-[28rem] h-[29rem] mt-10 rounded-2xl cursor-pointer hover:shadow-xl'  key={recipe.id}>
                        <div className=' relative flex flex-col items-center justify-center pt-10'>
                            <div className='absolute bottom-0 left-0 right-6 bg-gradient-to-b  from-my-white hover:bg-my-lime backdrop-blur w-[18rem] ml-[5rem] h-52 justify-center p-5 rounded-t-xl' key={recipe.id}>
                                <h1 className='font-Inter font-extrabold text-base mb-2'>{recipe.title}</h1>
                                <ul className='flex'>
                                    <li className='py-1 px-3 mr-1 font-Inter font-normal text-xs text-my-lightgreen bg-my-lime rounded-2xl'>{recipe.diets[0] || "general"}</li>
                                </ul>
                                <p className='font-Inter font-medium text-xs mt-2'>{parse(recipe.summary.substring(0, 150) + "...")}</p>
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
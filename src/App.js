import React from 'react'
import './app.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Hero from './components/Hero'
import Meat from './components/Meat'
import Navbar from './components/Navbar'
import Random from './components/Random'
import Vegan from './components/Vegan'
import GlutenFree from './components/GlutenFree';
import Fast from './components/Fast';
import DiaryFree from './components/DiaryFree';
import Healty from './components/Healthy';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative'>
        <nav  className="fixed left-0 right-0 z-10">
          <Navbar/>
        </nav>

        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/random' element={<Random />} />
          <Route path='/meat' element={<Meat />} />
          <Route path='/vegan' element={<Vegan />} />
          <Route path='/fast' element={<Fast />} />
          <Route path='/gluten-free' element={<GlutenFree />} />
          <Route path='/diary-free' element={<DiaryFree />} />
          <Route path='/healthy' element={<Healty />} />
        </Routes>

        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
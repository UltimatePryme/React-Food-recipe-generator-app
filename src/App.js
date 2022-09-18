import React from 'react'
import './app.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Random from './components/Random'

const App = () => {
  return (
    <div className='App relative'>
      <nav  className="fixed left-0 right-0 z-10">
        <Navbar/>
      </nav>
      {/* <Hero /> */}
      <Random />
    </div>
  )
}

export default App
import { useState } from 'react'
import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Game from './components/Game/Game'
import Header from './components/Header/Header'

function App() {
 

  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Game/>
    </div>
  )
}

export default App

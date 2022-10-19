import { useState } from 'react'
import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Game from './components/Game/Game'
import Header from './components/Header/Header'
import Tournaments from './components/Tournaments/Tournaments'

function App() {
 

  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Game/>
      <Tournaments/>
    </div>
  )
}

export default App

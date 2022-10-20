import { useState } from 'react'
import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
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
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

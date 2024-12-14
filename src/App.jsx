import { useState } from 'react'
import './App.css'
import { Navbar } from './navbar'
import Video from './video'
import Items from './items'
function App() {

  return (
    <>
     <Navbar/>
     <Video/>
     <Items/>
    </>
  )
}

export default App

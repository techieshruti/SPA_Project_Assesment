import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Products'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Product/>
    </div>
  )
}

export default App
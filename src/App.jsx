import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Products'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Product/>
    </div>
  )
}

export default App
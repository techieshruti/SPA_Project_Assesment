import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProductCard from './components/ProductCard'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Home/> */}
      <ProductCard/>
    </div>
  )
}

export default App
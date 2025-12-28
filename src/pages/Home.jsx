import React from 'react'
import Button from '../components/Button'

const Home = () => {
  return (
    <div>
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-end px-6 bg-[url('https://i.pinimg.com/736x/43/d1/35/43d135d38689527d117c56015d80a458.jpg')] bg-no-repeat bg-cover">
      <div className="max-w-md mr-20 p-6 text-center rounded-2xl
        bg-white/30 backdrop-blur-md shadow-lg border border-white/40">
        {/* heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
           Welcome to <span className="text-slate-800">ShopEase</span>
        </h1>

        <p className="mb-6">
          you will find best quality of products here.
        </p>
        <Button text="Explore Products"/>
      </div>
      </div>
    </div>
  )
}

export default Home
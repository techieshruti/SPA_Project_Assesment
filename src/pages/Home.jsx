import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        {/* heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Welcome to Product Explorer
        </h1>

        <p className="text-slate-600 mb-6">
          api.
        </p>
        <button className="bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-800 transition">
          Explore Products
        </button>
      </div>
      </div>
    </div>
  )
}

export default Home
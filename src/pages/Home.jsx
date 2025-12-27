import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Welcome to Product Explorer
        </h1>
        <p className="text-slate-600 mb-6">
          Browse products fetched from a public API and view detailed information
          using a clean and responsive single page application.
        </p>
      </div>
      </div>
    </div>
  )
}

export default Home
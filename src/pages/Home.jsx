import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-end px-6 bg-[url('https://i.pinimg.com/736x/43/d1/35/43d135d38689527d117c56015d80a458.jpg')] bg-no-repeat bg-cover">
      <div className="max-w-xl text-right">
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
import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-end px-6 bg-[url('https://i.pinimg.com/736x/43/d1/35/43d135d38689527d117c56015d80a458.jpg')] bg-no-repeat bg-cover">
      <div className="max-w-md mr-20 p-6 text-center rounded-2xl
        bg-white/70 backdrop-blur-md shadow-lg border border-white/40">
        {/* heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
           <h2>Welcome to</h2> ShopEase
        </h1>

        <p className="mb-6">
          you will find best quality of products here.
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
import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <button className="bg-slate-900 text-white px-4 py-2 mt-4 rounded-md hover:bg-slate-800 transition">
          {text}
        </button>
    </div>
  )
}

export default Button
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

export const Sidebar = () => {
  return (
    <div className="p-4 flex flex-col w-[275px] border-r border-solid border-gray-300">
      <div className="logo">
        <img src={logo} alt="react spotify muse logo" />
      </div>

      <div className="mt-[72px] flex flex-col">
        <Link
          to="/"
          className="text-gray-100 font-bold text-lg p-2 rounded px-2.5 hover:bg-gray-400">
          Getting Started
        </Link>
        <Link
          to="/"
          className="text-gray-100 font-bold text-lg p-2 rounded px-2.5 hover:bg-gray-400 mt-2">
          Contributing
        </Link>

        <div className="font-bold prose text-sm px-2.5 py-8">Components</div>
      </div>
    </div>
  )
}

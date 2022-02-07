import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

export const Sidebar = () => {
  return (
    <div className="p-4 py-10 flex flex-col w-[275px] border-r border-solid border-gray-300 h-full max-h-screen sticky top-0">
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
          to="/contributing"
          className="text-gray-100 font-bold text-lg p-2 rounded px-2.5 hover:bg-gray-400 mt-2">
          Contributing
        </Link>

        <div className="font-bold text-sm px-2.5 pt-8 text-gray-200">
          Components
        </div>

        <Link
          to="/components/now-playing"
          className="text-gray-100 font-bold text-lg p-2 rounded px-2.5 hover:bg-gray-400 mt-2">
          NowPlaying
        </Link>
      </div>
    </div>
  )
}

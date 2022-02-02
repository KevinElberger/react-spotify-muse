import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import './App.css'

function App() {
  return (
    <div className="App bg-gray-500">
      <BrowserRouter>
        <Sidebar />

        <div className="wrapper p-10 flex w-full">
          <Routes>
            {/* <Route exact path="/" element={<MyDocument />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

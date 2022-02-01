import React, { useState } from 'react'
import { NowPlaying } from 'react-spotify-muse'
import logo from './logo.svg'
import './App.css'

function App() {
  const [token, setToken] = useState('')
  const handleError = (err) => {
    console.error(err)
  }
  const handleChange = (event) => {
    setToken(event.target.value)
  }

  return (
    <div className="App bg-gray-500">
      <div className="logo">
        <img src={logo} alt="react spotify muse logo" />
      </div>

      <div className="wrapper">
        <div className="token-container">
          <input
            type="text"
            value={token}
            onChange={handleChange}
            className="bg-gray-400 border-gray-300 text-gray-100"
            placeholder="Enter a Spotify Web API token"
          />
        </div>
        <NowPlaying onError={handleError} token={token} />
      </div>
    </div>
  )
}

export default App

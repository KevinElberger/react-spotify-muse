import React, { useState } from 'react'
import { NowPlaying } from '@kevinelberger/react-spotify-muse'
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
    <div className="App">
      <div className="logo">
        <img src={logo} alt="react spotify muse logo" />
      </div>

      <div className="wrapper">
        <div className="token-container">
          <input
            type="text"
            value={token}
            onChange={handleChange}
            placeholder="Enter a Spotify Web API token"
          />
        </div>
        <NowPlaying onError={handleError} token={token} />
      </div>
    </div>
  )
}

export default App

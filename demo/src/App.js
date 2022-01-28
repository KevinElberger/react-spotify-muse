import React from 'react'
import { NowPlaying } from '@kevinelberger/react-spotify-muse'
import './App.css'

function App() {
  const handleError = (err) => {
    console.log('error!: ', err)
  }

  return (
    <div className="App">
      <NowPlaying onError={handleError} token="" />
    </div>
  )
}

export default App

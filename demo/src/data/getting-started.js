export const installation = `npm i react-spotify-muse
# or
yarn add react-spotify-muse`

export const basicUsage = `import React from 'react'
import { NowPlaying } from 'react-spotify-muse'

const App = () => {
  const token = 'aExjz492zo04uc...'

  return (
    <NowPlaying token={token} />
  )
}`

import React, { useEffect, useState } from 'react'
import { getNowPlaying } from '../../../lib/spotify'
import { SpotifyApiError, SpotifyApiResponse, Track } from '../../types'
import Logo from './logo.svg'

interface Props {
  token: string
  showRecentTracks?: boolean
  onError: (error: SpotifyApiError) => void
}

export const NowPlaying: React.FC<Props> = ({
  token,
  onError,
  showRecentTracks = false,
}: Props): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true)
  const [currentTrack, setCurrentTrack] = useState<Track>()

  const fetchData = async () => {
    const response = await getNowPlaying(token)
    if (response.error) {
      onError(response)
    }
    setCurrentTrack((response as SpotifyApiResponse).item)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return (
    <div className="rsm-container">
      <Logo />
      <div>Player 2{loading && 'loading...'}</div>
    </div>
  )
}

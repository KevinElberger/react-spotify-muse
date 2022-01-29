import React, { useEffect, useState } from 'react'
import { getNowPlaying } from '../../spotify'
import { SpotifyApiError, SpotifyApiResponse, Track } from '../../types'
import Logo from './logo.svg'
import './styles.css'

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
    const isPlaying = response.status !== 204
    if (response.error) {
      onError(response)
    }
    if (isPlaying) {
      setCurrentTrack((response as SpotifyApiResponse).item)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (token) fetchData()
    else setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return (
    <div className="rsm-container">
      <Logo className={currentTrack && 'active'} />

      <div className="content">
        {loading && 'Fetching Tunes...'}
        {!loading && !currentTrack && 'Not Playing'}
        {!loading && currentTrack && (
          <>
            <span className="name">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={currentTrack.external_urls?.spotify}>
                {currentTrack.name}
              </a>
            </span>
            <span className="artist">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={currentTrack.artists[0]?.external_urls?.spotify}>
                {currentTrack.artists[0]?.name}
              </a>
            </span>
          </>
        )}
      </div>
    </div>
  )
}

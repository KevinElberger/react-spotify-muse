import React, { useEffect, useState } from 'react'
import { getNowPlaying } from '../../spotify'
import { SpotifyApiError, SpotifyApiResponse, Track } from '../../types'
import Logo from './logo.svg'
import './styles.css'

interface Props {
  /**
   * Spotify API OAuth Token
   */
  token: string
  /**
   * If enabled, will poll the Spotify API in set intervals
   * and will display any updates
   */
  usePolling: boolean
  /**
   * If enabled, will also fetch recently played tracks
   */
  showRecentTracks?: boolean
  /**
   * Event that is emitted whenever the Spotify API returns
   * an error. Use this event to know when to refresh the
   * Spotify API token. See here for details:
   * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recently-played
   */
  onError: (error: SpotifyApiError) => void
}

const twoMinutes = 1000 * 60 * 2

export const NowPlaying: React.FC<Props> = ({
  token,
  onError,
  usePolling,
  showRecentTracks = false,
}: Props): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true)
  const [currentTrack, setCurrentTrack] = useState<Track>()
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval>>()

  const fetchData = async () => {
    const response = await getNowPlaying(token)
    const isPlaying = response.status !== 204

    if (response.error) {
      onError(response)
      clearInterval(intervalId as ReturnType<typeof setInterval>)
    } else if (isPlaying) {
      setCurrentTrack((response as SpotifyApiResponse).item)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (token) fetchData()
    else setLoading(false)

    clearInterval(intervalId as ReturnType<typeof setInterval>)

    if (usePolling && token) {
      const id = setInterval(fetchData, twoMinutes)
      setIntervalId(id)
    }

    return () => clearInterval(intervalId as ReturnType<typeof setInterval>)
  }, [token])

  return (
    <div id="rsm" className="rsm-container" aria-label="Now playing on Spotify">
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

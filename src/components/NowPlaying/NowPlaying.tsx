import React, { useEffect, useState } from 'react'
import { getNowPlaying } from '../../spotify'
import {
  SpotifyApiError,
  SpotifyApiResponse,
  Track,
  Interval,
} from '../../types'
import Logo from './logo.svg'
import './styles.css'

interface NowPlayingProps {
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
  /**
   * An initial display value. This will be overwritten once
   * a valid token is provided
   */
  initialTrack?: {
    name: string
    artist: string
  }
}

const twoMinutes = 1000 * 60 * 2

export const NowPlaying: React.FC<NowPlayingProps> = ({
  token,
  onError,
  usePolling,
  initialTrack,
  showRecentTracks = false,
}: NowPlayingProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true)
  const [currentTrack, setCurrentTrack] = useState<Track>()
  const [intervalId, setIntervalId] = useState<Interval>()

  const fetchData = async () => {
    const response = await getNowPlaying(token)
    const isPlaying = response.status !== 204

    if (response.error) {
      onError(response)
      clearInterval(intervalId as Interval)
    } else if (isPlaying) {
      setCurrentTrack((response as SpotifyApiResponse).item)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (token) fetchData()
    else setLoading(false)

    clearInterval(intervalId as Interval)

    if (usePolling && token) {
      const id = setInterval(fetchData, twoMinutes)
      setIntervalId(id)
    }

    return () => clearInterval(intervalId as Interval)
  }, [token])

  return (
    <div id="rsm" className="rsm-container" aria-label="Now playing on Spotify">
      <Logo className={(currentTrack || initialTrack) && 'active'} />

      <div className="content">
        {loading && 'Fetching Tunes...'}
        {!loading && !currentTrack && !initialTrack && 'Not Playing'}
        {!loading && !currentTrack && initialTrack && (
          <>
            <span className="name">{initialTrack.name}</span>
            <span className="artist">{initialTrack.artist}</span>
          </>
        )}
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

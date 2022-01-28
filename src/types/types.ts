export interface SpotifyApiResponse {
  timestamp: number
  progress_ms: number
  item: Track
}

export interface Track {
  artists: Artist[]
  href: string
  id: string
  name: string
  preview_url: string
  uri: string
  images: Image[]
}

interface Artist {
  href: string
  id: string
  name: string
  type: string
  uri: string
}

interface Image {
  height: number
  url: string
  width: number
}

export interface SpotifyApiError {
  error: {
    status: number
    message: string
  }
}

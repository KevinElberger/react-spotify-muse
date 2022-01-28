const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`

export const getNowPlaying = async (token: string) => {
  try {
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.status < 500) {
      return await response.json()
    }
    throw new Error('An unexpected network error occurred.')
  } catch (error) {
    return error
  }
}

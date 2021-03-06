<p align="center">
  <img src="img/title.svg" alt="react spotify muse" />
</p>

# React Spotify Muse

[![Build Size](https://img.shields.io/bundlephobia/minzip/react-spotify-muse?label=bundle%20size&style=flat&colorA=000000&colorB=000000)](https://bundlephobia.com/result?p=react-spotify-muse)
[![Version](https://img.shields.io/npm/v/react-spotify-muse?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/react-spotify-muse)

A small, simple, and clean React component to help you show others what you're listening to at the moment.

## Installation

```sh
npm i react-spotify-muse
```

## Usage

In order to display what you're currently listening to, you'll need a Spotify Web API OAuth token.

If you're unfamiliar with how to get a token, follow Spotify's [Authorization Guide](https://developer.spotify.com/documentation/general/guides/authorization/).

When you've successfully authenticated with the Spotify API, pass your token into the `NowPlaying` component.

OAuth tokens do expire after a period of time. When the token becomes expired, the `onError` event will emit an error object with the `status` value as `401`. You can use this as a way to refresh your token, but it is preferable to keep track of the `expires_in` value associated with your token instead.

```jsx
import React from 'react'
import { NowPlaying } from 'react-spotify-muse'

const App = () => {
  const token = 'aExjz492zo04uc...'

  return <NowPlaying token={token} />
}
```

## Configuration

### Polling

The default behavior will only fetch the currently playing track when the component is mounted. If you provide an updated token value, the component will re-fetch the currently playing track.

If you'd wish to have the component poll the API to display updated tracks over time, use the `usePolling` prop. The default polling rate is once every 2 minutes.

### Styles

For simplicity, use the root element's ID value of `rsm` to override all styles.

```css
#rsm {
  border: 1px solid #000;
}
#rsm .name {
  font-weight: normal;
}
#rsm .artist {
  color: #000;
}
```

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

### Built With

- [React.js](https://reactjs.org/)

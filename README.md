# React Spotify Muse

A small, simple and clean React component to help you show others what you're listening to at the moment.

## Getting Started

### Installation

Install the package

```sh
npm i @kevinelberger/react-spotify-muse
```

## Usage

In order to display what you're currently listening to, you'll need a Spotify Web API OAuth token.

If you're unfamiliar with how to get a token, follow Spotify's [Authorization Guide](https://developer.spotify.com/documentation/general/guides/authorization/).

When you've successfully authenticated with the Spotify API, pass your token into the `NowPlaying` component.

OAuth tokens do expire after a period of time. When the token becomes expired, the `onError` event will emit an error object with the `status` value as `401`. You can use this as a way to refresh your token, but it is preferable to rely on the OAuth `expires_in` value instead.

```sh
import { NowPlaying } from '@kevinelberger/react-spotify-muse'

...
render() {
  <NowPlaying token={token} onError={handleError}>
}
```

## Configuration

### Polling

The default behavior will only fetch the currently playing track when the component is mounted. If you provide an updated token value, the component will re-fetch the currently playing track.

If you'd wish to have the component poll the API to display updated tracks over time, use the `usePolling` prop.

### Styles

Overriding styles is simple. For simplicity, use the root element's ID value to override all styles:

```css
#rsm {
  ...
}
```

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

### Built With

- [React.js](https://reactjs.org/)

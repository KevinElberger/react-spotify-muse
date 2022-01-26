import React from 'react'
import { render } from '@testing-library/react'
import { NowPlaying } from './NowPlaying'

describe('NowPlaying', () => {
  it('renders the NowPlaying component', () => {
    render(<NowPlaying />)
  })
})

import React from 'react'
import { render } from '@testing-library/react'
import { NowPlaying } from '../src/components/NowPlaying'

describe('NowPlaying', () => {
  it('renders the NowPlaying component', () => {
    render(<NowPlaying token="" onError={() => {}} />)
  })
})

import React, { useEffect, useState } from 'react'
const readingTime = require('reading-time/lib/reading-time')

export const ArticleHeader = ({ lastUpdated }) => {
  const [readTime, setReadTime] = useState()

  useEffect(() => {
    const text = [].slice
      .call(document.querySelectorAll('.wrapper p'))
      .map((p) => p.textContent)
      .join(' ')

    setReadTime(readingTime(text))
  }, [])

  return (
    <div className="flex justify-between py-12 text-gray-200">
      <div>Last updated {lastUpdated}</div>
      <div>{readTime?.text}</div>
    </div>
  )
}

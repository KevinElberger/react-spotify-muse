import React, { useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import { Sidebar } from './components/Sidebar'
import { MenuButton } from './components/MenuButton'
import GettingStarted from './pages/GettingStarted.mdx'
import Contributing from './pages/Contributing.mdx'
import NowPlaying from './pages/NowPlaying.mdx'
import ScrollToTop from './components/ScrollToTop.js'
import useComponentVisible from './hooks/useComponentVisible.js'
import './App.css'

function App() {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)

  SyntaxHighlighter.registerLanguage('bash', bash)
  SyntaxHighlighter.registerLanguage('jsx', jsx)

  useEffect(() => {
    if (isComponentVisible) document.body.classList.add('no-scroll')
    else document.body.classList.remove('no-scroll')
  }, [isComponentVisible])

  return (
    <div className="App bg-gray-500 grid h-full">
      <div className="lg:hidden absolute left-[32px] top-[24px]">
        <MenuButton onClick={() => setIsComponentVisible(true)} />
      </div>

      <BrowserRouter>
        {isComponentVisible && (
          <div
            ref={ref}
            className="h-full fixed bg-gray-400 z-10 animate-slide-in-right">
            <Sidebar />
          </div>
        )}

        <ScrollToTop />

        <div className="hidden lg:flex">
          <Sidebar />
        </div>

        <div className="wrapper p-10 w-full prose min-h-screen">
          <Routes>
            <Route exact path="/" element={<GettingStarted />} />
            <Route exact path="/contributing" element={<Contributing />} />
            <Route
              exact
              path="/components/now-playing"
              element={<NowPlaying />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

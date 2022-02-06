import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import { Sidebar } from './components/Sidebar'
import GettingStarted from './pages/getting-started.mdx'
import Contributing from './pages/contributing.mdx'
import './App.css'

function App() {
  SyntaxHighlighter.registerLanguage('bash', bash)
  SyntaxHighlighter.registerLanguage('jsx', jsx)

  return (
    <div className="App bg-gray-500 grid h-full">
      <BrowserRouter>
        <Sidebar />

        <div className="wrapper p-10 w-full prose min-h-screen">
          <Routes>
            <Route exact path="/" element={<GettingStarted />} />
            <Route exact path="/contributing" element={<Contributing />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

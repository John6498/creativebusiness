import { useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import HomePage from './components/HomePage'
import PortfolioPage from './components/PortfolioPage'
import ServicesPage from './components/ServicesPage'
import SiteHeader from './components/SiteHeader'

function AppLayout() {
  const [query, setQuery] = useState('')
  const { pathname } = useLocation()
  const longPage = pathname === '/about' || pathname === '/portfolio'

  return (
    <div className={`${longPage ? 'min-h-screen overflow-x-clip' : 'flex h-svh flex-col overflow-hidden max-[980px]:h-auto max-[980px]:min-h-screen max-[980px]:overflow-x-clip max-[980px]:overflow-y-visible'} bg-mist`}>
      <SiteHeader query={query} onQueryChange={setQuery} />
      <Routes>
        <Route path="/" element={<HomePage query={query} />} />
        <Route path="/services" element={<ServicesPage query={query} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage query={query} />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

function App() {
  return <BrowserRouter><AppLayout /></BrowserRouter>
}

export default App
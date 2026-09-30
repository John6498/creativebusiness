import { useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import ServicesPage from './pages/ServicesPage'
import SiteFooter from './components/layout/SiteFooter'
import SiteHeader from './components/layout/SiteHeader'

function AppLayout() {
  const [query, setQuery] = useState('')
  useLocation()

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-mist max-[980px]:min-h-screen max-[980px]:overflow-x-clip">
      <SiteHeader query={query} onQueryChange={setQuery} />
      <Routes>
        <Route path="/" element={<HomePage query={query} />} />
        <Route path="/services" element={<ServicesPage query={query} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage query={query} />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <SiteFooter />
    </div>
  )
}

function App() {
  return <BrowserRouter><AppLayout /></BrowserRouter>
}

export default App
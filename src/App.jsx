import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import PriceHistory from './pages/PriceHistory'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<HomePage />} />
          <Route path="/historia-cen" element={<PriceHistory />} />
          <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PrivacyPolicy from './pages/PrivacyPolicy'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<HomePage />} />
          <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </>
  )
}

export default App